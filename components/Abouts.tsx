export default function About() {
  return (
    <div className="resume-div" id="about">
      <div className="resume-div-content">
        <h1 className="mb-0">
          David
          <span className="text-primary">Hoffmann</span>
        </h1>
        <div className="subheading mb-5">
          Shawnee, KS 66216 · (913) 325-0616 ·
          <a href="mailto:dave@dhoff.net">dave@dhoff.net</a>
        </div>
        <p className="lead mb-5">
          I am experienced in Full Stack Development utitlizing Python and
          Javascript along with their associated frameworks and libraries. I
          also have experience with Devops related tasks and server management.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/david-hoffmann-24495a103/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="social-icon"
            href="https://github.com/kc9gpj"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
