import React, { useContext } from "react";
import "./Awards.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { staggerContainer, scaleIn } from "../../animations/variants";

const awards = [
  {
    icon: "🏆",
    title: "Annual Achiever Award",
    org: "Datamatics",
    description: "Recognized for exceptional contributions and consistent high-quality delivery across multiple production applications.",
    color: "#FFD700",
  },
  {
    icon: "⭐",
    title: "Spot Award",
    org: "Datamatics",
    description: "Awarded for outstanding performance and going above and beyond in critical project deliverables.",
    color: "#FCA61F",
  },
  {
    icon: "🥉",
    title: "3rd Prize — J-HUB Hackathon League",
    org: "JNTUH",
    description: "Secured 3rd place at the J-HUB (JNTUH) Hackathon League with the project 'Portal for Farmers'.",
    color: "#CD7F32",
  },
];

const Awards = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="awards-section" id="awards">
      <AnimatedSection direction="up" className="awards-header">
        <span style={{ color: darkMode ? "white" : "" }}>Awards &</span>
        <span>Recognition</span>
      </AnimatedSection>

      <AnimatedSection direction="none" delay={0.2} as="div" className="awards-grid-wrapper">
        <motion.div 
          className="awards-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {awards.map((award, index) => (
            <motion.div
              className="award-card"
              key={index}
              variants={scaleIn}
              whileHover={{ 
                y: -8, 
                boxShadow: `0 20px 40px ${award.color}20`,
                borderColor: `${award.color}50` 
              }}
              style={{
                background: darkMode ? "#16161d" : "",
                borderColor: darkMode ? "#2a2a3a" : "",
              }}
            >
              <motion.div
                className="award-icon-wrapper"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                style={{ background: `${award.color}20`, borderColor: `${award.color}40` }}
              >
                <span className="award-icon">{award.icon}</span>
              </motion.div>
              <h3 style={{ color: darkMode ? "white" : "" }}>{award.title}</h3>
              <span className="award-org">{award.org}</span>
              <p style={{ color: darkMode ? "#ccc" : "" }}>{award.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      <div className="blur" style={{ background: "#C1F5FF", zIndex: -1 }}></div>
    </div>
  );
};

export default Awards;
