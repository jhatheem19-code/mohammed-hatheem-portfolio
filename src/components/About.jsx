function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container about-professional-layout">

        {/* LEFT SIDE */}
        <div className="about-main-content">
          <span className="section-eyebrow">
            ABOUT ME
          </span>

          <h2 className="about-main-title">
            A Computer Science student{" "}
            <span>who builds websites.</span>
          </h2>

          <div className="about-description-group">
            <p className="about-main-description">
              I&apos;m Mohammed Hatheem, a final-year B.Sc.
              Computer Science student in Chennai. Alongside my
              studies, I take on freelance projects, building
              fast, mobile-friendly websites for gyms, shops and
              small businesses that want to look professional
              online.
            </p>

            <p className="about-main-description">
              I learn by building. My projects include AI FAQ
              Assistant and AI StudyBuddy, and I&apos;m currently
              working on Jarvis DevFlow, an AI tool that automates
              stages of the software development lifecycle.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right-content">
          <div className="about-profile-summary">

            <div className="about-summary-item">
              <strong>Final</strong>
              <span>Year Student</span>
            </div>

            <div className="about-summary-item">
              <strong>B.Sc. Computer Science</strong>
              <span>University of Madras</span>
            </div>

            <div className="about-summary-item">
              <strong>Chennai, India</strong>
              <span>Based In</span>
            </div>

            <div className="about-summary-item">
              <strong>Available for freelance</strong>
              <span>Open to Opportunities</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;