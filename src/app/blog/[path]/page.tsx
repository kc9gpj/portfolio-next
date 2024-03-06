import "../../../styles/styles.css";
import Nav from "../../../../components/Nav";

export default function Blog() {

    const baseUrl = process.env.NODE_ENV === 'production' ? 'http://dhoff.net' : 'http://localhost:3001';

    async function fetchData() {
        const response = await fetch(`${baseUrl}/api/routes`);
        const data = await response.json();
        console.log(data);
    }

    fetchData();

    return (
        <>a
            <Nav />
            <div id="page-top">
                <div className="container-fluid p-0">
                    Blog
                </div>
            </div>
        </>
    );
}
