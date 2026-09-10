import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

function Contact() {
  const email = "jhatheem19@gmail.com";

  const whatsappNumber = "9014758318";

  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const linkedinUrl = "https://www.linkedin.com/in/hatheem-ah";

  return (
    <section id="contact" className="contact-section">
      <div className="section-container contact-grid">

        {/* LEFT SIDE */}
        <div className="contact-content">
          <span className="section-eyebrow">
            LET&apos;S WORK TOGETHER
          </span>

          <h2>
            Have a Project in Mind?
            <span> Let&apos;s Build It.</span>
          </h2>

          <p>
            Looking for a modern website, web application or AI-powered
            solution? Share your idea with me and let&apos;s discuss how we can
            turn it into a professional digital product.
          </p>

          {/* MAIN CTA BUTTONS */}
          <div className="contact-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-primary"
            >
              <FaWhatsapp aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="contact-secondary"
            >
              <FaEnvelope aria-hidden="true" />
              <span>Send an Email</span>
            </a>
          </div>

          {/* CONTACT DETAILS */}
          <div className="contact-details">
            <a
              href={`mailto:${email}`}
              className="contact-detail-item"
            >
              <div className="contact-detail-icon">
                <FaEnvelope aria-hidden="true" />
              </div>

              <div>
                <span>Email</span>
                <strong>{email}</strong>
              </div>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-detail-item"
            >
              <div className="contact-detail-icon">
                <FaLinkedin aria-hidden="true" />
              </div>

              <div>
                <span>LinkedIn</span>
                <strong>Connect With Me</strong>
              </div>
            </a>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <FaMapMarkerAlt aria-hidden="true" />
              </div>

              <div>
                <span>Location</span>
                <strong>Chennai, India</strong>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <FaBriefcase aria-hidden="true" />
              </div>

              <div>
                <span>Availability</span>
                <strong>Open for Freelance Projects</strong>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-card">
          <span className="contact-form-label">
            START A PROJECT
          </span>

          <h3>Tell Me About Your Project</h3>

          <form action="https://formspree.io/f/xwlkajpj"
          method="POST">
            <div className="form-group">
              <label htmlFor="name">
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="project">
                Project Type
              </label>

              <select
                id="project"
                name="projectType"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a project type
                </option>

                <option value="Business Website">
                  Business Website
                </option>

                <option value="E-Commerce Website">
                  E-Commerce Website
                </option>

                <option value="Landing Page">
                  Landing Page
                </option>

                <option value="Web Application">
                  Web Application
                </option>

                <option value="AI Integration">
                  AI Integration
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Tell me about your project
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Briefly describe what you want to build..."
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Send Project Enquiry
            </button>
          </form>

          <p className="form-note">
            I usually respond to project enquiries as soon as possible.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;