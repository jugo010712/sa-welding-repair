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

type GalleryItem =
  | { type: "photo"; image: string; tag: string; location: string; description: string; objectPosition?: string; tileHeight?: string }
  | { type: "video"; src: string; tag: string; location: string; description: string };

const galleryItems: GalleryItem[] = [
  {
    type: "photo",
    image: "/IMG_3034.jpg",
    tag: "RESIDENTIAL ENTRY GATE",
    location: "San Antonio, TX",
    description: "Custom steel residential entry gate — fabricated and installed on-site.",
    objectPosition: "center center",
    tileHeight: "640px",
  },
  {
    type: "photo",
    image: "/IMG_3022.jpg",
    tag: "BALCONY SAFETY RAILING",
    location: "San Antonio, TX",
    description: "Steel safety railing installed on apartment balcony to prevent falls.",
    objectPosition: "85% 85%",
    tileHeight: "640px",
  },
  {
    type: "photo",
    image: "/IMG_5759.jpg",
    tag: "PRECISION MIG WELD",
    location: "San Antonio, TX",
    description: "Clean MIG weld on structural steel — tight bead, no spatter.",
    objectPosition: "center 65%",
  },
  {
    type: "photo",
    image: "/IMG_5628.jpg",
    tag: "QUALITY WELD FINISH",
    location: "San Antonio, TX",
    description: "Finished weld showing clean bead and professional craftsmanship.",
    objectPosition: "center 85%",
  },
  {
    type: "photo",
    image: "/IMG_5766.jpg",
    tag: "STRUCTURAL STEEL WELD",
    location: "San Antonio, TX",
    description: "Structural steel weld work — built to last.",
    objectPosition: "center center",
  },
  {
    type: "video",
    src: "/IMG_5630.mp4",
    tag: "WELDING IN ACTION",
    location: "San Antonio, TX",
    description: "Watch the craft — real work, real skill.",
  },
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
                gridColumn: index < 2 ? "span 2 / span 2" : undefined,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    objectPosition: "center center",
                    display: "block",
                  }}
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.tag}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    height: item.tileHeight ?? (index < 2 ? "340px" : "220px"),
                    objectPosition: item.objectPosition ?? "center center",
                  }}
                />
              )}
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
              {/* Orange bottom border */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: "#FF6B1A" }}
              />
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
