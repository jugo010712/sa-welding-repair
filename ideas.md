# SA Welding & Repair — Design Brainstorm

## Design Approach Options

<response>
<text>
**Approach A: Industrial Brutalism**
- **Design Movement:** Industrial Brutalism — raw, structural, unapologetic
- **Core Principles:** Exposed structure, heavy weight typography, asymmetric tension, zero decoration
- **Color Philosophy:** Forge Black (#0D0D0D) as the dominant void, Arc Orange (#FF6B1A) as pure heat energy — used sparingly so it hits like a spark. Steel Gray (#1E2329) as the mid-ground. No gradients except subtle noise textures.
- **Layout Paradigm:** Full-bleed sections with hard edges. Hero uses a diagonal clip-path cut at the bottom to create angular momentum. Service cards use a left-border accent bar instead of rounded corners. Asymmetric two-column layouts in About section.
- **Signature Elements:** (1) Thick 3px Arc Orange horizontal rule as section dividers. (2) Large Bebas Neue numbers (01, 02, 03) used as decorative anchors in the How It Works section. (3) Subtle metal texture overlay (noise/grain CSS) on dark backgrounds.
- **Interaction Philosophy:** Hover states reveal an orange left-border sweep on cards. CTA buttons have a hard fill-from-left animation on hover. No bouncy or playful motion — everything is deliberate and mechanical.
- **Animation:** Fade-up entrance animations on scroll (framer-motion). Section titles slide in from the left. Numbers count up on scroll entry. No parallax — too distracting.
- **Typography System:** Bebas Neue (ALL CAPS, 0.05em tracking) for all display. Barlow Condensed Bold for subheads and card titles. DM Sans Regular for body. JetBrains Mono for phone numbers and pricing.
</text>
<probability>0.08</probability>
</response>

<response>
<text>
**Approach B: Texas Trade Craft**
- **Design Movement:** American Trade Craft — inspired by vintage signage and tool catalogs, modernized
- **Core Principles:** Warmth within darkness, deliberate imperfection, earned credibility, local pride
- **Color Philosophy:** Forge Black as the base, but warmed with Heat White (#FFF3E0) text instead of pure white — gives a slightly aged, authentic feel. Arc Orange as the primary action color. Weld Amber (#E8920A) used for hover states and secondary accents.
- **Layout Paradigm:** Staggered card layouts. The hero uses a full-bleed photo with a hard dark overlay and left-aligned text anchored to a vertical orange rule. Service cards are slightly offset from each other in a brick-pattern grid.
- **Signature Elements:** (1) Thin orange corner-cut on cards (clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)). (2) Section labels in JetBrains Mono with a small orange dot prefix. (3) Diagonal orange stripe divider between the Offer section and Reviews.
- **Interaction Philosophy:** Cards lift slightly on hover with an orange glow shadow. Buttons use a border-draw animation. The sticky nav gains a subtle backdrop-blur when scrolled.
- **Animation:** Staggered fade-in for service cards. Section titles use a letter-reveal animation. Smooth scroll with offset for sticky nav.
- **Typography System:** Bebas Neue for H1/H2. Barlow Condensed 700 for card titles and nav. DM Sans 400/500 for body. JetBrains Mono for contact info and pricing.
</text>
<probability>0.07</probability>
</response>

<response>
<text>
**Approach C: Forge & Steel Precision**
- **Design Movement:** Contemporary Industrial — precision manufacturing meets digital craft
- **Core Principles:** Structural clarity, high-contrast hierarchy, purposeful motion, conversion-first layout
- **Color Philosophy:** Pure Forge Black (#0D0D0D) backgrounds with Steel Gray (#1E2329) as the secondary surface. Arc Orange (#FF6B1A) used exclusively for CTAs, icons, and key numbers — maximum impact through restraint. Heat White (#FFF3E0) for body text to avoid harsh pure-white contrast.
- **Layout Paradigm:** Full-width sections with a max-width content container (1280px). Hero is left-aligned with a large background image and a semi-transparent dark overlay. The Offer section breaks the pattern with a full Arc Orange background. Asymmetric About section with photo on left, copy on right.
- **Signature Elements:** (1) Thin 1px Arc Orange top border on service cards with a 3px left accent bar. (2) Large decorative step numbers in Bebas Neue at 120px, semi-transparent orange. (3) Sticky nav with Iron (#2E3440) background and a bottom orange 2px rule on scroll.
- **Interaction Philosophy:** Smooth, fast transitions (200ms). Service cards have a subtle orange glow on hover. CTA buttons use a fill-sweep animation. Nav links have an underline-grow effect.
- **Animation:** Framer-motion scroll-triggered fade-up for all sections. Staggered card animations. Hero text animates in with a slight upward drift on load.
- **Typography System:** Bebas Neue (display, ALL CAPS) + Barlow Condensed (subheads, nav, buttons) + DM Sans (body) + JetBrains Mono (phone, prices).
</text>
<probability>0.09</probability>
</response>

---

## Selected Approach: **C — Forge & Steel Precision**

This approach best honors the brand guidelines while maximizing conversion. The full Arc Orange offer section creates a powerful visual break. The precision layout communicates professionalism without losing the industrial trade identity. Left-aligned typography and asymmetric layouts avoid the generic centered AI look.
