/*
 * SA WELDING & REPAIR — About Section
 * Design: Forge & Steel Precision
 * Background: #1E2329 (Steel Gray)
 * Left: real photo of owner working — about-welder.jpg
 * Right: copy in DM Sans
 * Section label: Bebas Neue, Arc Orange
 * Headline: Bebas Neue, white
 * Body: DM Sans, Heat White
 * Asymmetric two-column layout
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Shield, Award } from "lucide-react";


const credentials = [
  { icon: <Shield size={14} />, label: "Licensed" },
  { icon: <Award size={14} />, label: "Insured" },
  { icon: <MapPin size={14} />, label: "San Antonio, TX" },
  { icon: <MapPin size={14} />, label: "Serving the greater SA area" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 lg:py-24"
      style={{ backgroundColor: "#1E2329" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: "4px" }}
            >
              <video
                src="/Brother Working.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  maxHeight: "620px",
                  objectFit: "cover",
                  objectPosition: "center 65%",
                  display: "block",
                }}
              />
              {/* Orange corner accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: "#FF6B1A" }}
              />
            </div>
            {/* Floating credential badge */}
            <div
              className="absolute -bottom-4 -right-4 hidden lg:block p-4"
              style={{
                backgroundColor: "#0D0D0D",
                borderRadius: "4px",
                border: "1px solid #2E3440",
                minWidth: "160px",
              }}
            >
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  color: "#FF6B1A",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.25rem",
                }}
              >
                San Antonio, TX
              </p>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#FFF3E0",
                }}
              >
                Licensed & Insured
              </p>
            </div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Section label */}
            <p className="section-label mb-3">About</p>

            {/* Headline */}
            <div className="orange-rule" />
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "0.03em",
                color: "#FFFFFF",
                lineHeight: 1.05,
                marginBottom: "1.5rem",
              }}
            >
              THIS IS A ONE-PERSON OPERATION.
              <br />
              <span style={{ color: "#FF6B1A" }}>THAT'S THE POINT.</span>
            </h2>

            {/* Body copy */}
            <div
              className="space-y-4"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#FFF3E0", fontSize: "1rem", lineHeight: 1.75 }}
            >
              <p>
                My name is Angel.
                <br />
                I'm a San Antonio-trained welder and this is my business.
              </p>
              <p>
                When you call this number, I answer.
                <br />
                When I show up to your property, I do the work myself.
                <br />
                When I give you a quote, I stand behind it.
              </p>
              <p>
                There's no crew you've never met.
                <br />
                No subcontractors who don't know your job.
                <br />
                Just one person who takes pride in every weld.
              </p>
              <p>
                I started SA Welding & Repair because I wanted to build
                something San Antonio could count on.
                <br />
                That's still the goal — one job at a time.
              </p>
            </div>

            {/* Credentials */}
            <div
              className="flex flex-wrap gap-x-5 gap-y-2 mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(201, 212, 224, 0.15)" }}
            >
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="flex items-center gap-1.5"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    color: "#8A9BB0",
                    letterSpacing: "0.05em",
                  }}
                >
                  <span style={{ color: "#FF6B1A" }}>{cred.icon}</span>
                  {cred.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
