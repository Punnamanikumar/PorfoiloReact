import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../animations/variants";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>punnamanikumar@gmail.com</span>
        <AnimatedSection direction="none" className="f-icons-wrapper">
          <motion.div
            className="f-icons"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              variants={fadeUp}
              whileHover={{ scale: 1.2, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              href="https://github.com/Punnamanikumar" target="_blank" rel="noreferrer"
            >
              <Gitub color="white" size={"3rem"} />
            </motion.a>
            <motion.a
              variants={fadeUp}
              whileHover={{ scale: 1.2, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              href="https://linkedin.com/in/punnamanikumar" target="_blank" rel="noreferrer"
            >
              <LinkedIn color="white" size={"3rem"} />
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Footer;
