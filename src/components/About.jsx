function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container about-grid">

        <div className="about-content">
          <span className="section-eyebrow">ABOUT ME</span>

          <h2>
            Passionate About
            <span> Building for the Future</span>
          </h2>

          <p>
            I'm J Mohammed Hatheem, a Computer Science student and
            Web Developer focused on building modern, responsive and
            practical digital solutions.
          </p>

          <p>
            I enjoy working with web technologies, learning AI, researching
            new ideas and turning concepts into real-world products for
            businesses, startups and individuals.
          </p>

          <div className="about-tags">
            <span>Web Development</span>
            <span>Full Stack</span>
            <span>AI Integration</span>
            <span>Problem Solving</span>
          </div>

          <a href="#contact" className="about-button">
            Work With Me →
          </a>
        </div>

        <div className="about-stats">
          <div className="about-stat-card">
            <strong>3+</strong>
            <span>Projects Built</span>
          </div>

          <div className="about-stat-card">
            <strong>Freelance</strong>
            <span>Available for Work</span>
          </div>

          <div className="about-stat-card">
            <strong>Full Stack</strong>
            <span>Development Focus</span>
          </div>

          <div className="about-stat-card">
            <strong>AI</strong>
            <span>Learning & Integration</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;