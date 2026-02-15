import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import { motion } from "framer-motion";

const workExperience = [
  {
    company: "Datamatics",
    location: "Bengaluru",
    role: "Node.js Backend Developer",
    period: "June 2022 – Present",
    type: "full-time",
    categories: [
      {
        title: "Authentication & Security",
        icon: "🔐",
        highlights: [
          "Architected centralized auth platform with LDAP, JWT SSO, RBAC/CBAC, and Redis sessions — reducing integration time by 80%",
          "Implemented Azure AD SSO using OAuth2 & OpenID Connect for multi-tenant enterprise login",
          "Designed encrypted JWT-based auth mechanisms, improving API security & reducing token validation latency",
          "Developed Credential-Based Access Control (CBAC) for fine-grained endpoint-level authorization",
        ],
      },
      {
        title: "Performance & Optimization",
        icon: "⚡",
        highlights: [
          "Migrated session management to Redis caching — reduced DB load by 60%, improved API response time by 40%",
          "Resolved 100+ SonarQube issues, significantly improving code quality metrics",
          "Enforced client version compatibility via User-Agent validation, minimizing production issues",
        ],
      },
      {
        title: "Cloud & Microservices",
        icon: "☁️",
        highlights: [
          "Built AWS Lambda functions (VPC-integrated) with Secrets Manager for secure DB automation",
          "Developed push notification microservice using AWS SNS and Redis caching",
          "Designed event-driven serverless workflows using AWS SQS and EventBridge",
        ],
      },
      {
        title: "AI & Intelligent Systems",
        icon: "🤖",
        highlights: [
          "Designed RAG pipelines integrating vector search and LLMs for contextual document validation",
          "Built Agentic AI workflows using CrewAI and MCP architecture for automated compliance reasoning",
          "Applied advanced prompt engineering and LangChain orchestration to reduce hallucinations",
        ],
      },
    ],
  },
  {
    company: "PrepBytes",
    location: "Remote",
    role: "Training & Intern",
    period: "Sep 2021 – June 2022",
    type: "intern",
    categories: [
      {
        title: "Full Stack Development",
        icon: "💻",
        highlights: [
          "Completed structured MERN training and built full-stack applications using Agile methodology",
          "Developed React Blog App with dynamic routing, secure APIs, and MongoDB storage",
          "Built responsive portfolio website deployed on Netlify and Render",
        ],
      },
    ],
  },
];

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="exp-section" id="experience">
      <div className="exp-header">
        <span style={{ color: darkMode ? "white" : "" }}>Professional</span>
        <span>Work Experience</span>
      </div>

      {/* Stats Row */}
      <div className="experience">
        <div className="achievement">
          <div className="circle" style={{ color: darkMode ? "var(--orange)" : "" }}>
            {process.env.REACT_APP_EXPERIENCE_YEAR}
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>years </span>
          <span>Experience</span>
        </div>
        <div className="achievement">
          <div className="circle" style={{ color: darkMode ? "var(--orange)" : "" }}>
            {process.env.REACT_APP_PROJECTS_COMPLETED}
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>completed </span>
          <span>Projects</span>
        </div>
        <div className="achievement">
          <div className="circle" style={{ color: darkMode ? "var(--orange)" : "" }}>
            {process.env.REACT_APP_COMPANIES_WORKED}
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>companies </span>
          <span>Work</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline">
        {workExperience.map((job, jobIndex) => (
          <motion.div
            className="timeline-item"
            key={jobIndex}
            initial={{ opacity: 0, x: jobIndex % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: jobIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <div
              className={`timeline-card ${job.type}`}
              style={{
                background: darkMode ? "#16161d" : "",
                borderColor: darkMode ? "#2a2a3a" : "",
              }}
            >
              <div className="timeline-card-header">
                <div>
                  <h3 style={{ color: darkMode ? "white" : "" }}>{job.company}</h3>
                  <span className="timeline-role">{job.role}</span>
                  <span className="timeline-location">{job.location}</span>
                </div>
                <span className="timeline-period">{job.period}</span>
              </div>

              <div className="timeline-categories">
                {job.categories.map((cat, catIndex) => (
                  <motion.div
                    className="timeline-cat"
                    key={catIndex}
                    initial={{ opacity: 0, x: catIndex % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="cat-title">
                      <span>{cat.icon}</span>
                      <span style={{ color: darkMode ? "#FCA61F" : "" }}>{cat.title}</span>
                    </div>
                    <ul>
                      {cat.highlights.map((point, pIndex) => (
                        <li
                          key={pIndex}
                          style={{ color: darkMode ? "#ccc" : "" }}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div
        className="blur"
        style={{
          background: "rgb(238 210 255)",
          display: darkMode ? "none" : "",
        }}
      ></div>
      <div className="blur5" style={{ display: darkMode ? "none" : "" }}></div>
    </div>
  );
};

export default Experience;