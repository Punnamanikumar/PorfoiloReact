import React, { useContext } from "react";
import "./About.css";
import { themeContext } from "../../Context";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { motion } from "framer-motion";
import { staggerFast } from "../../animations/variants";

const skillCategories = [
  {
    title: "Backend Technologies",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Nest.js", "TypeScript", "REST APIs", "Mongoose"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Auth & Security",
    icon: "🔐",
    skills: ["LDAP", "Azure AD SSO", "OAuth2", "OpenID Connect", "JWT", "RBAC", "CBAC"],
  },
  {
    title: "Databases & Caching",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL", "Oracle", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: ["AWS Lambda", "AWS SNS", "AWS SQS", "EventBridge", "S3", "AWS CDK", "Docker", "Git"],
  },
  {
    title: "AI & LLM",
    icon: "🤖",
    skills: ["RAG", "Prompt Engineering", "CrewAI", "MCP", "Agentic AI", "LangChain", "LangSmith", "Vector DBs"],
  },
  {
    title: "Monitoring & Quality",
    icon: "📊",
    skills: ["Grafana", "Dynatrace", "SonarQube", "Checkmarx", "Jest"],
  },
];

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="about" className="about-section">
      <AnimatedSection className="about-header" direction="up">
        <span style={{ color: darkMode ? "white" : "" }}>Get To Know</span>
        <span>About Me</span>
        <div className="hr2"></div>
      </AnimatedSection>

      <div className="about-content">
        <AnimatedSection className="about-bio" delay={0.1}>
          <p style={{ color: darkMode ? "#ccc" : "" }}>{process.env.REACT_APP_ABOUT_DESC}</p>
          <p className="about-extra" style={{ color: darkMode ? "#aaa" : "" }}>
            I enjoy architecting solutions that balance security, performance, and developer experience.
            When I'm not building backend systems, you'll find me exploring new AI frameworks,
            contributing to open-source, or mentoring fellow developers.
          </p>
        </AnimatedSection>

        <AnimatedSection className="skills-container" delay={0.2}>
          <h3 style={{ color: darkMode ? "#FCA61F" : "" }}>Technical Skills</h3>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                className="skill-category"
                key={index}
                whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                style={{
                  background: darkMode ? "#16161d" : "",
                  borderColor: darkMode ? "#2a2a3a" : "",
                }}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-title" style={{ color: darkMode ? "white" : "" }}>
                    {category.title}
                  </span>
                </div>
                {/* Internal stagger for skill tags */}
                <motion.div 
                  className="skill-tags"
                  variants={staggerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {category.skills.map((skill, sIndex) => (
                    <motion.span
                      className="skill-tag"
                      key={sIndex}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                      }}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        background: darkMode ? "#242D49" : "",
                        color: darkMode ? "#60a5fa" : "",
                        borderColor: darkMode ? "#3a3a5a" : "",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
    </div>
  );
};

export default About;