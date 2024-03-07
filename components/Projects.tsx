import Image from "next/image";

interface ProjectProps {
  project: any;
}

const projects: any = [
  {
    id: "portfolio",
    title: "Portfolio: Next.js, Typescript, MongoDB, Python",
    imgSrc: "/images/portfolio-next.png",
    viewLink: "https://dhoff.net",
    sourceLink: "https://github.com/kc9gpj/portfolio-next",
    technologies: ["next.png", "typescript.png", "mongo.png", "python.png"],
  },
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
    sourceLink: "",
    technologies: ["python.png", "javascript.png", "vue.png"],
  },
  {
    id: "now-playing",
    title: "Now Playing: Angular, Typescript",
    imgSrc: "/images/nowplaying.png",
    viewLink: "https://angular-now-playing.vercel.app/movies",
    sourceLink: "https://github.com/kc9gpj/angular-now-playing",
    technologies: ["angular.png", "typescript.png"],
  },
  {
    id: "integrated-roadways",
    title: "Integrated Roadways: Node.js, React, Typescript GraphQL",
    imgSrc: "/images/integrated.png",
    viewLink: "https://integratedroadways.com",
    sourceLink: "",
    technologies: ["react.png", "node.png", "typescript.png", "graphql.png"],
  },
];

const ProjectCard: React.FC<ProjectProps> = ({ project }) => (
  <li className="col-6 mb-3">
    <div className="card h-100">
      <img className="card-img-top" src={project.imgSrc} alt={project.title} />
      <div className="card-body">
        <h2 className="project-text card-text text-centered">
          {project.title}
        </h2>
        <div id="icons">
          {project.technologies.map((tech: any) => (
            <Image key={tech} src={`/images/${tech}`} alt={tech} className="ml-1" height="32" width="32" />
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
          {!project.sourceLink && (
            <a
              className="btn btn-secondary"
            >
              Private
            </a>
          )}
        </div>
      </div>
    </div>
  </li>
);

export default function Projects() {
  return (
    <div className="container-div" id="projects">
      <div className="container-div-content">
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
