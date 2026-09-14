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

import {
  Code2,
  Target,
  BarChart3,
  Lightbulb,
} from "lucide-react";

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
      <div className="section-container tech-reference-layout">

        {/* LEFT SIDE */}
        <div className="tech-reference-content">
          <span className="section-eyebrow">
            TECH TOOLS
          </span>

          <h2 className="tech-reference-title">
            Technologies Behind 
            <br />
            <span>My Work.</span>
          </h2>

          <p className="tech-reference-description">
            I work with modern web development tools and technologies to build 
            practical projects, strengthen my technical skills, 
            and explore new ideas.I continuously expand my toolkit as I learn, 
            experiment, and grow as a developer.
          </p>

          <div className="tech-reference-stats">
            <div>
              <strong>10+</strong>
              <span>Tools</span>
            </div>

            <div>
              <strong>3+</strong>
              <span>Domains</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Learning</span>
            </div>
          </div>
        </div>

        {/* ORBIT AREA */}
        <div className="tech-reference-orbit">

          <div className="tech-reference-ring ring-one" />
          <div className="tech-reference-ring ring-two" />
          <div className="tech-reference-ring ring-three" />
          <div className="tech-reference-ring ring-four" />

          <span className="orbit-dot orbit-dot-1" />
          <span className="orbit-dot orbit-dot-2" />
          <span className="orbit-dot orbit-dot-3" />
          <span className="orbit-dot orbit-dot-4" />
          <span className="orbit-dot orbit-dot-5" />
          <span className="orbit-dot orbit-dot-6" />

          <div className="tech-reference-center">
            <div className="tech-reference-center-icon">
              <Code2 size={24} />
            </div>

            <strong>Tech Tools</strong>

            <span>
              Build • Learn • Grow
            </span>
          </div>

          <div className="tech-reference-rotator">
            {techStack.map((tech, index) => {
              const techData = techIcons[tech.name];
              const Icon = techData?.icon;

              const angle = index * 36;

              return (
                <div
                  className="tech-reference-node"
                  key={tech.name}
                  style={{
                    "--node-angle": `${angle}deg`,
                  }}
                >
                  <div className="tech-reference-angle-fix">
                    <div className="tech-reference-counter">

                      <div className="tech-reference-icon">
                        {Icon ? (
                          <Icon
                            className="tech-reference-brand-icon"
                            style={{ color: techData.color }}
                            aria-hidden="true"
                          />
                        ) : (
                          <span>{tech.short}</span>
                        )}
                      </div>

                      <span className="tech-reference-name">
                        {tech.name}
                      </span>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="section-container tech-reference-bottom">

        <div className="tech-reference-bottom-item">
          <div className="tech-reference-bottom-icon">
            <Target size={26} />
          </div>

          <div>
            <strong>Explore</strong>
            <span>Always learning new tools</span>
          </div>
        </div>

        <div className="tech-reference-bottom-item">
          <div className="tech-reference-bottom-icon">
            <BarChart3 size={26} />
          </div>

          <div>
            <strong>Build</strong>
            <span>Turn ideas into real projects</span>
          </div>
        </div>

        <div className="tech-reference-bottom-item">
          <div className="tech-reference-bottom-icon">
            <Lightbulb size={26} />
          </div>

          <div>
            <strong>Grow</strong>
            <span>Improve with every experience</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TechStack;