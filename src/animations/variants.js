// ─────────────────────────────────────────────────────────────────────────────
// animations/variants.js
// Central Framer Motion variant library.
// ALL animations use only GPU-friendly properties: opacity + transform.
// Never animate: width, height, top, left, right, bottom.
// ─────────────────────────────────────────────────────────────────────────────

/** Apple's standard cubic-bezier easing */
export const EASE = [0.25, 0.1, 0.25, 1];

/** Fade up from 30px below — the primary scroll-reveal variant */
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Pure fade — for elements that shouldn't move */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

/** Slide in from left */
export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Slide in from right */
export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Scale in from 92% — for cards and modals */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

/** Stagger container — children animate 0.1s apart */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/** Fast stagger — for skill tags (0.06s apart) */
export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
};

/** Hero stagger container — 0.15s apart, delayed start */
export const heroStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/** Hero individual items — subtle upward entrance */
export const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};
