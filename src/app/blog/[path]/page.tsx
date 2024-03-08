import { getBlogPosts } from "@/lib/blog-posts";
import Nav from "../../../../components/Nav";
import Markdown from "react-markdown";
import '../../../../styles/styles.css';
import Image from "next/image";

function convertISODateToString(isoString: string) {
    const date = new Date(isoString);
    const options: any = {
        year: 'numeric', month: 'long', day: 'numeric'
    };
    const dateString = date.toLocaleDateString('en-US', options);
    return `${dateString}`;
}

export default async function Blog(params: any) {
    const post: any = await getBlogPosts(params?.params?.path);
    console.log(post)

    return (
        <>
            <Nav />
            <div id="page-top">
                <div className="post-container">
                    <Image width={896} height={512} src={post?.post?.imagePath} alt={post?.post?.title} className="post-img-top" />
                    <div className="blog-card-body">
                        <p className="blog-card-text"><small className="text-muted">{convertISODateToString(post?.post?.createdAt)}</small></p>
                        <p className="blog-card-text"><small className="text-muted">By {post?.post?.author}</small></p>
                    </div>
                    <Markdown>{post?.post?.content}</Markdown>
                </div >
            </div>
        </>
    );
}
