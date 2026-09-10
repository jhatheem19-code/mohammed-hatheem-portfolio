function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container about-grid">

        <div className="about-content">
          <span className="section-eyebrow">ABOUT ME</span>

          <h2>
            Passionate About
            <span> Web Development & AI</span>
            </h2>

          <p>
            I’m Mohammed Hatheem, a Computer Science student with a strong interest in
            Web Development and Artificial Intelligence. I enjoy building web
            applications, learning new technologies, and continuously improving my
            development skills.
            </p>
            
            <p>
              I’m also passionate about learning and working with AI technologies. I enjoy
              exploring how AI systems work, experimenting with new ideas, and researching
              emerging technologies and their real-world applications.
              </p>
              
            <p>
              My goal is to continuously strengthen my skills in Web Development and AI
              while exploring innovative ideas through learning, research, and practical
              development.
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