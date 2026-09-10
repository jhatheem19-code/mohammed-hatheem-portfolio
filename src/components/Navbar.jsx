import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

 const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="brand">
          <div className="brand-logo">JH</div>

          <div className="brand-text">
            <span className="brand-name">J Mohammed Hatheem</span>
            <span className="brand-role">Web Developer</span>
          </div>
        </a>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="work-button">
          Let's Work Together
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-work-button"
            onClick={() => setMenuOpen(false)}
          >
            Let's Work Together
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;