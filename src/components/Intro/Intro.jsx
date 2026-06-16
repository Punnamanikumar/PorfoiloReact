import React, { useContext, useState, useEffect } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/TechStacks/mani.png";
import boy1 from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { heroStagger, heroItem } from "../../animations/variants";
import useMouseParallax from "../../hooks/useMouseParallax";
import MagneticElement from "../MagneticElement/MagneticElement";

const roles = [
  "Backend Engineer",
  "Node.js Developer",
  "Auth Systems Architect",
  "AI Systems Builder",
];

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Parallax setup for the right side
  const { x: parallaxX, y: parallaxY } = useMouseParallax(20);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="Intro" id="Intro">
      {/* Left side: Animated staggered entrance */}
      <motion.div
        className="i-left"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        <div className="i-name">
          <motion.span variants={heroItem} style={{ color: darkMode ? "white" : "" }}>Hey! I'm</motion.span>
          <motion.span variants={heroItem}>Manikumar Punna</motion.span>
          <motion.span variants={heroItem} className="i-role">
            {displayText}
            <span className="cursor">|</span>
          </motion.span>
          <motion.span variants={heroItem} className="i-desc" style={{ color: darkMode ? "#e5e7eb" : "var(--gray)", opacity: darkMode ? 0.9 : 1 }}>{process.env.REACT_APP_INTRO_DESC}</motion.span>
        </div>

        <motion.div variants={heroItem} className="i-button">
          <MagneticElement>
            <button className="button i-button1" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Let's Connect</button>
          </MagneticElement>
          <MagneticElement>
            <a
              href={process.env.REACT_APP_RESUME}
              target="_blank"
              rel="noreferrer"
              download
            >
              <button className="button i-button2">Download CV</button>
            </a>
          </MagneticElement>
        </motion.div>

        <motion.div variants={heroItem} className="i-icons">
          <a href="https://github.com/Punnamanikumar" target="_blank" rel="noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/punnamanikumar" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </motion.div>
      </motion.div>

      {/* Right side: Mouse Parallax & Entrance */}
      <motion.div
        className="i-right"
        style={{ x: parallaxX, y: parallaxY }} // Apply mouse parallax
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img src={Vector1} alt="Decoration Vector 1" className="i-v1" />
        <img src={Vector2} alt="Decoration Vector 2" className="i-v1" />
        {process.env.REACT_APP_PROFILE_IMAGE_ENABLED === "true" ? (
          <img src={boy} alt="Manikumar's Profile" className="i-boy" />
        ) : (
          <img src={boy1} alt="Avatar" className="i-boy" />
        )}

        {/* Replace expensive 'left' animation with 'x' (transform) */}
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          src={glassesimoji}
          alt="Glasses Emoji"
          className="i-emoji"
        />

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="floating-div float-1"
        >
          <FloatinDiv img={crown} text1="MERN" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="floating-div float-2"
        >
          <FloatinDiv img={thumbup} text1="4+ Years" text2="Experience" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </motion.div>
    </div>
  );
};

export default Intro;
