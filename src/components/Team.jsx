import { ArrowUpRight, Users } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import hatheemPhoto from "../assets/profile.webp";
import asifPhoto from "../assets/team/asif.webp";

const teamMembers = [
  {
    id: 1,
    name: "J Mohammed Hatheem",
    role: "Web Developer & AI Enthusiast",
    photo: hatheemPhoto,
    description:
      "Passionate about developing modern websites, AI-powered applications, and practical software solutions.",
    skills: ["React", "Web Development", "AI", "Automation"],
    portfolio: "https://mohammed-hatheem-j-new.vercel.app",
    github: "https://github.com/jhatheem19-code",
    linkedin: "https://www.linkedin.com/in/hatheem-ah",
  },
  {
    id: 2,
    name: "Mohammed Asif",
    role: "Data Analyst",
    photo: asifPhoto,
    description:
      "Interested in transforming data into useful insights through analysis, visualization, and reporting.",
    skills: ["Data Analysis", "Visualization", "Reporting"],
    portfolio:
      "https://asif-25-os.github.io/Mohammed-Asif-Portfolio/",
    github: "",
    linkedin: "",
  },
];

function Team() {
  return (
    <section id="team" className="team-combined-section">
      <div className="section-container">

        {/* TEAM HEADING */}

        <div className="team-combined-header">
          <span className="section-eyebrow">
            TEAM & COLLABORATIONS
          </span>

          <h2 className="team-hero-title">
            Meet Our <span>Team.</span>
          </h2>

          <p className="team-hero-description">
            Different skills, shared ideas, and a passion
            for building meaningful digital experiences.
            Get to know the people behind the work.
          </p>

          <div className="team-hero-note">
            <Users size={17} />
            <span>
              Meet the people and explore their work
            </span>
          </div>
        </div>

        {/* TEAM MEMBERS */}

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="team-member-card"
            >
              <div className="team-photo-wrapper">
                <img
                  src={member.photo}
                  alt={`${member.name} profile`}
                  className="team-member-photo"
                  loading="lazy"
                />
              </div>

              <div className="team-member-content">
                <span className="team-member-label">
                  TEAM MEMBER{" "}
                  {String(member.id).padStart(2, "0")}
                </span>

                <h3>{member.name}</h3>

                <p className="team-member-role">
                  {member.role}
                </p>

                <p className="team-member-description">
                  {member.description}
                </p>

                <div className="team-skills">
                  {member.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className="team-member-links">
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-portfolio-button"
                  >
                    View Portfolio
                    <ArrowUpRight size={16} />
                  </a>

                  <div className="team-social-links">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} GitHub`}
                        title="GitHub"
                      >
                        <FaGithub size={19} />
                      </a>
                    )}

                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        title="LinkedIn"
                      >
                        <FaLinkedinIn size={19} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SAME TEAM SECTION — COLLABORATION */}

        <div className="team-inline-cta">
          <div className="team-inline-cta-content">
            <div>
              <span className="section-eyebrow">
                COLLABORATION & CREATIVITY
              </span>

              <h3>
                Different Skills.{" "}
                <span>Same Vision.</span>
              </h3>

              <p>
                Learning, collaborating, and creating
                better digital experiences together.
              </p>
            </div>

            <a
              href="#contact"
              className="team-back-button"
            >
              Let's Connect
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Team;