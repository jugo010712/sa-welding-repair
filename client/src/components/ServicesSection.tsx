/*
 * SA WELDING & REPAIR — Services Section
 * Design: Forge & Steel Precision
 * Background: #0D0D0D (Forge Black)
 * Section title: Bebas Neue, white
 * Cards: #1E2329 background, Arc Orange top border
 * Card title: Barlow Condensed Bold, white
 * Card description: DM Sans, #C9D4E0
 * Voice: First-person ("I")
 * Services: Gates, Carports, Fencing, A/C Cages, Smokers/BBQ Pits, Trailers, Furniture, Rocket Stoves, Metal Repair
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "gate",
    title: "CUSTOM GATES",
    description: "Driveway and pedestrian gates. New installs and repairs.",
    detail: "Ornamental iron, steel tube, and custom designs built to your property.",
  },
  {
    icon: "carport",
    title: "CARPORTS & PATIO COVERS",
    description: "Steel frame fabrication and installation.",
    detail: "Heavy-gauge steel structures built to last through Texas weather.",
  },
  {
    icon: "fence",
    title: "FENCING & FENCE REPAIR",
    description: "Iron fencing, handrails, and security rails.",
    detail: "Perimeter fencing, stair rails, and safety barriers. New builds and repairs.",
  },
  {
    icon: "ac",
    title: "A/C CAGES",
    description: "Security cages to protect your A/C unit.",
    detail: "Custom-welded steel cages that deter theft and keep your unit safe year-round.",
  },
  {
    icon: "bbq",
    title: "SMOKERS & BBQ PITS",
    description: "Custom-built smokers and BBQ pits — built to cook.",
    detail: "From backyard smokers to full offset pits. I build them the way you want them.",
  },
  {
    icon: "trailer",
    title: "TRAILER REPAIRS",
    description: "Frames, hitches, rails, and structural repairs.",
    detail: "If it's welded and it's broken, I can fix it. Most trailer repairs done same week.",
  },
  {
    icon: "furniture",
    title: "METAL FURNITURE",
    description: "Custom steel furniture for indoor and outdoor use.",
    detail: "Tables, frames, shelving, and one-off pieces built to your spec.",
  },
  {
    icon: "rocket",
    title: "ROCKET STOVES",
    description: "Efficient, custom-welded rocket stoves.",
    detail: "Built for outdoor cooking and heating. Designed to your size and fuel preference.",
  },
  {
    icon: "repair",
    title: "METAL REPAIR",
    description: "Broken welds, cracked frames, damaged hinges — I fix it fast.",
    detail: "Same-week repair on most jobs. I come to you.",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  gate: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="8" height="18" rx="1"/><rect x="14" y="3" width="8" height="18" rx="1"/><line x1="10" y1="12" x2="14" y2="12"/>
    </svg>
  ),
  carport: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  fence: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="4" x2="4" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="20" y1="4" x2="20" y2="20"/>
      <line x1="2" y1="8" x2="22" y2="8"/><line x1="2" y1="16" x2="22" y2="16"/>
    </svg>
  ),
  ac: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="14" rx="2"/><line x1="6" y1="6" x2="6" y2="20"/><line x1="12" y1="6" x2="12" y2="20"/>
      <line x1="18" y1="6" x2="18" y2="20"/><line x1="2" y1="11" x2="22" y2="11"/><line x1="2" y1="16" x2="22" y2="16"/>
    </svg>
  ),
  bbq: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="11" r="7"/><path d="M12 18v4"/><path d="M8 22h8"/>
      <path d="M8 3c0 2 2 2 2 4"/><path d="M12 3c0 2 2 2 2 4"/><path d="M16 3c0 2 2 2 2 4"/>
    </svg>
  ),
  trailer: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="7" width="16" height="10" rx="1"/><path d="M17 12h4l2 3"/><circle cx="6" cy="20" r="2"/><circle cx="18" cy="20" r="2"/>
      <line x1="6" y1="17" x2="6" y2="18"/><line x1="18" y1="17" x2="18" y2="18"/>
    </svg>
  ),
  furniture: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="4" rx="1"/><line x1="5" y1="12" x2="5" y2="20"/><line x1="19" y1="12" x2="19" y2="20"/>
      <line x1="3" y1="16" x2="21" y2="16"/>
    </svg>
  ),
  rocket: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
      <path d="M12 8v8"/><path d="M8 14l4 4 4-4"/>
    </svg>
  ),
  repair: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
      id="services"
      ref={ref}
      className="py-16 lg:py-24"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
            WHAT I BUILD. WHAT I FIX.
          </h2>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "1.1rem",
              color: "#8A9BB0",
              letterSpacing: "0.02em",
            }}
          >
            Residential and light commercial metalwork across San Antonio.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={cardVariants}
            >
              <div className="mb-4">{iconMap[service.icon]}</div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "#FFFFFF",
                  letterSpacing: "0.03em",
                  marginBottom: "0.5rem",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "#C9D4E0",
                  lineHeight: 1.6,
                  marginBottom: "0.5rem",
                }}
              >
                {service.description}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.825rem",
                  color: "#8A9BB0",
                  lineHeight: 1.5,
                }}
              >
                {service.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Below cards CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#C9D4E0",
              fontSize: "1rem",
              marginBottom: "0.25rem",
            }}
          >
            Not sure if I can help? Call and describe the job.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#8A9BB0",
              fontSize: "0.9rem",
              marginBottom: "1.5rem",
            }}
          >
            If I can't do it, I'll tell you who can.
          </p>
          <button onClick={scrollToContact} className="btn-primary">
            Get a Free Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
