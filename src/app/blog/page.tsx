import "../../../styles/styles.css";
import Nav from "../../../components/Nav";
import { getBlog } from "@/lib/blog-posts";
import BlogCard from "./blog-card";

export default async function Blog() {

    const posts: any = await getBlog();
    console.log(posts)
    if (!posts) {
        return;
    }
    return (
        <>
            <Nav />
            <div id="page-top" className="post-container">
                <div className="container">
                    {posts?.posts?.map((post: any) => (
                        <BlogCard key={post.title} post={post} />
                    ))}
                </div>
            </div>
        </>
    );
}
