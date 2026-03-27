/*
 * SA WELDING & REPAIR — Contact / Quote Form Section
 * Design: Forge & Steel Precision
 * Background: #0D0D0D (Forge Black)
 * Headline: Bebas Neue, white
 * Subheadline: Barlow Condensed, Arc Orange
 * Form: Name, Phone, Service dropdown, Message (optional)
 * Submit: Arc Orange fill, dark text, Barlow Condensed Bold
 * Phone: JetBrains Mono, Arc Orange, large — friction reducer
 */

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Phone, Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  { value: "", label: "What do you need done?" },
  { value: "gate-new", label: "Gate — new install" },
  { value: "gate-repair", label: "Gate — repair" },
  { value: "carport", label: "Carport or patio cover" },
  { value: "fencing", label: "Fencing or fence repair" },
  { value: "ac-cage", label: "A/C cage" },
  { value: "smoker", label: "Smoker or BBQ pit" },
  { value: "trailer", label: "Trailer repair" },
  { value: "furniture", label: "Metal furniture" },
  { value: "rocket-stove", label: "Rocket stove" },
  { value: "metal-repair", label: "Metal repair / broken weld" },
  { value: "other", label: "Something else" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/mwvwpbqr", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 lg:py-24"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="orange-rule" />
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                letterSpacing: "0.03em",
                color: "#FFFFFF",
                lineHeight: 1.0,
                marginBottom: "0.5rem",
              }}
            >
              GET YOUR FREE QUOTE.
            </h2>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "1.1rem",
                color: "#FF6B1A",
                letterSpacing: "0.02em",
                marginBottom: "2rem",
              }}
            >
              I respond same day. Usually faster.
            </p>

            {submitted ? (
              <motion.div
                className="p-8 text-center"
                style={{
                  backgroundColor: "#1E2329",
                  borderRadius: "4px",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle size={48} style={{ color: "#22C55E", margin: "0 auto 1rem" }} />
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.75rem",
                    color: "#FFFFFF",
                    letterSpacing: "0.05em",
                    marginBottom: "0.5rem",
                  }}
                >
                  REQUEST RECEIVED.
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#C9D4E0",
                    fontSize: "0.95rem",
                  }}
                >
                  I'll be in touch same day. If it's urgent, call me directly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      color: "#8A9BB0",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First and last name"
                    style={{
                      width: "100%",
                      backgroundColor: "#1E2329",
                      border: "1px solid #2E3440",
                      borderRadius: "4px",
                      padding: "0.75rem 1rem",
                      color: "#FFF3E0",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#FF6B1A")}
                    onBlur={(e) => (e.target.style.borderColor = "#2E3440")}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      color: "#8A9BB0",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(210) XXX-XXXX"
                    style={{
                      width: "100%",
                      backgroundColor: "#1E2329",
                      border: "1px solid #2E3440",
                      borderRadius: "4px",
                      padding: "0.75rem 1rem",
                      color: "#FFF3E0",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#FF6B1A")}
                    onBlur={(e) => (e.target.style.borderColor = "#2E3440")}
                  />
                </div>

                {/* Service dropdown */}
                <div>
                  <label
                    htmlFor="service"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      color: "#8A9BB0",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      backgroundColor: "#1E2329",
                      border: "1px solid #2E3440",
                      borderRadius: "4px",
                      padding: "0.75rem 1rem",
                      color: formData.service ? "#FFF3E0" : "#8A9BB0",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%238A9BB0' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#FF6B1A")}
                    onBlur={(e) => (e.target.style.borderColor = "#2E3440")}
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message (optional) */}
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      color: "#8A9BB0",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Tell us a little more{" "}
                    <span style={{ color: "#8A9BB0", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>
                      (optional — a photo helps most)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the job, location, or any details that help..."
                    style={{
                      width: "100%",
                      backgroundColor: "#1E2329",
                      border: "1px solid #2E3440",
                      borderRadius: "4px",
                      padding: "0.75rem 1rem",
                      color: "#FFF3E0",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                      resize: "vertical",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#FF6B1A")}
                    onBlur={(e) => (e.target.style.borderColor = "#2E3440")}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4"
                >
                  <Send size={16} />
                  Get My Free Quote
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Phone + info */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="p-8 lg:p-10"
              style={{
                backgroundColor: "#1E2329",
                borderRadius: "4px",
                borderLeft: "4px solid #FF6B1A",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#C9D4E0",
                  fontSize: "1rem",
                  marginBottom: "1rem",
                }}
              >
                Rather just call me?
              </p>

              <a
                href="tel:2102015691"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 600,
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  color: "#FF6B1A",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "1rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E8920A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#FF6B1A")}
              >
                (210) 201-5691
              </a>

              <div
                className="space-y-1"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#8A9BB0", fontSize: "0.9rem", lineHeight: 1.7 }}
              >
                <p>I pick up.</p>
                <p>And if I miss you,</p>
                <p>I call back within the hour.</p>
              </div>

              <div
                className="mt-8 pt-6 space-y-3"
                style={{ borderTop: "1px solid rgba(201, 212, 224, 0.1)" }}
              >
                <div className="flex items-center gap-3">
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22C55E", flexShrink: 0 }} />
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#C9D4E0" }}>
                    Same-day response
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22C55E", flexShrink: 0 }} />
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#C9D4E0" }}>
                    Free on-site quote — I come to you
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22C55E", flexShrink: 0 }} />
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#C9D4E0" }}>
                    Written quote before any work begins
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22C55E", flexShrink: 0 }} />
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#C9D4E0" }}>
                    Serving San Antonio + 30-mile radius
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
