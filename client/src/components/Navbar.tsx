/*
 * SA WELDING & REPAIR — Navbar
 * Design: Forge & Steel Precision
 * Background: #0D0D0D (Forge Black) → #2E3440 (Iron) on scroll
 * Logo: Bebas Neue white left-aligned
 * Nav links: Barlow Condensed right-aligned
 * CTA: Arc Orange #FF6B1A, sharp corners, dark text
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "#2E3440" : "#0D0D0D",
        borderBottom: scrolled ? "2px solid #FF6B1A" : "2px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-white text-2xl lg:text-3xl tracking-widest hover:text-[#FF6B1A] transition-colors duration-200"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            SA WELDING & REPAIR
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-[#C9D4E0] hover:text-[#FF6B1A] transition-colors duration-200 relative group"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase", background: "none", border: "none" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B1A] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary text-sm"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#C9D4E0] hover:text-[#FF6B1A] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: "#1E2329", borderColor: "#2E3440" }}
        >
          <div className="container mx-auto py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-[#C9D4E0] hover:text-[#FF6B1A] transition-colors py-3 px-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "1.1rem", letterSpacing: "0.05em", textTransform: "uppercase", background: "none", border: "none" }}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 pb-1">
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-primary w-full text-center"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
