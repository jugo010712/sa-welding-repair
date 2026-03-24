/*
 * SA WELDING & REPAIR — Hero Section
 * Design: Forge & Steel Precision
 * Full-bleed dark background with welding photo and dark overlay
 * Headline: Bebas Neue, very large, white
 * Subheadline: Barlow Condensed
 * Body: DM Sans
 * Two CTA buttons + trust bar
 * Voice: First-person ("I"), Hormozi/Cole-style — direct, bold, specific
 */

import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663386692308/RBiCMj8UwbRJYDJd8hSFSR/hero-welding-mve3rNMdfuKPJiPek5hcY3.webp";

const trustItems = [
  "Free Same-Week Quotes",
  "Fully Insured",
  "San Antonio Local",
  "No Surprise Pricing",
];

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(105deg, rgba(13,13,13,0.93) 0%, rgba(13,13,13,0.78) 55%, rgba(13,13,13,0.5) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          {/* Section label */}
          <motion.p
            className="section-label mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            · San Antonio, TX · Mobile Welding & Metal Fabrication
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="text-white leading-none mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.25rem, 8vw, 6rem)",
              letterSpacing: "0.03em",
              lineHeight: 1.0,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            METAL WORK DONE RIGHT.
            <br />
            <span style={{ color: "#FF6B1A" }}>QUOTED FIRST.</span>
            <br />
            FINISHED THIS WEEK.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-[#C9D4E0] mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              letterSpacing: "0.02em",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Gates, carports, fencing, A/C cages, BBQ pits, trailers, and more —
            <br className="hidden sm:block" />
            built and repaired across San Antonio. Free quote. No surprises.
          </motion.p>

          {/* Body copy — Hormozi/Cole style: punchy, specific, first-person */}
          <motion.div
            className="mb-8 space-y-1"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#FFF3E0", fontSize: "1rem", lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <p>Most welders ghost you for weeks. I call back same day.</p>
            <p>Most give you a number after they've started. I give you a written quote first.</p>
            <p>Most leave a mess. I don't leave until the job is done and cleaned up.</p>
            <p style={{ color: "#FF6B1A", fontWeight: 500 }}>One call. One welder. Done right.</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <button onClick={scrollToContact} className="btn-primary text-base px-8 py-4">
              Get a Free Quote
            </button>
            <a href="tel:2106273537" className="btn-outline text-base px-8 py-4 flex items-center gap-2 justify-center">
              <Phone size={16} />
              Call (210) 627-3537
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            className="flex flex-wrap gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#C9D4E0" }}
              >
                <CheckCircle size={14} style={{ color: "#FF6B1A", flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom angular cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16"
        style={{
          background: "#1E2329",
          clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
        }}
      />
    </section>
  );
}
