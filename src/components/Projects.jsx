import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">SELECTED WORK</span>
            <h2>Projects I've Built</h2>
          </div>

          <p>
            A selection of web development projects and AI explorations focused on
            practical learning, modern interfaces, and real-world applications.
            </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;