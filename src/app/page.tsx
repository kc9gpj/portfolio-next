import Image from "next/image";
import styles from "./page.module.css";
import "../../styles/styles.css";
import Nav from "../../components/Nav";
import About from "../../components/Abouts";
import Resume from "../../components/Resume";
import Projects from "../../components/Projects";
import Education from "../../components/Education";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";

// TO DO:
// - check if anything broke in scripts
// - styling on projects page
// - fix image paths
// - skill and contact not navigating
// - routing? do i bother?
// - blog section and posts (probably component on npm to use...does it need to be full blown and search and everything?)
// - cut any unused css, but not sure how (move to tailwind?)
// - better more descriptive classnames
export default function Home() {
  return (
    <>
      {/* <head>
   <meta charset="utf-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
   <meta name="description" content="" />
   <meta name="author" content="" />
   <title>David Hoffmann</title>
   <link rel="icon" type="image/x-icon" href="images/icon.png" />
   <!-- Font Awesome icons (free version)-->
   <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossorigin="anonymous"></script>
   <!-- Google fonts-->
   <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet"
      type="text/css" />
   <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
   <!-- Core theme CSS (includes Bootstrap)-->
   <link href="css/styles.css" rel="stylesheet" />
</head> */}

      <div id="page-top">
        <Nav />
        <div className="container-fluid p-0">
          <About />
          <hr className="m-0" />
          <Resume />
          <hr className="m-0" />
          <Projects />
        </div>
        <Education />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Contact />
      </div>
    </>
  );
}
