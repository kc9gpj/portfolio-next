import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
export default function About() {

  const handleClick = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <div className="resume-div" id="about">
      <div className="resume-div-content">
        <h1 className="mb-0">
          David
          <span className="text-primary last-name">Hoffmann</span>
        </h1>
        <div className="subheading mb-5">
          Shawnee, KS 66216 · (913) 325-0616 ·
          <a href="mailto:dave@dhoff.net">dave@dhoff.net</a>
        </div>
        <p className="lead mb-5">
          I am experienced in Full Stack Development utitlizing Python and
          Javascript along with their associated frameworks and libraries. I
          also have experience with Devops related tasks and server management.
          My skill set includes Javascript, jQuery, Node.js, MongoDB, SQL, Vue.js,
          React Native, React.js, Python, and Django.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/david-hoffmann-24495a103/"
            target="_blank"
          >
            <FontAwesomeIcon width="30px" icon={faLinkedinIn} />
          </a>
          <a
            className="social-icon"
            href="https://github.com/kc9gpj"
            target="_blank"
          >
            <FontAwesomeIcon width="30px" icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}
