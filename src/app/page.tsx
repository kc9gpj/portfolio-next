import "../../styles/styles.css";
import Nav from "../../components/Nav";
import About from "../../components/Abouts";
import Resume from "../../components/Resume";
import Projects from "../../components/Projects";
import Education from "../../components/Education";
import Contact from "../../components/ContactForm";
import Interests from "../../components/Interests";
// TO DO:
// - check if anything broke in scripts
// - hamburger dropdown not working
// - move skills t obottom of about
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
      <Nav />
      <div id="page-top">
        <div className="container-fluid p-0">
          <About />
          <hr className="m-0" />
          <Resume />
          <hr className="m-0" />
          <Projects />
        </div>
        <Education />
        <hr className="m-0" />
        <Interests />
        <hr className="m-0" />
        <Contact />
      </div>
    </>
  );
}
