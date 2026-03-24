/*
 * SA WELDING & REPAIR — How It Works Section
 * Design: Forge & Steel Precision
 * Background: #1E2329 (Steel Gray)
 * Section title: Bebas Neue, white
 * Step numbers: Bebas Neue, Arc Orange, large (80px)
 * Step titles: Barlow Condensed Bold, white
 * Step descriptions: DM Sans, #C9D4E0
 * Horizontal row on desktop, vertical on mobile
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "YOU CALL OR DM",
    description: "Tell me what you need. I respond same day.",
  },
  {
    number: "02",
    title: "I COME TO YOU",
    description: "Free on-site quote. No pressure. No obligation.",
  },
  {
    number: "03",
    title: "JOB DONE. YOU MOVE ON.",
    description: "I do the work. You pay the quoted price. Nothing more.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24"
      style={{ backgroundColor: "#1E2329" }}
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 lg:mb-16"
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
            }}
          >
            THREE STEPS. THAT'S IT.
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} className="relative" variants={stepVariants}>
              {/* Arrow between steps — desktop only */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:flex absolute top-8 -right-6 lg:-right-8 z-10 items-center"
                  style={{ color: "#FF6B1A" }}
                >
                  <ArrowRight size={24} />
                </div>
              )}

              {/* Step number */}
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "5rem",
                  color: "#FF6B1A",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                  opacity: 0.9,
                }}
              >
                {step.number}
              </div>

              {/* Divider */}
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  backgroundColor: "#FF6B1A",
                  marginBottom: "1rem",
                }}
              />

              {/* Step title */}
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "#FFFFFF",
                  letterSpacing: "0.03em",
                  marginBottom: "0.75rem",
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </h3>

              {/* Step description */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  color: "#C9D4E0",
                  lineHeight: 1.7,
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Below steps note */}
        <motion.div
          className="border-t pt-8"
          style={{ borderColor: "rgba(201, 212, 224, 0.15)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#FFF3E0",
              fontSize: "0.95rem",
              marginBottom: "0.25rem",
            }}
          >
            I quote before I touch anything.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#8A9BB0",
              fontSize: "0.9rem",
            }}
          >
            If the scope changes, I tell you before I continue — not after.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
