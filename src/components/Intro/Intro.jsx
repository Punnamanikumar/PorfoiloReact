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
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const roles = [
  "MERN Stack Developer",
  "Backend Specialist",
  "Cloud & AI Enthusiast",
  "Auth Systems Architect",
];

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

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
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I'm</span>
          <span>Manikumar Punna</span>
          <span className="i-role">
            {displayText}
            <span className="cursor">|</span>
          </span>
          <span className="i-desc">{process.env.REACT_APP_INTRO_DESC}</span>
        </div>
        <div className="i-button">
          <span>
              <button className="button i-button1" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Hire me</button>
          </span>
          <span>
            <a
              href={process.env.REACT_APP_RESUME}
              target="_blank"
              rel="noreferrer"
              download
            >
              <button className="button i-button2">Download CV</button>
            </a>
          </span>
        </div>
        <div className="i-icons">
          <a href="https://github.com/Punnamanikumar" target="_blank" rel="noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/punnamanikumar" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" className="i-v1" />
        <img src={Vector2} alt="" className="i-v1" />
        {process.env.REACT_APP_PROFILE_IMAGE_ENABLED === "true" ? (
          <img src={boy} alt="" className="i-boy" />
        ) : (
          <img src={boy1} alt="" className="i-boy" />
        )}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="MERN" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="3.8+ Years" text2="Experience" />
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
      </div>
    </div>
  );
};

export default Intro;
