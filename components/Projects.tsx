interface ProjectProps {
  project: any;
}

const projects: any = [
  {
    id: "stocks",
    title: "Stock Ticker Trends: Python, Django, Javascript, SQLite",
    imgSrc: "/images/stocks.png",
    viewLink: "https://stock-data-static.vercel.app/",
    sourceLink: "https://github.com/kc9gpj/stock_data",
    technologies: ["python.png", "javascript.png"],
  },
  {
    id: "marketing",
    title: "Marketing Website: Python, Django, Vue.js",
    imgSrc: "/images/marketing.png",
    viewLink: "https://www.legalfit.com",
    sourceLink: "", // Private
    technologies: ["python.png", "javascript.png", "vue.png"],
  },
  {
    id: "sales-app",
    title: "Sales App: React-Native, Apex/SOQL",
    imgSrc: "/images/demo.png",
    viewLink: "", // Demo or private, no link provided
    sourceLink: "", // Private
    technologies: ["react_native.png", "salesforce.png"],
  },
  {
    id: "now-playing",
    title: "Now Playing: Angular",
    imgSrc: "/images/nowplaying.png",
    viewLink: "https://angular-now-playing.vercel.app/movies",
    sourceLink: "https://github.com/kc9gpj/angular-now-playing",
    technologies: ["angular.png"],
  },
  {
    id: "clicky-game",
    title: "South Park Clicky Game: React.js",
    imgSrc: "/images/southpark.png",
    viewLink: "https://south-park-clicky-game.vercel.app/",
    sourceLink: "https://github.com/kc9gpj/SouthParkClickyGame",
    technologies: ["react.png"],
  },
  {
    id: "integrated-roadways",
    title: "Integrated Roadways: Node.js, React.js, GraphQL",
    imgSrc: "/images/integrated.png",
    viewLink: "https://integratedroadways.com",
    sourceLink: "", // Private
    technologies: ["react.png", "node.png", "graphql.png"],
  },
  // Example of another project without a view link (demo or private)
  {
    id: "project-management",
    title: "Project Management Dashboard: Vue.js, Firebase",
    imgSrc: "/images/project_management.png",
    viewLink: "", // Assume no public view available
    sourceLink: "https://github.com/your-github/project-management-dashboard",
    technologies: ["vue.png", "firebase.png"],
  },
];

const ProjectCard: React.FC<ProjectProps> = ({ project }) => (
  <li className="col-6">
    <div className="card h-100">
      <img className="card-img-top" src={project.imgSrc} alt="Card image cap" />
      <div className="card-body">
        <h2 className="project-text card-text text-centered">
          {project.title}
        </h2>
        <div id="icons">
          {project.technologies.map((tech: any) => (
            <img key={tech} src={`/images/${tech}`} height="32" width="32" />
          ))}
        </div>
      </div>
      <div className="wrapper text-center">
        <div className="btn-group">
          {project.viewLink && (
            <a
              href={project.viewLink}
              target="_blank"
              className="btn btn-primary"
            >
              View
            </a>
          )}
          {project.sourceLink && (
            <a
              href={project.sourceLink}
              target="_blank"
              className="btn btn-success"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  </li>
);

export default function Projects() {
  return (
    <div className="resume-div" id="projects">
      <div className="resume-div-content">
        <h2 className="mb-5">Projects</h2>
        <div className="container" id="jumbotron">
          <ol className="row" id="table">
            {projects.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
