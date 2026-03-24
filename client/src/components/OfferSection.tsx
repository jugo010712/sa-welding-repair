/*
 * SA WELDING & REPAIR — Offer Section (Hormozi Grand Slam)
 * Design: Forge & Steel Precision
 * Background: Arc Orange #FF6B1A — ONLY full-orange section, intentional pattern break
 * ALL text: dark #0D0D0D
 * Headline: Bebas Neue, very large
 * Offer list: DM Sans, each item its own line
 * Guarantee: Bebas Neue headline + DM Sans body
 * CTA: dark fill, white text (reversed)
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ShieldCheck } from "lucide-react";

const offerItems = [
  "Free on-site quote — I come to you, no charge",
  "Same-week availability in most cases",
  "Written quote before any work begins — always",
  "Fully insured — certificate available on request",
  "Straight pricing — what I quote is what you pay",
  "I clean up before I leave — every single job",
  "Real San Antonio local — not a call center, not a franchise",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function OfferSection() {
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
      ref={ref}
      className="py-16 lg:py-24"
      style={{ backgroundColor: "#FF6B1A" }}
    >
      <div className="container mx-auto">
        <div className="max-w-2xl">
          {/* Headline */}
          <motion.h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              letterSpacing: "0.03em",
              color: "#0D0D0D",
              lineHeight: 1.0,
              marginBottom: "2rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            HERE'S WHAT YOU GET
            <br />
            WHEN YOU CALL ME.
          </motion.h2>

          {/* Offer stack */}
          <motion.ul
            className="space-y-3 mb-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {offerItems.map((item) => (
              <motion.li
                key={item}
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <Check
                  size={18}
                  style={{ color: "#0D0D0D", flexShrink: 0, marginTop: "3px" }}
                  strokeWidth={3}
                />
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1rem",
                    color: "#0D0D0D",
                    lineHeight: 1.6,
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Guarantee box */}
          <motion.div
            className="p-6 mb-8"
            style={{
              backgroundColor: "rgba(13, 13, 13, 0.12)",
              borderLeft: "4px solid #0D0D0D",
              borderRadius: "2px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-start gap-3 mb-3">
              <ShieldCheck size={24} style={{ color: "#0D0D0D", flexShrink: 0 }} />
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  letterSpacing: "0.03em",
                  color: "#0D0D0D",
                  lineHeight: 1.1,
                }}
              >
                IF YOU'RE NOT HAPPY WITH THE WORK,
                <br />
                I COME BACK AND FIX IT. FREE.
              </h3>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                color: "#1E2329",
                lineHeight: 1.6,
              }}
            >
              No runaround. No excuses.
              <br />
              That's my word on every job I take.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <button onClick={scrollToContact} className="btn-dark text-base px-8 py-4">
              Book Your Free Quote
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
