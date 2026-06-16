import React, { useRef } from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import ReactBlog from "../../img/TechStacks/blog.jpg";
import Jozbiz from "../../img/TechStacks/jozbiz.jpg";
import OroPocket from "../../img/TechStacks/oropocket.png";
import Klently from "../../img/TechStacks/klenty.jpg";
import Myntra from "../../img/TechStacks/myntra.jpg";
import AI_Compliance_Validator from "../../img/TechStacks/AI_Compliance_Validator.jpg"
import AI_JobAnalyser from "../../img/TechStacks/ai_job_analyser.jpeg"
import AttendanceImg from "../../img/TechStacks/attendance.png";
import JobPulseImg from "../../img/TechStacks/jobpulse.png";
import AskManiChatBot from "../../img/TechStacks/ask-mani.jpeg";
import CryptoToolingImg from "../../img/TechStacks/crypto_tooling.png";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { motion } from "framer-motion";

const Projects = () => {
  const swiperRef = useRef(null);
  const clients = [
    {
      img: JobPulseImg,
      title: "JobPulse AI — Agentic Job Match Tracker",
      technology: "Python · Gemini AI · LangGraph · Apify · Gmail API · Google Drive API · GitHub Actions",
      description:
        "An automated job search agent built with Gemini and LangGraph that scrapes listings, scores your resume's compatibility, and auto-generates custom resumes. Integrates with Gmail and Google Drive to email ranked daily reports.",
      hostedUrl: "#",
      githubUrl: "https://github.com/Punnamanikumar/JobPulse-AI",
    },
    {
      img: AskManiChatBot,
      title: "Portfolio Website",
      technology: "React.js · Node.js · Netlify · Render",
      description:
        "A personal developer website featuring a custom AI chatbot assistant ('Ask Mani') that queries a Node.js API to chat about my experience, skills, and background in real time. Integrates clean animations, dark mode, and email APIs.",
      hostedUrl: "https://manikumarportfolio.netlify.app",
      githubUrl: "https://github.com/Punnamanikumar/PorfoiloReact",
    },
    {
      img: CryptoToolingImg,
      title: "Secure Cryptographic Tooling",
      technology: "HTML5 · JavaScript · Web Crypto API · AES-256-CBC · RSA-OAEP · Hybrid Encryption",
      description:
        "Client-side encryption and decryption utilities designed for development teams. Replaces insecure public online testing tools with zero-server, in-browser cryptographic functions supporting AES-256-CBC and hybrid RSA-OAEP with AES-GCM, preventing sensitive keys and payloads from being sent to external servers.",
      links: [
        { text: "AES Live", url: "https://punnamanikumar.github.io/AES-256-CBC-Encryption-Decryption/" },
        { text: "AES Repo", url: "https://github.com/Punnamanikumar/AES-256-CBC-Encryption-Decryption" },
        { text: "RSA Live", url: "https://punnamanikumar.github.io/RSA-Encryption-Decryption-Hybrid-AES-GCM/" },
        { text: "RSA Repo", url: "https://github.com/Punnamanikumar/RSA-Encryption-Decryption-Hybrid-AES-GCM" }
      ]
    },
    {
      img: AI_Compliance_Validator,
      title: "Compliance Validator Agent",
      technology: "Node.js · LangChain · CrewAI · RAG · FAISS · OpenAI API · Vector DB",
      description:
        "An AI-driven compliance checker powered by LangChain and CrewAI. Features a full ingestion pipeline (FAISS embeddings, semantic chunking) to validate documents against policies with 85%+ accuracy, saving 60% of manual auditing time.",
      hostedUrl: "#",
      githubUrl: "https://github.com/Punnamanikumar/Compliance-Validator-Agent-Challenge",
    },
    {
      img: AI_JobAnalyser,
      title: "Job Analyser - AI Resume Matcher",
      technology: "Chrome Extension API · Node.js · Express.js · OpenAI API · LLM · REST API",
      description:
        "A real-time Chrome extension that compares your resume against live job listings on LinkedIn and Naukri. Uses LLMs to highlight skill gaps and offer instant application improvements in under 10 seconds.",
      hostedUrl: "#",
      githubUrl: "https://github.com/Punnamanikumar/job-analyser",
    },
    {
      img: ReactBlog,
      title: "React Blog Application",
      technology: "React.js · Node.js · Express.js · MongoDB · JWT · REST API · Render",
      description:
        "A modern blogging platform built with React, Node.js, and MongoDB. Includes secure JWT session management, roles for admins and authors, dynamic client-side routes, and performance-optimized database indexes.",
      hostedUrl: "https://manikumar-react-blog-complete.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/React-Blog-Complete",
    },
    {
      img: Jozbiz,
      title: "Jozbiz Website",
      technology: "React.js · CSS3 · Responsive Design · Netlify",
      description:
        "A fast, fully responsive business landing page featuring clean React component layouts, custom CSS transitions, and a mobile-first responsive grid structure.",
      hostedUrl: "https://manikumar-jozbiz.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/Jozbiz",
    },
    {
      img: OroPocket,
      title: "Oro Pocket Website",
      technology: "React.js · CSS3 · Flexbox · Grid · Responsive UI",
      description:
        "A pixel-perfect landing page clone for a fintech product, displaying layout techniques with CSS Flexbox/Grid, smooth scroll behaviors, and responsive layouts.",
      hostedUrl: "https://manikumar-oropocket.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/OroPocket",
    },
    {
      img: Klently,
      title: "Klently Website",
      technology: "React.js · CSS Animations · Scroll Effects · Netlify",
      description:
        "A SaaS marketing website built with React.js that focuses on interactive UI cards, scroll-triggered animations, and a sleek user interface.",
      hostedUrl: "https://manikumar-klenty.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/Klenty-Assignment",
    },
    {
      img: Myntra,
      title: "Myntra Application",
      technology: "React.js · Redux · Redux Toolkit · CSS3 · REST API",
      description:
        "An e-commerce storefront replica showing large-scale React architecture. Implements global state management via Redux Toolkit for cart interactions, product listings, and order tracking.",
      hostedUrl: "https://manikumar-myntra-clone.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/Myntra-Clone",
    },
    {
      img: AttendanceImg,
      title: "Online Attendance Management System",
      technology: "PHP · MySQL · HTML · CSS · Session Auth · Role-Based Access Control",
      description:
        "A multi-role academic tool (Admin, Faculty, and Students) built with PHP and MySQL. Handles classroom database queries, session authentication, and automated attendance reports.",
      hostedUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="t-wrapper" id="projects">
      <AnimatedSection direction="up" className="t-heading">
        <span>My Notable </span>
        <span>Projects </span>
        <span style={{ fontSize: "1rem", color: "var(--gray)", fontWeight: 400, display: "block", marginTop: "0.5rem" }}>
          Backend systems, AI pipelines, and full-stack applications built with Node.js, React, and AWS
        </span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </AnimatedSection>

      {/* Slider with navigation arrows */}
      <AnimatedSection direction="none" delay={0.2} className="projects-slider-wrapper">
        <button
          className="projects-nav-btn projects-nav-prev"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous project"
        >
          ‹
        </button>

        <Swiper
          className="swiper1"
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {clients.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <motion.div
                  className="projects"
                  whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                >
                  <motion.div className="project-img-wrapper" whileHover={{ scale: 1.02 }}>
                    <img src={client.img} alt="" />
                  </motion.div>
                  <div className="description">
                    <div className="title">{client.title}</div>
                    {client.description}
                    <span style={{ color: "var(--accent-green)" }} className="techology">
                      <span style={{ color: "var(--orange)" }} className="techology">
                        Technology :
                      </span>{" "}
                      {client.technology}
                    </span>
                    <span className="links" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {client.links ? (
                        client.links.map((link, lIdx) => (
                          <motion.a
                            key={lIdx}
                            whileHover={{ x: 3 }}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="links"
                            style={{ marginRight: "0.5rem" }}
                          >
                            {link.text} ↗
                          </motion.a>
                        ))
                      ) : (
                        <>
                          {client.hostedUrl && client.hostedUrl !== "#" && (
                            <motion.a
                              whileHover={{ x: 5 }}
                              href={client.hostedUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="links"
                            >
                              Live Demo ↗
                            </motion.a>
                          )}
                          {client.githubUrl && client.githubUrl !== "#" && (
                            <motion.a
                              whileHover={{ x: 5 }}
                              href={client.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="links"
                            >
                              GitHub Repository ↗
                            </motion.a>
                          )}
                        </>
                      )}
                    </span>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          className="projects-nav-btn projects-nav-next"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next project"
        >
          ›
        </button>
      </AnimatedSection>
    </div>
  );
};

export default Projects;