import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { LuBrainCircuit } from "react-icons/lu";

import techStack from "../data/techStack";

const techIcons = {
  HTML5: {
    icon: FaHtml5,
    color: "#E34F26",
  },
  CSS3: {
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  JavaScript: {
    icon: FaJs,
    color: "#F7DF1E",
  },
  React: {
    icon: FaReact,
    color: "#61DAFB",
  },
  Python: {
    icon: FaPython,
    color: "#3776AB",
  },
  MySQL: {
    icon: SiMysql,
    color: "#4479A1",
  },
  Git: {
    icon: FaGitAlt,
    color: "#F05032",
  },
  GitHub: {
    icon: FaGithub,
    color: "#181717",
  },
  "VS Code": {
    icon: VscCode,
    color: "#007ACC",
  },
  "AI Integration": {
    icon: LuBrainCircuit,
    color: "#6C63FF",
  },
};

function TechStack() {
  return (
    <section id="technologies" className="tech-section">
      <div className="section-container">

        <div className="tech-heading">
          <span className="section-eyebrow">
            TECHNOLOGIES
          </span>

          <h2>
            Technologies I<span> Use & Explore</span>
            </h2>
        </div>

        <div className="tech-grid">
          {techStack.map((tech) => {
            const techIcon = techIcons[tech.name];
            const Icon = techIcon?.icon;

            return (
              <div className="tech-card" key={tech.name}>
                <div className="tech-icon">
                  {Icon ? (
                    <Icon
                      className="tech-brand-icon"
                      style={{ color: techIcon.color }}
                      aria-hidden="true"
                    />
                  ) : (
                    tech.short
                  )}
                </div>

                <div className="tech-info">
                  <strong>{tech.name}</strong>
                  <span>{tech.category}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default TechStack;