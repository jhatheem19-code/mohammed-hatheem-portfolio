function WorkStyle() {
  const points = [
    {
      title: "Practical Learning",
      description:
        "I strengthen my skills by applying what I learn through real-world projects and hands-on development.",
    },
    {
      title: "Responsive Development",
      description:
        "I build web interfaces that work smoothly across desktop, tablet and mobile devices.",
    },
    {
      title: "Clean & Maintainable Code",
      description:
        "I focus on writing structured and understandable code that can be improved as I continue learning.",
    },
    {
      title: "Continuous Exploration",
      description:
        "I enjoy exploring Web Development, AI technologies and new ideas to expand my technical knowledge.",
    },
  ];

  return (
    <section id="work-style" className="work-style-section">
      <div className="section-container">
        <div className="work-style-header">
          <div>
            <span className="section-eyebrow">HOW I WORK</span>

            <h2>
              My Approach to
              <span> Learning & Development</span>
            </h2>
          </div>

          <p>
            I focus on learning through practical development, building clean
            solutions, exploring new technologies, and continuously improving
            my skills.
          </p>
        </div>

        <div className="work-style-grid">
          {points.map((point, index) => (
            <article className="work-style-card" key={point.title}>
              <span className="work-style-number">
                0{index + 1}
              </span>

              <h3>{point.title}</h3>

              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkStyle;