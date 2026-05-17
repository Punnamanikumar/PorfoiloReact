import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { staggerContainer, fadeUp } from "../../animations/variants";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Sphoorthy Engineering College, Hyderabad",
    period: "July 2017 – July 2021",
    grade: "CGPA: 7.17",
    icon: "🎓",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "NRI Junior College, Hyderabad",
    period: "May 2015 – March 2017",
    grade: "Grade: 77%",
    icon: "📚",
  },
];

const certifications = [
  {
    title: "Salesforce Developer Training",
    issuer: "ICT Academy",
    detail: "Earned 5 Super Badges and 59 Developer Module Badges",
    link: "https://trailblazer.me/",
    icon: "☁️",
  },
  {
    title: "Python Programming & AWS Courses",
    issuer: "Completed during lockdown to upskill",
    detail: "Python fundamentals, AWS cloud essentials",
    link: "#",
    icon: "📜",
  },
];

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="edu-section" id="works">
      <AnimatedSection direction="up" className="edu-header">
        <span style={{ color: darkMode ? "white" : "" }}>Education &</span>
        <span>Certifications</span>
      </AnimatedSection>

      <div className="edu-content">
        {/* Education */}
        <AnimatedSection direction="none" className="edu-column">
          <h3 style={{ color: darkMode ? "#FCA61F" : "" }}>🎓 Education</h3>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {education.map((edu, index) => (
              <motion.div
                className="edu-card"
                key={index}
                variants={fadeUp}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                style={{
                  background: darkMode ? "#16161d" : "",
                  borderColor: darkMode ? "#2a2a3a" : "",
                }}
              >
                <motion.div className="edu-icon" whileHover={{ rotate: 10, scale: 1.1 }}>{edu.icon}</motion.div>
                <div className="edu-info">
                  <h4 style={{ color: darkMode ? "white" : "" }}>{edu.degree}</h4>
                  <span className="edu-institution">{edu.institution}</span>
                  <div className="edu-meta">
                    <span className="edu-period">{edu.period}</span>
                    <span className="edu-grade">{edu.grade}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection direction="none" delay={0.2} className="edu-column">
          <h3 style={{ color: darkMode ? "#FCA61F" : "" }}>📜 Certifications</h3>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {certifications.map((cert, index) => (
              <motion.div
                className="edu-card cert-card"
                key={index}
                variants={fadeUp}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                style={{
                  background: darkMode ? "#16161d" : "",
                  borderColor: darkMode ? "#2a2a3a" : "",
                }}
              >
                <motion.div className="edu-icon" whileHover={{ rotate: 10, scale: 1.1 }}>{cert.icon}</motion.div>
                <div className="edu-info">
                  <h4 style={{ color: darkMode ? "white" : "" }}>{cert.title}</h4>
                  <span className="edu-institution">{cert.issuer}</span>
                  <p className="cert-detail" style={{ color: darkMode ? "#ccc" : "" }}>
                    {cert.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>

      <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
    </div>
  );
};

export default Works;
