import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

function Contact() {
  const email = "jhatheem19@gmail.com";

  const whatsappNumber = "919014758318";

  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const linkedinUrl = "https://www.linkedin.com/in/hatheem-ah";

  return (
    <section id="contact" className="contact-section">
      <div className="section-container contact-grid">

        {/* LEFT SIDE */}
        <div className="contact-content">
          <span className="section-eyebrow">
            LET&apos;S CONNECT
          </span>

          <h2>
            Have an Idea or Project?
            <span> Let&apos;s Connect.</span>
          </h2>

          <p>
            I&apos;m open to discussing web development projects,
            collaborations, and opportunities to explore practical ideas
            involving modern web technologies and Artificial Intelligence.
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
                <strong>Open to Projects & Collaborations</strong>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-card">
          <span className="contact-form-label">
            GET IN TOUCH
          </span>

          <h3>Tell Me About Your Idea</h3>

          <form
            action="https://formspree.io/f/xwlkajpj"
            method="POST"
          >
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
                Enquiry Type
              </label>

              <select
                id="project"
                name="projectType"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select an enquiry type
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

                <option value="AI / Technology Idea">
                  AI / Technology Idea
                </option>

                <option value="Collaboration">
                  Collaboration
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Tell me about your idea
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Briefly describe your project, idea or collaboration..."
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Send Message
            </button>
          </form>

          <p className="form-note">
            I&apos;ll respond as soon as possible.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;