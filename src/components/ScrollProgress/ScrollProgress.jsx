import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './ScrollProgress.css';

/**
 * Thin gradient bar fixed at the very top of the page.
 * Animates scaleX (0→1) as user scrolls — GPU-friendly.
 * Spring smoothing prevents jumpy scrubbing on fast scroll.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  // Spring damps rapid scroll for a premium feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
};

export default ScrollProgress;
