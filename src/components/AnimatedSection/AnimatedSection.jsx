import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import useScrollReveal from '../../hooks/useScrollReveal';
import { fadeUp, slideInLeft, slideInRight, fadeIn } from '../../animations/variants';

const directionMap = { up: fadeUp, left: slideInLeft, right: slideInRight, none: fadeIn };

/**
 * Reusable scroll-reveal wrapper.
 * Wraps any content in a motion.div that fades/slides in when scrolled into view.
 *
 * Props:
 * - direction: 'up' | 'left' | 'right' | 'none'
 * - delay: additional delay in seconds
 * - className / style: passed through to the wrapper div
 */
const AnimatedSection = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  style = {},
  as = 'div',
}) => {
  const { ref, isInView } = useScrollReveal();
  const prefersReducedMotion = useReducedMotion();
  const baseVariant = directionMap[direction] || fadeUp;

  // Inject extra delay into the transition without mutating the shared variant
  const variant =
    delay > 0
      ? {
          ...baseVariant,
          visible: {
            ...baseVariant.visible,
            transition: { ...baseVariant.visible.transition, delay },
          },
        }
      : baseVariant;

  // Accessibility: immediately show content if reduced motion preferred
  if (prefersReducedMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
};

export default AnimatedSection;
