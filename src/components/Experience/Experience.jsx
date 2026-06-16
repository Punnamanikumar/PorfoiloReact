import React, { useContext, useEffect, useRef } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { slideInLeft, slideInRight } from "../../animations/variants";

gsap.registerPlugin(ScrollTrigger);

const workExperience = [
  {
    company: "Datamatics",
    location: "Bengaluru",
    role: "Node.js Backend Developer",
    period: "June 2022 – Present",
    type: "full-time",
    categories: [
      {
        title: "Production Admin Portal — React.js",
        icon: "💻",
        highlights: [
          "Built an enterprise administration portal using React.js to streamline user onboarding, role configurations, and operational reporting",
          "Designed reusable component libraries with role-aware UI logic, aligning the frontend interface directly with backend RBAC security policies",
        ],
      },
      {
        title: "Authentication & Security",
        icon: "🔐",
        highlights: [
          "Architected a reusable security engine (LDAP, Azure AD, OAuth2, OpenID Connect) that cut integration effort by 80% across 3 distinct enterprise applications",
          "Built fine-grained access systems using Credential-Based (CBAC) and Role-Based (RBAC) controls to protect sensitive client-facing APIs",
          "Designed JWT-based authentication mechanisms that reduced token validation latency and tightened api endpoints",
          "Created client-side cryptographic utilities (AES-256-CBC, RSA Hybrid AES-GCM) to prevent testing teams from leaking keys and sensitive payloads to insecure public online tools",
        ],
      },
      {
        title: "Performance & Optimization",
        icon: "⚡",
        highlights: [
          "Boosted API speeds by 30–40% and cut database load in half by migrating session management to high-throughput Redis caching",
          "Cleared 100+ code quality and security alerts in SonarQube, improving code health and maintainability metrics",
          "Enforced client version verification via customized User-Agent validation rules, drastically reducing runtime production errors",
        ],
      },
      {
        title: "Cloud & Microservices",
        icon: "☁️",
        highlights: [
          "Designed event-driven serverless architectures using AWS SQS, EventBridge, and Kafka streams for processing async messages",
          "Built secure AWS Lambda functions integrated with VPC networking and AWS Secrets Manager for automated database jobs",
          "Created a high-throughput push notifications service optimized with Redis caching for instant delivery",
        ],
      },
      {
        title: "AI & Intelligent Systems",
        icon: "🤖",
        highlights: [
          "Created intelligent document validators using semantic vector search, custom RAG pipelines, and LLM reasoning",
          "Built autonomous agentic compliance workflows utilizing multi-agent frameworks like CrewAI and the Model Context Protocol (MCP)",
          "Leveraged GitHub Copilot and advanced prompting techniques to accelerate backend prototyping and reduce boilerplate code",
        ],
      },
    ],
  },
  {
    company: "PrepBytes",
    location: "Remote",
    role: "MERN Stack Intern",
    period: "Sep 2021 – June 2022",
    type: "intern",
    categories: [
      {
        title: "Full Stack Development",
        icon: "💻",
        highlights: [
          "Mastered full-stack development patterns (MERN stack) while building web applications in fast-paced Agile sprints",
          "Created clean web products from scratch, covering frontend routing, RESTful APIs, and MongoDB schema designs",
          "Deployed responsive client-server web apps to cloud environments like Netlify and Render",
        ],
      },
    ],
  },
];

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const statsRef = useRef(null);

  // GSAP Counter Animation
  useEffect(() => {
    const stats = statsRef.current.querySelectorAll('.counter-val');

    // Only animate if element is found
    if (stats.length === 0) return;

    const ctx = gsap.context(() => {
      stats.forEach((stat) => {
        const targetValue = parseFloat(stat.getAttribute('data-target'));
        const isFloat = targetValue % 1 !== 0; // Check if it's a decimal like 3.8

        ScrollTrigger.create({
          trigger: statsRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(stat, {
              innerHTML: targetValue,
              duration: 2,
              ease: "power2.out",
              snap: { innerHTML: isFloat ? 0.1 : 1 },
              onUpdate: function () {
                // Ensure float values display with 1 decimal place
                if (isFloat) {
                  stat.innerHTML = parseFloat(this.targets()[0].innerHTML).toFixed(1);
                }
              }
            });
          }
        });
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="exp-section" id="experience">
      <AnimatedSection className="exp-header" direction="up">
        <span style={{ color: darkMode ? "white" : "" }}>Professional</span>
        <span>Work Experience</span>
      </AnimatedSection>

      {/* Stats Row - GSAP animated */}
      <div className="experience" ref={statsRef}>
        <div className="achievement">
          <div className="circle" style={{ color: darkMode ? "var(--orange)" : "" }}>
            <span className="counter-val" data-target={process.env.REACT_APP_EXPERIENCE_YEAR || "3.8"}>0</span>+
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>years </span>
          <span>Experience</span>
        </div>
        <div className="achievement">
          <div className="circle" style={{ color: darkMode ? "var(--orange)" : "" }}>
            <span className="counter-val" data-target={process.env.REACT_APP_PROJECTS_COMPLETED || "10"}>0</span>+
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>completed </span>
          <span>Projects</span>
        </div>
        <div className="achievement">
          <div className="circle" style={{ color: darkMode ? "var(--orange)" : "" }}>
            <span className="counter-val" data-target={process.env.REACT_APP_COMPANIES_WORKED || "2"}>0</span>
          </div>
          <span style={{ color: darkMode ? "white" : "" }}></span>
          <span>Companies</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline">
        {workExperience.map((job, jobIndex) => (
          <motion.div
            className="timeline-item"
            key={jobIndex}
            variants={jobIndex % 2 === 0 ? slideInLeft : slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div
              className="timeline-dot"
              style={{ borderColor: darkMode ? "#1e1e2a" : "" }}
            ></div>
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
                  <span className="timeline-location" style={{ color: darkMode ? "#888" : "" }}>{job.location}</span>
                </div>
                <span className="timeline-period">{job.period}</span>
              </div>

              <div className="timeline-categories">
                {job.categories.map((cat, catIndex) => (
                  <motion.div
                    className="timeline-cat"
                    key={catIndex}
                    variants={slideInLeft} // Use variants instead of raw x values
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                      background: darkMode ? "#1e1e2a" : "",
                      borderColor: darkMode ? "#2a2a3a" : "",
                    }}
                  >
                    <div className="cat-title">
                      <span>{cat.icon}</span>
                      <span style={{ color: darkMode ? "#FCA61F" : "" }}>{cat.title}</span>
                    </div>
                    <ul>
                      {cat.highlights.map((point, pIndex) => (
                        <li
                          key={pIndex}
                          style={{ color: darkMode ? "#bbb" : "" }}
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