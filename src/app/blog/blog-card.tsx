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
    return (
        <>
            <div className={`blog-card large`}>
                <img src={post?.imagePath.replace('../public/images/blog/', '/images/')} alt={post?.title} className="blog-card-img-top" />
                <div className="blog-card-body">
                    <h2 className="blog-card-title">{post?.title}</h2>
                    <p className="blog-card-text"><small className="text-muted">{convertISODateToString(post?.createdAt)}</small></p>
                    <div>{post?.summary}...</div>
                    <p className="blog-card-text"><small className="text-muted">By {post?.author}</small></p>
                </div>
                <div className="text-center">
                    <a href={`/blog/${post?.slug}`} className="btn-primary p-3 m-3">Read More</a>
                </div>
            </div >
        </>
    );
}
