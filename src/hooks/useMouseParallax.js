// ─────────────────────────────────────────────────────────────────────────────
// hooks/useMouseParallax.js
// Tracks mouse position and returns spring-smoothed motion values.
// Used exclusively in the Hero (Intro) section for subtle parallax depth.
// ─────────────────────────────────────────────────────────────────────────────
import { useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

/**
 * @param {number} strength - Pixel range of parallax movement (default: 12)
 */
const useMouseParallax = (strength = 12) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring smoothing gives the "floating" feel — not instantaneous
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 18, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 18, mass: 0.4 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse to -1..1 range, then scale by strength
      const x = (e.clientX / window.innerWidth - 0.5) * 2 * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * 2 * strength;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, strength]);

  return { x: smoothX, y: smoothY };
};

export default useMouseParallax;
