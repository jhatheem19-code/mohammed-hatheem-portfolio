import {
  Code2,
  BrainCircuit,
  BookOpen,
  Target,
} from "lucide-react";

function About() {
  const defineCards = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "I enjoy building modern, responsive, and user-friendly web applications while continuously improving my development skills.",
    },
    {
      icon: BrainCircuit,
      title: "AI Learning",
      description:
        "I’m constantly learning about AI technologies, exploring how AI systems work, and understanding their real-world applications.",
    },
    {
      icon: BookOpen,
      title: "Research & Exploration",
      description:
        "I enjoy researching emerging technologies, experimenting with new ideas, and understanding how technology can be applied in practical ways.",
    },
    {
      icon: Target,
      title: "Growth Mindset",
      description:
        "I focus on continuous learning, practical development, and improving my technical knowledge through projects and experimentation.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container about-professional-layout">

        {/* LEFT SIDE */}
        <div className="about-main-content">
          <span className="section-eyebrow">ABOUT ME</span>

          <h2 className="about-main-title">
            Curious Mind.
            <br />
            Practical Learner.
            <br />
            <span>Always Building.</span>
          </h2>

          <div className="about-description-group">
            <p className="about-main-description">
              I&apos;m Mohammed Hatheem, a Computer Science student with a
              strong interest in Web Development and Artificial Intelligence.
              I enjoy building web applications, learning new technologies,
              and continuously improving my development skills.
            </p>

            <p className="about-main-description">
              I&apos;m also passionate about learning and working with AI
              technologies. I enjoy exploring how AI systems work,
              experimenting with new ideas, and researching emerging
              technologies and their real-world applications.
            </p>

            <p className="about-main-description">
              My goal is to continuously strengthen my skills in Web
              Development and AI while exploring innovative ideas through
              learning, research, and practical development.
            </p>
          </div>

          <div className="about-profile-tags">
            <span>Web Development</span>
            <span>AI Learning</span>
            <span>Research</span>
            <span>Problem Solving</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right-content">

          <div className="about-profile-summary">
            <div className="about-summary-item">
              <strong>3rd</strong>
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
              <strong>Always</strong>
              <span>Open to Opportunities</span>
            </div>
          </div>

          <div className="about-defines-header">
            <h3>What Defines Me</h3>
            <span />
          </div>

          <div className="about-defines-grid">
            {defineCards.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="about-define-card"
                  key={item.title}
                >
                  <div className="about-define-icon">
                    <Icon size={30} strokeWidth={1.9} />
                  </div>

                  <div className="about-define-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;