/*
 * SA WELDING & REPAIR — Problem Section
 * Design: Forge & Steel Precision
 * Background: #1E2329 (Steel Gray)
 * Headline: Bebas Neue, Arc Orange
 * Body: DM Sans, Heat White
 * Pure copy — no images, tight layout
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24"
      style={{ backgroundColor: "#1E2329" }}
    >
      <div className="container mx-auto">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="orange-rule" />
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                letterSpacing: "0.03em",
                color: "#FF6B1A",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              FINDING A RELIABLE WELDER IN SAN ANTONIO
              <br />
              SHOULDN'T BE THIS HARD.
            </h2>
          </motion.div>

          <motion.div
            className="space-y-2"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#FFF3E0", fontSize: "1.05rem", lineHeight: 1.8 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>You call around.</p>
            <p>Nobody calls back.</p>
            <p>You find someone — they show up three weeks later.</p>
            <p>The price changes once they're halfway through the job.</p>
            <p>The work looks rushed.</p>
            <p className="pt-4" style={{ color: "#FF6B1A", fontWeight: 500 }}>
              That's not how I operate.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
