// ─────────────────────────────────────────────────────────────────────────────
// hooks/useScrollReveal.js
// Returns a ref and isInView flag for scroll-triggered entrance animations.
// Respects prefers-reduced-motion for accessibility.
// ─────────────────────────────────────────────────────────────────────────────
import { useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * @param {object} options - useInView options
 * @param {number} options.amount - Fraction of element visible to trigger (0–1)
 * @param {boolean} options.once - Only trigger once
 */
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
    ...options,
  });

  // If user prefers reduced motion, always treat as "in view" (instant display)
  return { ref, isInView: prefersReducedMotion ? true : isInView };
};

export default useScrollReveal;
