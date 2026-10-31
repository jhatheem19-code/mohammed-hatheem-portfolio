import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiFastapi,
  SiMysql,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    Icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    Icon: FaJs,
    color: "#F7DF1E",
  },
  {
    name: "HTML5",
    Icon: FaHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    Icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    name: "Python",
    Icon: FaPython,
    color: "#3776AB",
  },
  {
    name: "FastAPI",
    Icon: SiFastapi,
    color: "#009688",
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "Git",
    Icon: FaGitAlt,
    color: "#F05032",
  },
  {
    name: "GitHub",
    Icon: FaGithub,
    color: "#181717",
  },
];

function TechStack() {
  return (
    <section
      id="technologies"
      className="tech-section tech-stack-compact"
    >
      <div className="section-container">
        <div className="tech-stack-header">
          <span className="section-eyebrow">
            TECH STACK
          </span>

          <h2 className="tech-reference-title">
            Tools I build with
          </h2>
        </div>

        <ul
          className="tech-stack-chip-row"
          aria-label="Technologies I use"
        >
          {technologies.map(({ name, Icon, color }) => (
            <li
              className="tech-stack-chip"
              key={name}
            >
              <Icon
                className="tech-stack-chip-icon"
                style={{ color }}
                aria-hidden="true"
                focusable="false"
              />

              <span className="tech-stack-chip-name">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .tech-stack-compact .tech-stack-header {
          margin-bottom: 32px;
        }

        .tech-stack-compact .tech-stack-chip-row {
          display: grid;
          grid-template-columns: repeat(9, minmax(0, 1fr));
          gap: 14px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .tech-stack-compact .tech-stack-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          box-sizing: border-box;
          width: 100%;
          min-height: 120px;
          padding: 18px 8px;
          background: #ffffff;
          border: 1px solid #dfe5eb;
          border-radius: 14px;
          color: #14243b;
          font-family: inherit;
          font-size: clamp(14px, 1.15vw, 18px);
          font-weight: 600;
          line-height: 1.3;
          text-align: center;
          transition: transform 180ms ease;
        }

        .tech-stack-compact .tech-stack-chip:hover {
          transform: translateY(-3px);
        }

        .tech-stack-compact .tech-stack-chip-icon {
          width: clamp(30px, 2.4vw, 42px);
          height: clamp(30px, 2.4vw, 42px);
          flex-shrink: 0;
        }

        .tech-stack-compact .tech-stack-chip-name {
          white-space: nowrap;
        }

        @media (max-width: 1200px) {
          .tech-stack-compact .tech-stack-chip-row {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .tech-stack-compact .tech-stack-chip {
            font-size: 17px;
          }

          .tech-stack-compact .tech-stack-chip-icon {
            width: 36px;
            height: 36px;
          }
        }

        @media (max-width: 600px) {
          .tech-stack-compact .tech-stack-chip-row {
            gap: 10px;
          }

          .tech-stack-compact .tech-stack-chip {
            min-height: 100px;
            padding: 14px 6px;
            gap: 10px;
            font-size: 14px;
          }

          .tech-stack-compact .tech-stack-chip-icon {
            width: 30px;
            height: 30px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-stack-compact .tech-stack-chip {
            transition: none;
          }

          .tech-stack-compact .tech-stack-chip:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}

export default TechStack;