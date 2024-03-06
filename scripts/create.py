from datetime import datetime
import uuid
from pymongo import MongoClient

# Your MongoDB URI - replace it with your actual connection string
MONGO_URI = ''
DB_NAME = 'BlogPost'
COLLECTION_NAME = 'posts'

def generate_dummy_posts(n=3):
    """
    Generates dummy blog posts.

    Parameters:
    n (int): Number of blog posts to generate.

    Returns:
    list: A list of dictionaries, each representing a blog post.
    """
    dummy_posts = []
    for _ in range(n):
        post = {
            "title": f"Dummy Title {uuid.uuid4()}",
            "imageUrl": f"https://example.com/image/{uuid.uuid4()}.jpg",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "author": "John Doe",
            "createdAt": datetime.now(),
            "updatedAt": datetime.now(),
        }
        dummy_posts.append(post)
    return dummy_posts

def insert_posts_into_mongodb(posts):
    """
    Inserts a list of posts into a MongoDB collection.

    Parameters:
    posts (list): A list of dictionaries, each representing a blog post to insert.
    """
    # Establishing the connection
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    collection = db[COLLECTION_NAME]
    
    # Inserting the posts
    result = collection.insert_many(posts)
    
    # Closing the connection
    client.close()
    
    return result.inserted_ids

# Generate the dummy posts
dummy_posts = generate_dummy_posts()

# Insert the posts into MongoDB and print the IDs of the inserted documents
inserted_ids = insert_posts_into_mongodb(dummy_posts)
print("Inserted document IDs:", inserted_ids)
