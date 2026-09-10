function Testimonials() {
  const points = [
    {
      title: "Clear Communication",
      description:
        "I keep project communication simple, direct and focused on what needs to be delivered.",
    },
    {
      title: "Responsive Development",
      description:
        "Websites are designed to work smoothly across desktop, tablet and mobile devices.",
    },
    {
      title: "Clean & Maintainable Code",
      description:
        "I focus on structured, scalable code that is easier to understand, update and improve.",
    },
    {
      title: "Business-Focused Approach",
      description:
        "I build with the client's goal in mind, not just the visual design of the website.",
    },
  ];

  return (
    <section id="testimonials" className="work-style-section">
      <div className="section-container">
        <div className="work-style-header">
          <div>
            <span className="section-eyebrow">WHY WORK WITH ME</span>

            <h2>
              A Simple, Professional
              <span> Development Process</span>
            </h2>
          </div>

          <p>
            My goal is to make the development process clear, practical and
            easy for clients from the first discussion to final delivery.
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

export default Testimonials;