import "../../../styles/styles.css";

function convertISODateToString(isoString: string) {
    const date = new Date(isoString);
    const options: any = {
        year: 'numeric', month: 'long', day: 'numeric'
    };
    const dateString = date.toLocaleDateString('en-US', options);
    return `${dateString}`;
}

export default function BlogCard(props: any) {

    const post = props.post;
    console.log(post)
    // const markdown = "Promises in JavaScript are a powerful tool for handling asynchronous operations in a more elegant and readable way. As developers, we often encounter situations where we need to wait for some operation to complete before proceeding to the next step. This is where promises shine, allowing us to write cleaner and more maintainable code.\n\n```javascript\nfunction fetchData(url) {\n    return new Promise((resolve, reject) => {\n        fetch(url)\n            .then(response => {\n                if(response.ok) {\n                    resolve(response.json());\n                } else {\n                    reject('Failed to fetch data');\n                }\n            })\n            .catch(error => {\n                reject(error);\n            });\n    });\n}\n```\n\nWith promises, we can avoid callback hell and chain multiple asynchronous operations together in a more structured manner. This leads to code that is easier to reason about and maintain. By handling both success and error cases separately, promises provide a clear and concise way to manage asynchronous code.\n\nPromises also allow us to handle multiple asynchronous operations concurrently using methods like `Promise.all` and `Promise.race`. This enables us to improve the performance of our applications by fetching data in parallel rather than sequentially.\n\nIn conclusion, mastering promises in JavaScript is crucial for any developer looking to build modern and efficient web applications. By understanding how to leverage promises effectively, we can write cleaner, more readable code that handles asynchronous operations with ease."
    // const markdown = "```python name = 'Scott' print 'Hi my name is ' + name```"
    const markdown = "# Understanding Async/Await in JavaScript: A Simple Guide\n\nAs JavaScript applications become more complex, handling asynchronous operations has become an integral part of development. Promises were introduced to better manage these operations, but even with promises, the code could become cumbersome. Enter `async/await`, a syntactic sugar on top of promises, making asynchronous code look and behave a bit more like synchronous code. Let's dive into how you can simplify your asynchronous JavaScript code using `async` and `await`.\n\n## Getting Started with Async/Await\n\nThe `async` keyword is used to declare an asynchronous function, which then allows you to use the `await` keyword within it. `Await` pauses the execution of async functions, waiting for a Promise to resolve, making your asynchronous code read more like a traditional synchronous code flow:\n\n```javascript\nasync function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Fetch error:', error);\n  }\n}\n\nfetchData();\n```\n\n## Handling Errors\n\nWhen using `async/await`, handling errors becomes straightforward with try/catch blocks. This pattern improves readability and makes your code cleaner compared to chaining `.then()` and `.catch()` with promises:\n\n```javascript\nasync function fetchWithTryCatch() {\n  try {\n    const response = await fetch('https://api.example.com/fail');\n    const data = await response.json();\n    console.log('Data:', data);\n  } catch (error) {\n    console.error('Error while fetching:', error);\n  }\n}\n\nfetchWithTryCatch();\n```\n\n## Best Practices\n\nWhile `async/await` makes your code more readable and terse, it's important to not overuse it. Be judicious in its application—use it when it genuinely makes your code cleaner and more understandable. Also, remember to always handle errors to prevent your application from crashing. Asynchronous programming in JavaScript has come a long way, and with tools like `async/await`, it's easier than ever to write robust and maintainable code.\n\nEmbracing `async/await` can significantly clean up your JavaScript code and improve error handling. As you become more familiar with asynchronous programming, you'll appreciate the simplicity and effectiveness that `async/await` brings to the table. Happy coding!"
    // const markdown = "Welcome to our latest blog post where we delve into one of JavaScript's powerful features: async/await. As developers, dealing with asynchronous operations is part of our daily routine, whether it's fetching data from an API, reading files, or just delaying an operation. Prior to ES2017, promises were the go-to solution for handling asynchronous operations, but they could easily lead to 'callback hell' or complex chains. Enter async/await, a syntactic sugar on top of promises, designed to simplify writing asynchronous code that looks and behaves a bit more like synchronous code.\n\nLet's start with a basic example to understand how async/await works. Imagine you're fetching user data from an API. Using promises, your code might look like this:\n```javascript\nfetch('https://api.example.com/user')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));\n```\nNow, let's refactor that with async/await for a cleaner approach:\n```javascript\nasync function fetchUserData() {\n  try {\n    const response = await fetch('https://api.example.com/user');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\nfetchUserData();\n```\nIn this snippet, `fetchUserData` is an asynchronous function. By using `await`, we tell JavaScript to wait for the promise returned by `fetch` to settle, either to a resolved state with the user data or to a rejected state with an error, before moving on. This makes our code easier to read and debug.\n\nBut async/await doesn't just stop at making code look cleaner. It allows for easier error handling through try/catch blocks, making it seamless to catch and handle errors locally within the async function. Moreover, for sequential and parallel operations, async/await offers a straightforward syntax, reducing the need for boilerplate code and improving readability. In conclusion, embracing async/await can significantly simplify your asynchronous JavaScript code, making your development process more efficient and enjoyable. Don't shy away from experimenting with it in your projects!"
    const summary = "In today's web development landscape, handling asynchronous operations is more crucial than ever. JavaScript's async/await syntax has transformed the way we deal with these operations, making our code cleaner and more readable. Let's dive into why async/await is a game-changer and how you can leverage it to write better asynchronous code."
    // blog_data = {
    //     'title': content_dict['title'],
    //     'imagePath': image_path,
    //     'content': content_dict['content'],
    //     'author': 'David Hoffmann',
    //     'slug': slugify(content_dict['title']),
    //     'createdAt': datetime.now(),
    //     'updatedAt': datetime.now()
    // }
    return (
        <>
            {/* <div className={`blog-card ${size}`}> */}
            <div className={`blog-card large`}>
                <img src={post.imagePath.replace('../public/images/blog/', '/images/')} alt={post.title} className="blog-card-img-top" />
                <div className="blog-card-body">
                    <h2 className="blog-card-title">{post.title}</h2>
                    <p className="blog-card-text"><small className="text-muted">{convertISODateToString(post?.createdAt)}</small></p>
                    <div>{summary}...</div>
                    <p className="blog-card-text"><small className="text-muted">By {post.author}</small></p>
                </div>
                <div className="text-center">
                    <a href={`/blog/${post.slug}`} className="btn-primary p-3 m-3">Read More</a>
                </div>
            </div >

        </>
    );
}
