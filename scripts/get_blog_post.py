from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

response = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a helpful assistant designed to output JSON."},
    {"role": "user", "content": "create a blog post about any javascript or python subject. \
    keep it proffesional but casual. dont sound like a robot \
    write at least 3-4 paragraphs and add code snippets as needed, return content as a markdown string \
    fields to return are title, date, author, categories, and content as markdown"}
  ]
)
print(response)
print(response.choices[0].message.content)

# response.choices[0].message.content example
# {
#     "title": "The Power of Promises in JavaScript",
#     "date": "2022-04-05",
#     "author": "Sarah Developer",
#     "categories": ["JavaScript", "Web Development"],
#     "content": "Promises in JavaScript are a powerful tool for handling asynchronous operations in a more elegant and readable way. As developers, we often encounter situations where we need to wait for some operation to complete before proceeding to the next step. This is where promises shine, allowing us to write cleaner and more maintainable code.\n\n```javascript\nfunction fetchData(url) {\n    return new Promise((resolve, reject) => {\n        fetch(url)\n            .then(response => {\n                if(response.ok) {\n                    resolve(response.json());\n                } else {\n                    reject('Failed to fetch data');\n                }\n            })\n            .catch(error => {\n                reject(error);\n            });\n    });\n}\n```\n\nWith promises, we can avoid callback hell and chain multiple asynchronous operations together in a more structured manner. This leads to code that is easier to reason about and maintain. By handling both success and error cases separately, promises provide a clear and concise way to manage asynchronous code.\n\nPromises also allow us to handle multiple asynchronous operations concurrently using methods like `Promise.all` and `Promise.race`. This enables us to improve the performance of our applications by fetching data in parallel rather than sequentially.\n\nIn conclusion, mastering promises in JavaScript is crucial for any developer looking to build modern and efficient web applications. By understanding how to leverage promises effectively, we can write cleaner, more readable code that handles asynchronous operations with ease."
# }

print(f"blost post image for title {response.choices[0].message.content.title}")

response = client.images.generate(
  model="dall-e-3",
  prompt="blost post image for title: The Power of Promises in JavaScript",
  size="1024x1024",
  quality="standard",
  n=1,
)

image_url = response.data[0].url
print(response)
# response example
# ImagesResponse(created=1709824927, data=[Image(b64_json=None, revised_prompt="Create an image that illustrates the concept of 'The Power of Promises in JavaScript'. Think about a large, enduring battery representing power, surrounded by abstract shapes embodying JavaScript syntax and coding elements. On the battery, write the word 'Promises'. Wire connections from the battery lead to glowing, functional gadgets — a reflection of the actions powered by these JavaScript promises.", url='https://oaidalleapiprodscus.blob.core.windows.net/private/org-yrmCAfJpZv8w48JCxElWRN1i/user-ymeocsLcECW5ZNrHnz65XGEO/img-R4ddMPRVGLOiI3Kc7wv2fTRm.png?st=2024-03-07T14%3A22%3A07Z&se=2024-03-07T16%3A22%3A07Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-03-07T14%3A26%3A13Z&ske=2024-03-08T14%3A26%3A13Z&sks=b&skv=2021-08-06&sig=99%2BbdfWzIxpBK3vvZrxfiq3FtRaqkQx3%2B%2BM4VwiWNhg%3D')])

print(image_url)