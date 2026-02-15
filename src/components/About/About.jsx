import React, { useContext } from "react";
import "./About.css";
import { themeContext } from "../../Context";

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
      <div className="about-header">
        <span style={{ color: darkMode ? "white" : "" }}>Get To Know</span>
        <span>About Me</span>
        <div className="hr2"></div>
      </div>

      <div className="about-content">
        <div className="about-bio" style={{ color: darkMode ? "#ccc" : "" }}>
          <p>{process.env.REACT_APP_ABOUT_DESC}</p>
          <p className="about-extra" style={{ color: darkMode ? "#aaa" : "" }}>
            I enjoy architecting solutions that balance security, performance, and developer experience.
            When I'm not building backend systems, you'll find me exploring new AI frameworks,
            contributing to open-source, or mentoring fellow developers.
          </p>
        </div>

        <div className="skills-container">
          <h3 style={{ color: darkMode ? "#FCA61F" : "" }}>Technical Skills</h3>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div
                className="skill-category"
                key={index}
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
                <div className="skill-tags">
                  {category.skills.map((skill, sIndex) => (
                    <span
                      className="skill-tag"
                      key={sIndex}
                      style={{
                        background: darkMode ? "#242D49" : "",
                        color: darkMode ? "#60a5fa" : "",
                        borderColor: darkMode ? "#3a3a5a" : "",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
    </div>
  );
};

export default About;