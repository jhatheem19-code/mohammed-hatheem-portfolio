import { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaLock,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const FORM_ENDPOINT = "https://formspree.io/f/xwlkajpj";

function Contact() {
  const email = "jhatheem19@gmail.com";
  const whatsappNumber = "919014758318";

  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const linkedinUrl = "https://www.linkedin.com/in/hatheem-ah";
  const githubUrl = "https://github.com/jhatheem19-code";

  // idle | submitting | success | error
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    // If it has a value, it's a bot: pretend success, send nothing.
    if (formData.get("_gotcha")) {
      form.reset();
      setStatus("success");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        <div className="contact-layout">

          {/* LEFT */}
          <div className="contact-left">
            <span className="contact-eyebrow">
              CONTACT
            </span>

            <h2>
              Let&apos;s
              <br />
              Work <span>Together.</span>
            </h2>

            <p className="contact-intro">
              Have a project in mind, a question, or just want to say hi?
              I&apos;m always open to discussing new opportunities,
              collaborations, and creative ideas.
            </p>

            <div className="contact-links">

              <a
                href={`mailto:${email}`}
                className="contact-link-item contact-email"
              >
                <div className="contact-link-icon">
                  <FaEnvelope />
                </div>

                <div className="contact-link-text">
                  <strong>Email</strong>
                  <span>{email}</span>
                  <small>Send me an email →</small>
                </div>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-link-item contact-whatsapp"
              >
                <div className="contact-link-icon">
                  <FaWhatsapp />
                </div>

                <div className="contact-link-text">
                  <strong>WhatsApp</strong>
                  <span>Message me on WhatsApp</span>
                  <small>Chat with me →</small>
                </div>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-link-item contact-linkedin"
              >
                <div className="contact-link-icon">
                  <FaLinkedin />
                </div>

                <div className="contact-link-text">
                  <strong>LinkedIn</strong>
                  <span>Let&apos;s connect professionally</span>
                  <small>View my profile →</small>
                </div>
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-link-item contact-github"
              >
                <div className="contact-link-icon">
                  <FaGithub />
                </div>

                <div className="contact-link-text">
                  <strong>GitHub</strong>
                  <span>Check out my work</span>
                  <small>View my profile →</small>
                </div>
              </a>

            </div>
          </div>

          {/* CENTER FORM */}
          <div className="contact-form-card">

            <span className="contact-form-label">
              SEND A MESSAGE
            </span>

            <h3>Get In Touch</h3>

            <p className="contact-form-description">
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit}>

              {/* HONEYPOT (hidden from users, bots fill it) */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                }}
              >
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="_gotcha"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="contact-form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Your Name <span>*</span>
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
                    Your Email <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="project">
                  Enquiry Type <span>*</span>
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
                  Your Message <span>*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project, idea, or just say hi..."
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={status === "submitting"}
              >
                <FaPaperPlane />
                <span>
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </span>
                <FaArrowRight />
              </button>

              {status === "success" && (
                <p
                  className="form-status form-status-success"
                  role="status"
                  aria-live="polite"
                >
                  Thank you! Your message has been sent. I&apos;ll get back to
                  you soon.
                </p>
              )}

              {status === "error" && (
                <p
                  className="form-status form-status-error"
                  role="alert"
                >
                  Something went wrong. Please try again, or email me
                  directly at {email}.
                </p>
              )}

            </form>

            <p className="form-note">
              <FaLock />
              Your message will be sent securely through the contact form.
            </p>
          </div>

          {/* RIGHT */}
          <div className="contact-right">

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>Location</span>
                <strong>Chennai, India</strong>
                <small>Open to remote opportunities worldwide.</small>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaClock />
              </div>

              <div>
                <span>Availability</span>
                <strong>Open to Opportunities</strong>
                <small>Feel free to reach out anytime.</small>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaUsers />
              </div>

              <div>
                <span>Open to</span>
                <strong>Projects & Collaborations</strong>
                <small>
                  Web Development • AI • Research
                </small>
              </div>
            </div>

            <div className="contact-cta-card">
              <span className="contact-cta-label">
                LET&apos;S BUILD
              </span>

              <h3>
                Something Great.
              </h3>

              <p>
                I&apos;m open to freelance projects,
                collaborations, learning opportunities,
                and interesting ideas.
              </p>

              <a
                href={`mailto:${email}`}
                className="contact-cta-button"
              >
                Start a Conversation
                <FaArrowRight />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;