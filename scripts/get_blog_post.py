from openai import OpenAI
import os
import json
import requests
from datetime import datetime
import re
from pymongo import MongoClient

openai_client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

MONGODB_URI = os.getenv('MONGODB_URI')
DB_NAME = 'blog'
COLLECTION_NAME = 'blogposts'
mongo_client = MongoClient(MONGODB_URI)
db = mongo_client[DB_NAME]
collection = db[COLLECTION_NAME]

def slugify(text):
    """Generates a slug for the given text."""
    slug = re.sub(r'\W+', '-', text)
    slug = slug.lower()
    slug = slug.strip('-')
    return slug
    
def get_all_titles():
    """Fetches all blog post titles from MongoDB and concatenates them into a single string."""
    titles = collection.find({}, {'title': 1, '_id': 0})
    title_list = [doc['title'] for doc in titles]
    title_string = ', '.join(title_list)
    print("Existing titles: ", title_string)
    return title_string

def generate_blog_post():
    """Generates blog post content using OpenAI."""
    response = openai_client.chat.completions.create(
        # model="gpt-3.5-turbo",
        model="gpt-4-0125-preview",
        messages=[
            {"role": "system", "content": "You are a helpful assistant designed to output JSON."},
            {"role": "user", "content": f"create a blog post about any javascript or python or any \
             libraries or framesworks for these two languages. \
              do not use any previously used titles: {get_all_titles()} \
                keep it professional but casual. don't sound like a robot \
                write at least 5-7 paragraphs(with code snippets as needed) in a field called content as markdown, \
                other fields to return are title, categories, and \
                 a summary field with the first 2-3 sentences of the article"}
        ]
    )
    # print(response)
    content_str = response.choices[0].message.content
    print(content_str)
    content_dict = json.loads(content_str)
    print(content_dict['title'])
    return content_dict

def fetch_blog_image(title):
    """Fetches an image for the blog post using OpenAI's image generation."""
    response = openai_client.images.generate(
        model="dall-e-3",
        prompt=f"blog post image for title {title}, keep the image professional and not too flashy",
        size="1792x1024",
        quality="standard",
        n=1,
    )
    image_url = response.data[0].url
    print(image_url)
    return image_url

def save_image(image_url, title):
    """Saves the blog post image to a local path."""
    save_path = f"../public/images/blog/{slugify(title)}.jpg"
    response = requests.get(image_url)
    if response.status_code == 200:
        with open(save_path, 'wb') as file:
            file.write(response.content)
        print(f"Image saved to {save_path}")
        return save_path
    else:
        print("Failed to retrieve the image")
        return None

def upload_data_to_mongodb(content_dict, image_path):
    """Uploads the blog post data to MongoDB."""
    blog_data = {
        'title': content_dict['title'],
        'imagePath': image_path.replace('../public',''),
        'content': content_dict['content'],
        'summary': content_dict['summary'],
        'author': 'David Hoffmann',
        'slug': slugify(content_dict['title']),
        'createdAt': datetime.now(),
        'updatedAt': datetime.now()
    }
    insert_result = collection.insert_one(blog_data)
    if insert_result.acknowledged:
        print(f"Blog post saved to MongoDB with _id: {insert_result.inserted_id}")
    else:
        print("Failed to save the blog post to MongoDB")

if __name__ == '__main__':
    content_dict = generate_blog_post()
    image_url = fetch_blog_image(content_dict['title'])
    image_path = save_image(image_url, content_dict['title'])
    if image_path:
        upload_data_to_mongodb(content_dict, image_path)
