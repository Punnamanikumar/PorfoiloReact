import React, { useRef } from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import ReactBlog from "../../img/TechStacks/blog.png";
import Jozbiz from "../../img/TechStacks/jozbiz.png";
import OroPocket from "../../img/TechStacks/oropocket.png";
import Klently from "../../img/TechStacks/klenty.png";
import Myntra from "../../img/TechStacks/myntra.png";
import AI_Compliance_Validator from "../../img/TechStacks/AI_Compliance_Validator.jpg"
import AI_JobAnalyser from "../../img/TechStacks/ai_job_analyser.jpeg"
const Projects = () => {
  const swiperRef = useRef(null);
  const clients = [
    {
      img: AI_Compliance_Validator,
      title: "Compliance Validator Agent",
      technology: "Node.js, LangChain, CrewAI, RAG, Vector DB",
      description:
        "AI-powered compliance validation system using LangChain and RAG architecture. Features document ingestion, semantic search, and LLM-based reasoning for automated policy validation with Agentic AI workflows.",
      hostedUrl: "#",
      githubUrl: "https://github.com/Punnamanikumar/Compliance-Validator-Agent-Challenge",
    },
    {
      img: AI_JobAnalyser,
      title: "Job Analyser - AI Resume Matcher",
      technology: "Chrome Extension, Node.js, AI/LLM, Express.js",
      description:
        "AI-powered Chrome extension that analyzes resumes against job postings in real-time on LinkedIn and Naukri. Features intelligent skill matching, gap analysis, experience alignment, and personalized AI recommendations for job seekers.",
      hostedUrl: "#",
      githubUrl: "https://github.com/Punnamanikumar/job-analyser",
    },
    {
      img: ReactBlog,
      title: "React Blog Application",
      technology: "React.js, Node.js, Express.js, MongoDB",
      description:
        "Full-stack blog application with dynamic routing, secure REST APIs, user authentication, and MongoDB storage. Supports category-based browsing and responsive design across devices.",
      hostedUrl: "https://manikumar-react-blog-complete.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/React-Blog-Complete",
    },
    {
      img: Jozbiz,
      title: "Jozbiz Website",
      technology: "React.js",
      description:
        "Modern business website showcasing the Jozbiz official page with visually appealing design, smooth animations, and responsive layout for seamless navigation.",
      hostedUrl: "https://manikumar-jozbiz.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/Jozbiz",
    },
    {
      img: OroPocket,
      title: "Oro Pocket Website",
      technology: "React.js",
      description:
        "Landing page clone for OroPocket with modern UI design, responsive layout, and interactive elements for a fintech product showcase.",
      hostedUrl: "https://manikumar-oropocket.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/OroPocket",
    },
    {
      img: Klently,
      title: "Klently Website",
      technology: "React.js",
      description:
        "SaaS product landing page built with React featuring clean design, smooth scrolling, and interactive components for product feature showcase.",
      hostedUrl: "https://manikumar-klenty.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/Klenty-Assignment",
    },
    {
      img: Myntra,
      title: "Myntra Application",
      technology: "React.js, Redux",
      description:
        "E-commerce platform clone with product categories (Men, Women, Kids), cart management with Redux, and user-friendly interface for a seamless shopping experience.",
      hostedUrl: "https://manikumar-myntra-clone.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/Myntra-Clone",
    },
    {
      img: ReactBlog,
      title: "Online Attendance Management System",
      technology: "PHP, MySQL, HTML, CSS",
      description:
        "Academic web application with role-based login (Admin/Faculty/Student), attendance tracking, report generation, and secured access control for educational institutions.",
      hostedUrl: "#",
      githubUrl: "https://github.com/Punnamanikumar",
    },
  ];

  return (
    <div className="t-wrapper" id="projects">
      <div className="t-heading">
        <span>My Notable </span>
        <span>Projects </span>
        <span style={{ fontSize: "1rem", color: "var(--gray)", fontWeight: 400 }}>
          Showcasing full-stack and AI-powered applications
        </span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* Slider with navigation arrows */}
      <div className="projects-slider-wrapper">
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
                <div className="projects">
                  <img src={client.img} alt="" />
                  <div className="description">
                    <div className="title">{client.title}</div>
                    {client.description}
                    <span style={{ color: "green" }} className="techology">
                      <span style={{ color: "red" }} className="techology">
                        Technology :
                      </span>{" "}
                      {client.technology}
                    </span>
                    <span className="links">
                      {client.hostedUrl !== "#" && (
                        <a
                          href={client.hostedUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="links"
                        >
                          Live Demo
                        </a>
                      )}
                      <a
                        href={client.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="links"
                      >
                        GitHub Repository
                      </a>
                    </span>
                  </div>
                </div>
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
      </div>
    </div>
  );
};

export default Projects;