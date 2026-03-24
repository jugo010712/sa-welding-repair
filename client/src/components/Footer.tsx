/*
 * SA WELDING & REPAIR — Footer
 * Design: Forge & Steel Precision
 * Background: #0D0D0D (Forge Black)
 * Thin Arc Orange line at top as separator
 * Business name: Bebas Neue, white, 24px
 * Other text: DM Sans or JetBrains Mono, #8A9BB0
 * Minimal — links, contact, copyright
 */

import { Facebook, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer style={{ backgroundColor: "#0D0D0D" }}>
      {/* Orange separator */}
      <div style={{ height: "2px", backgroundColor: "#FF6B1A" }} />

      <div className="container mx-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.5rem",
                color: "#FFFFFF",
                letterSpacing: "0.05em",
                marginBottom: "0.25rem",
              }}
            >
              SA WELDING & REPAIR
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8rem",
                color: "#8A9BB0",
                marginBottom: "1rem",
              }}
            >
              San Antonio Welding and Repair LLC
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.825rem",
                color: "#8A9BB0",
                lineHeight: 1.6,
              }}
            >
              Gates, carports, A/C cages, smokers, trailers,
              <br />
              furniture, and metal repair across San Antonio.
            </p>
          </div>

          {/* Contact column */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#C9D4E0",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:2102015691"
                className="flex items-center gap-2"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.85rem",
                  color: "#8A9BB0",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B1A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8A9BB0")}
              >
                <Phone size={13} style={{ color: "#FF6B1A" }} />
                (210) 201-5691
              </a>
              <a
                href="mailto:angellg0921@gmail.com"
                className="flex items-center gap-2"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.85rem",
                  color: "#8A9BB0",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B1A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8A9BB0")}
              >
                <Mail size={13} style={{ color: "#FF6B1A" }} />
                angellg0921@gmail.com
              </a>
              <div
                className="flex items-center gap-2"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.85rem",
                  color: "#8A9BB0",
                }}
              >
                <MapPin size={13} style={{ color: "#FF6B1A" }} />
                San Antonio, TX + 30-mile radius
              </div>
            </div>
          </div>

          {/* Links column */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#C9D4E0",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: "#8A9BB0",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: 0,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B1A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A9BB0")}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-4 mt-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: "#8A9BB0",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B1A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A9BB0")}
                >
                  Facebook
                </a>
                <a
                  href="https://www.google.com/search?q=SA+Welding+Repair+San+Antonio"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: "#8A9BB0",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B1A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A9BB0")}
                >
                  Google
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
          style={{ borderTop: "1px solid rgba(201, 212, 224, 0.08)" }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.775rem",
              color: "#8A9BB0",
            }}
          >
            © 2025 San Antonio Welding and Repair LLC. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.775rem",
              color: "#8A9BB0",
            }}
          >
            Serving San Antonio, TX and surrounding areas.
          </p>
        </div>
      </div>
    </footer>
  );
}
