import Markdown from "react-markdown";
import "../../../styles/styles.css";

export default function BlogCard(props: any) {

    const post = props.post;
    console.log(post)
    const markdown = "Promises in JavaScript are a powerful tool for handling asynchronous operations in a more elegant and readable way. As developers, we often encounter situations where we need to wait for some operation to complete before proceeding to the next step. This is where promises shine, allowing us to write cleaner and more maintainable code.\n\n```javascript\nfunction fetchData(url) {\n    return new Promise((resolve, reject) => {\n        fetch(url)\n            .then(response => {\n                if(response.ok) {\n                    resolve(response.json());\n                } else {\n                    reject('Failed to fetch data');\n                }\n            })\n            .catch(error => {\n                reject(error);\n            });\n    });\n}\n```\n\nWith promises, we can avoid callback hell and chain multiple asynchronous operations together in a more structured manner. This leads to code that is easier to reason about and maintain. By handling both success and error cases separately, promises provide a clear and concise way to manage asynchronous code.\n\nPromises also allow us to handle multiple asynchronous operations concurrently using methods like `Promise.all` and `Promise.race`. This enables us to improve the performance of our applications by fetching data in parallel rather than sequentially.\n\nIn conclusion, mastering promises in JavaScript is crucial for any developer looking to build modern and efficient web applications. By understanding how to leverage promises effectively, we can write cleaner, more readable code that handles asynchronous operations with ease."
    // const markdown = "```python name = 'Scott' print 'Hi my name is ' + name```"
    return (
        <>
            {/* <div className={`card ${size}`}> */}
            <div className={`card large`}>
                <img src={post.imageUrl} alt={post.title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text"><small className="text-muted">August 13, 2021</small></p>

                    {/* <p className="card-text">{post.content}</p> */}
                    <Markdown>{markdown}</Markdown>
                    <p className="card-text"><small className="text-muted">By {post.author}</small></p>
                </div>
                <div className="text-center">
                    <button className="btn-primary p-3 m-3">Read More</button>
                </div>
            </div >

        </>
    );
}
