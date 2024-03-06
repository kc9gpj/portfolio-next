import "../../../styles/styles.css";

export default function BlogCard(props: any) {

    const post = props.post;
    console.log(post)
    return (
        // <div className={`card ${size}`}>
        <div className={`card large`}>
            <a href={post.imageUrl} target="_blank" rel="noopener noreferrer">
                <img src={post.imageUrl} alt={post.title} className="card-img-top" />
            </a>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <p className="card-text"><small className="text-muted">By {post.author}</small></p>
            </div>
        </div >
    );
}
