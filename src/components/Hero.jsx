import { ArrowRight, CheckCircle2 } from "lucide-react";
import profileImage from "../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        <div className="hero-content">
          <span className="hero-tag">
            WEB DEVELOPMENT • ARTIFICIAL INTELLIGENCE • EXPLORING & BUILDING
          </span>

          <h1>
            Building Ideas.
            <span> Exploring Technology.</span>
          </h1>

          <p className="hero-description">
            I’m Mohammed Hatheem, a Computer Science student passionate about
            Web Development and Artificial Intelligence. I enjoy building web
            applications, exploring AI technologies, and turning what I learn
            into practical projects and new ideas.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              View My Projects
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-trust">
            <div>
              <CheckCircle2 size={17} />
              <span>Web Development</span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>AI Learning & Exploration</span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>Research & Practical Projects</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">

          <div className="hero-image-card">
            <img src={profileImage}
            alt="J Mohammed Hatheem"
            className="hero-profile-image"/>
          </div>

          <div className="floating-card floating-card-top">
            <strong>Web Development</strong>
            <span>Building & Learning</span>
          </div>

          <div className="floating-card floating-card-bottom">
            <strong>AI & Technology</strong>
            <span>Exploring & Researching</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;