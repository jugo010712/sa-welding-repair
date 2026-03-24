/*
 * SA WELDING & REPAIR — Work Showcase / Gallery Section
 * Design: Forge & Steel Precision
 * Background: #0D0D0D (Forge Black)
 * Full photo gallery grid — 2 real AI images + 6 placeholder slots for real job photos
 * Placeholder slots: dark cards with upload-ready messaging
 * Each tile: hover overlay with job label + orange bottom border
 * Voice: First-person ("I")
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera } from "lucide-react";

const GATE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663386692308/RBiCMj8UwbRJYDJd8hSFSR/custom-gate-ifkMx8qRhRUx9QSKbEg45o.webp";
const CARPORT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663386692308/RBiCMj8UwbRJYDJd8hSFSR/carport-install-aofJ5nj5Vr6gxWQBQituu4.webp";

type GalleryItem =
  | { type: "photo"; image: string; tag: string; location: string; description: string }
  | { type: "placeholder"; label: string };

const galleryItems: GalleryItem[] = [
  {
    type: "photo",
    image: GATE_IMAGE,
    tag: "CUSTOM GATE INSTALLATION",
    location: "San Antonio, TX",
    description: "Ornamental iron driveway gate — new install with brick pillar integration.",
  },
  {
    type: "photo",
    image: CARPORT_IMAGE,
    tag: "STEEL CARPORT BUILD",
    location: "San Antonio, TX",
    description: "Heavy-gauge steel carport fabricated and installed on-site.",
  },
  { type: "placeholder", label: "Gate or Fence Job" },
  { type: "placeholder", label: "A/C Cage Install" },
  { type: "placeholder", label: "BBQ Pit / Smoker Build" },
  { type: "placeholder", label: "Trailer Repair" },
  { type: "placeholder", label: "Custom Fabrication" },
  { type: "placeholder", label: "Metal Repair" },
];

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="work"
      ref={ref}
      className="py-16 lg:py-24"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10"
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
            THE WORK SPEAKS FOR ITSELF.
          </h2>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              color: "#8A9BB0",
              letterSpacing: "0.02em",
            }}
          >
            Real jobs. Real results. San Antonio, TX.
          </p>
        </motion.div>

        {/* Gallery grid — 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden group"
              style={{
                borderRadius: "4px",
                // First two items span 2 columns on desktop for visual hierarchy
                gridColumn: index < 2 ? "span 2 / span 2" : undefined,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              {item.type === "photo" ? (
                <>
                  <img
                    src={item.image}
                    alt={item.tag}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{
                      height: index < 2 ? "340px" : "220px",
                      objectPosition: "center",
                    }}
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.5) 60%, transparent 100%)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.65rem",
                        color: "#FF6B1A",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.tag} · {item.location}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.8rem",
                        color: "#C9D4E0",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                  {/* Always-visible label at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-3 py-2 group-hover:opacity-0 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 100%)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.6rem",
                        color: "#FF6B1A",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.tag}
                    </p>
                  </div>
                </>
              ) : (
                /* Placeholder slot */
                <div
                  className="flex flex-col items-center justify-center text-center"
                  style={{
                    height: "220px",
                    backgroundColor: "#1E2329",
                    border: "1px dashed #2E3440",
                    borderRadius: "4px",
                  }}
                >
                  <Camera
                    size={24}
                    style={{ color: "#2E3440", marginBottom: "0.5rem" }}
                  />
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "#2E3440",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      color: "#2E3440",
                      marginTop: "0.25rem",
                    }}
                  >
                    Photo coming soon
                  </p>
                </div>
              )}

              {/* Orange bottom border for photo tiles */}
              {item.type === "photo" && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: "#FF6B1A" }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA below gallery */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#8A9BB0",
              fontSize: "0.9rem",
              marginBottom: "0.5rem",
            }}
          >
            More photos being added as jobs are completed.
          </p>
          <a
            href="tel:2102015691"
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
            Call (210) 201-5691 to discuss your project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
