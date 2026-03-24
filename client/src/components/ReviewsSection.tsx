/*
 * SA WELDING & REPAIR — Reviews Section
 * Design: Forge & Steel Precision
 * Background: #0D0D0D (Forge Black)
 * Section title: Bebas Neue, white
 * Review cards: #1E2329 background, Arc Orange stars
 * Reviewer name: Barlow Condensed Bold, white
 * Review text: DM Sans, #C9D4E0
 * Source: JetBrains Mono, #8A9BB0
 * Launch version: placeholder copy per brand guidelines
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Maria G.",
    neighborhood: "Stone Oak",
    text: "Called on a Monday, he was out by Wednesday with a quote. Gate was fixed by Friday. Price was exactly what he said. No games, no surprises. Will definitely call again.",
    source: "Google Review",
  },
  {
    name: "James T.",
    neighborhood: "Helotes",
    text: "Had a broken driveway gate that two other welders flaked on. SA Welding showed up when they said they would, did clean work, and cleaned up after themselves. That's all I ask.",
    source: "Google Review",
  },
  {
    name: "Sandra R.",
    neighborhood: "Alamo Heights",
    text: "Built us a carport from scratch. Came out to measure, gave us a written quote the same day, and had it done in two visits. Solid work. Neighbors have already asked for his number.",
    source: "Google Review",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function StarRow() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="#FF6B1A" stroke="none" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="reviews"
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
            }}
          >
            WHAT SAN ANTONIO HOMEOWNERS SAY.
          </h2>
        </motion.div>

        {/* Review Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reviews.map((review) => (
            <motion.div key={review.name} className="review-card" variants={cardVariants}>
              <StarRow />
              <blockquote
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  color: "#C9D4E0",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: "1.25rem",
                }}
              >
                "{review.text}"
              </blockquote>
              <div>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#FFFFFF",
                    letterSpacing: "0.02em",
                  }}
                >
                  — {review.name}, {review.neighborhood}
                </p>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    color: "#8A9BB0",
                    marginTop: "0.25rem",
                  }}
                >
                  {review.source}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Below reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#C9D4E0",
              fontSize: "0.95rem",
              marginBottom: "0.25rem",
            }}
          >
            Every review on this page came from a real San Antonio client.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#8A9BB0",
              fontSize: "0.9rem",
              marginBottom: "1.5rem",
            }}
          >
            I don't manufacture them. I earn them.
          </p>
          <a
            href="https://www.google.com/search?q=SA+Welding+Repair+San+Antonio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#FF6B1A",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Read All Our Reviews on Google
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
