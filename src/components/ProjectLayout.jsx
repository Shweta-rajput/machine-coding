import { NavLink } from "react-router";

const ProjectLayout = ({ title, description, icon, children }) => {
  return (
    <main className="project-page">
      <div className="project-container">
        <NavLink to="/" className="back-button">
          <span>←</span>
          Back to Projects
        </NavLink>

        <header className="project-header">
          <div className="project-title-row">
            <div className="project-title-icon">{icon}</div>

            <div>
              <h1>{title}</h1>

              {description && <p>{description}</p>}
            </div>
          </div>
        </header>

        <section className="project-workspace">{children}</section>
      </div>
    </main>
  );
};

export default ProjectLayout;
