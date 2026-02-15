import React, { useContext, useEffect, useRef, useState } from "react";
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
      // Instantly restore scroll position (disable smooth scrolling temporarily)
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, savedScrollY.current);
      // Re-enable smooth scrolling after a tick
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = "";
      });
    }
  }, [menuOpen]);

  // Cleanup only on unmount (e.g. if component unmounts while menu is open)
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
      // Calculate where the element is in the document (not viewport)
      const elTop = el.offsetTop;
      targetTop = Math.max(0, elTop - 80);
    }
    
    setMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* Spacer so content doesn't hide behind fixed navbar */}
      <div className="n-spacer" id="Navbar"></div>

      <nav
        className={`n-wrapper ${scrolled ? "n-scrolled" : ""}`}
        style={{
          background: scrolled
            ? darkMode
              ? "rgba(22, 22, 30, 0.72)"
              : "rgba(255, 255, 255, 0.72)"
            : darkMode
            ? "rgba(22, 22, 30, 1)"
            : "rgba(255, 255, 255, 1)",
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

        <div
          className={`n-right ${menuOpen ? "n-menu-open" : ""}`}
          style={{
            background: menuOpen && darkMode
              ? "rgba(10, 10, 15, 0.98)"
              : undefined,
          }}
        >
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              {sections.map((s) => (
                <li key={s.id}>
                  <span
                    className={activeSection === s.id ? "n-active" : ""}
                    onClick={() => handleNavClick(s.id)}
                    style={{
                      color: activeSection !== s.id && darkMode ? "#ccc" : "",
                    }}
                  >
                    {s.label}
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
