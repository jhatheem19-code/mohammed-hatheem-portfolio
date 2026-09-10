import { ArrowRight, CheckCircle2 } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        <div className="hero-content">
          <span className="hero-tag">
            WEB DEVELOPMENT • AI SOLUTIONS • FREELANCE
          </span>

          <h1>
            Build Your Ideas
            <span> Into Reality.</span>
          </h1>

          <p className="hero-description">
            I build modern, responsive and business-focused websites,
            web applications and AI-powered solutions for startups,
            businesses and individuals.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-btn">
              Hire Me
              <ArrowRight size={18} />
            </a>

            <a href="#projects" className="secondary-btn">
              View My Work
            </a>
          </div>

          <div className="hero-trust">
            <div>
              <CheckCircle2 size={17} />
              <span>Modern Responsive Design</span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>Clean & Scalable Code</span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>Available for Freelance</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">

          <div className="hero-image-card">
            <img
              src="/images/profile/profile.png"
              alt="J Mohammed Hatheem"
              className="hero-profile-image"
            />
          </div>

          <div className="floating-card floating-card-top">
            <strong>Full Stack</strong>
            <span>Web Development</span>
          </div>

          <div className="floating-card floating-card-bottom">
            <strong>AI + Automation</strong>
            <span>Modern Solutions</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;