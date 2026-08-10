import { Link, NavLink } from "react-router";
import { projects } from "./data/projects";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <p className="subtitle">REACT MACHINE CODING</p>

        <h1>Machine Coding Practice</h1>

        <p className="intro">
          Small React projects to practice frontend concepts, problem-solving
          and UI implementation.
        </p>
      </header>

      <section className="projects">
        <div className="projects-heading">
          <h2>Projects</h2>
          <span>{projects.length} projects</span>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <NavLink
              to={project.path}
              className="project-item"
              key={project.path}
            >
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="project-icon">{project.emoji}</div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-arrow">→</div>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
