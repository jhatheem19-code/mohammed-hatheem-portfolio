import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const email = "jhatheem19@gmail.com";

  // Replace this with your real WhatsApp number.
  // Format: country code + number, without +, spaces or hyphens.
  const whatsappNumber = "91XXXXXXXXXX";

  const linkedinUrl =
    "https://www.linkedin.com/in/hatheem-ah";

  const githubUrl =
    "https://github.com/jhatheem19-code";

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}`;

  return (
    <>
      <footer className="footer">
        <div className="section-container footer-grid">

          {/* BRAND */}
          <div>
            <div className="footer-brand">
              <div className="footer-logo">JH</div>

              <div>
                <strong>J Mohammed Hatheem</strong>
                <span>Web Developer</span>
              </div>
            </div>

            <p className="footer-description">
              Building modern websites, web applications and AI-powered
              digital solutions for businesses, startups and individuals.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
          </div>

          {/* CONNECT */}
          <div className="footer-column footer-connect">
            <h4>Connect</h4>

            <a href={`mailto:${email}`}>
              <FaEnvelope aria-hidden="true" />
              <span>Email</span>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin aria-hidden="true" />
              <span>LinkedIn</span>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* AVAILABILITY */}
          <div className="footer-column">
            <h4>Availability</h4>

            <span>Open for Freelance Projects</span>
            <span>Chennai, India</span>
          </div>

        </div>

        <div className="section-container footer-bottom">
          <span>
            © 2026 J Mohammed Hatheem. All rights reserved.
          </span>

          <span>
            Mohammed Hatheem Portfolio
          </span>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </>
  );
}

export default Footer;