import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">

      {/* PROJECT IMAGE */}
      <div className={`project-preview project-preview-${index + 1}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
          />
        ) : (
          <div className="project-placeholder">
            <span>{project.category}</span>
            <h3>{project.title}</h3>
          </div>
        )}
      </div>

      {/* PROJECT CONTENT */}
      <div className="project-content">

        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        {/* PROJECT STATUS */}
        {project.status && (
          <span className="project-status-badge">
            <span className="project-status-dot"></span>
            {project.status}
          </span>
        )}

        <p>{project.description}</p>

        {/* TECHNOLOGIES */}
        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        {/* PROJECT LINKS */}
        <div className="project-links">

          <div>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Project
                <ArrowUpRight size={16} />
              </a>
            ) : project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                Project Preview
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="project-status">
                Project Preview
              </span>
            )}
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRight size={15} />
            </a>
          )}

        </div>

      </div>
    </article>
  );
}

export default ProjectCard;