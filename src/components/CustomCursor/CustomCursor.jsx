import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

/**
 * Two-element custom cursor: instant dot + spring-lagged ring.
 * - Dot: snaps to exact mouse position (no lag)
 * - Ring: follows with spring physics (stiffness 150, damping 20)
 * Only rendered/active on desktop via CSS pointer:fine media query.
 */
const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  // Ring lags behind the dot — creates depth/premium feel
  const springX = useSpring(cursorX, { stiffness: 150, damping: 20, mass: 0.3 });
  const springY = useSpring(cursorY, { stiffness: 150, damping: 20, mass: 0.3 });

  useEffect(() => {
    // Only track mouse on pointer:fine devices to avoid unnecessary overhead
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if the hovered element is an interactive link or button
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.button') ||
        target.closest('.cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Dot — exact position */}
      <motion.div 
        className="cursor-dot" 
        style={{ x: cursorX, y: cursorY }} 
        animate={{ scale: isHovering ? 1.5 : 1, opacity: isHovering ? 0.8 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Ring — spring lagged */}
      <motion.div 
        className="cursor-ring" 
        style={{ x: springX, y: springY }} 
        animate={{ scale: isHovering ? 0.3 : 1, opacity: isHovering ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
