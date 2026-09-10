import services from "../data/services";

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="section-container">

        <div className="services-header">
          <div>
            <span className="section-eyebrow">SERVICES</span>

            <h2>
              What I Can Do
              <span> For You</span>
            </h2>
          </div>

          <p>
            From professional business websites to modern web applications
            and AI-powered solutions, I help turn ideas into practical
            digital products.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact">
                Discuss a Project →
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;