const MAIN_URL = 'https://dhoff.net/blog';
import { getBlog } from "@/lib/blog-posts";

function formatDateToYYYYMMDD(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
}
function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://dhoff.net</loc>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://dhoff.net/blog</loc>
       <priority>1.0</priority>
     </url>
     ${posts
      .map(({ updatedAt, slug }) => {
        return `
       <url>
           <loc>${`${MAIN_URL}/${slug}`}</loc>
           <priority>0.9</priority>
           <lastmod>${formatDateToYYYYMMDD(updatedAt)}</lastmod>
       </url>
     `;
      })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const posts = await getBlog();
  console.log(posts)
  console.log(posts.posts)
  const sitemap = generateSiteMap(posts.posts);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
