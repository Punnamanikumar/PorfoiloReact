import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { themeContext } from "../../Context";

const sections = [
  { id: "Navbar", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Portfolio" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards" },
];

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [activeSection, setActiveSection] = useState("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const savedScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "Navbar";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      savedScrollY.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${savedScrollY.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, savedScrollY.current);
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = "";
      });
    }
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    let targetTop = 0;
    if (el && id !== "Navbar") {
      const elTop = el.offsetTop;
      targetTop = Math.max(0, elTop - 80);
    }
    
    setMenuOpen(false);
    
    // Use setTimeout to allow menu to close before scrolling
    setTimeout(() => {
      // Lenis handles smooth scroll automatically if initialized
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      <div className="n-spacer" id="Navbar"></div>

      {/* Animate navbar sliding down on load */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`n-wrapper ${scrolled ? "n-scrolled" : ""}`}
        style={{
          background: scrolled
            ? darkMode
              ? "rgba(10, 10, 15, 0.7)"
              : "rgba(255, 255, 255, 0.7)"
            : darkMode
            ? "rgba(10, 10, 15, 1)"
            : "rgba(255, 255, 255, 1)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? (darkMode ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)") : "1px solid transparent",
        }}
      >
        <div className="n-left">
          <div className="n-name" style={{ color: darkMode ? "white" : "" }}>
            Manikumar
          </div>
          <Toggle />
        </div>

        <button
          className={`n-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          <span style={{ background: darkMode ? "white" : "" }}></span>
          <span style={{ background: darkMode ? "white" : "" }}></span>
          <span style={{ background: darkMode ? "white" : "" }}></span>
        </button>

        <AnimatePresence>
          {(!menuOpen && window.innerWidth > 768) || menuOpen ? (
            <motion.div
              className={`n-right ${menuOpen ? "n-menu-open" : ""}`}
              style={{
                background: menuOpen && darkMode
                  ? "rgba(10, 10, 15, 0.98)"
                  : undefined,
              }}
              initial={menuOpen ? { opacity: 0, y: -20 } : false}
              animate={menuOpen ? { opacity: 1, y: 0 } : false}
              exit={menuOpen ? { opacity: 0, y: -20 } : false}
              transition={{ duration: 0.3 }}
            >
              <div className="n-list">
                <ul style={{ listStyleType: "none" }}>
                  {sections.map((s) => (
                    <li key={s.id}>
                      <span
                        className={activeSection === s.id ? "n-active" : ""}
                        onClick={() => handleNavClick(s.id)}
                        style={{
                          color: activeSection !== s.id && darkMode ? "#888" : "",
                        }}
                      >
                        {s.label}
                        {/* Apple-style animated underline */}
                        {activeSection === s.id && (
                          <motion.div
                            layoutId="active-nav-indicator"
                            className="nav-indicator"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="button n-button"
                onClick={() => handleNavClick("contact")}
              >
                Contact
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
