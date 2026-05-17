// ─────────────────────────────────────────────────────────────────────────────
// hooks/useLenis.js
// Initializes Lenis smooth scroll and syncs it with GSAP's ticker so
// ScrollTrigger works correctly with the smooth scroll offset.
// ─────────────────────────────────────────────────────────────────────────────
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,          // Smoothing factor — 0.1 gives Apple-like inertia
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Keep GSAP ScrollTrigger in sync with Lenis scroll position
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis via GSAP's requestAnimationFrame for 60fps+ sync
    const rafId = gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP's lag smoothing so animations stay perfectly in sync
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(rafId);
      lenis.destroy();
    };
  }, []);
};
