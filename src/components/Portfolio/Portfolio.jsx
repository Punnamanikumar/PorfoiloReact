import React, { useContext, useRef } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Form from "../../img/TechStacks/multiform.jpg";
import Clock from "../../img/TechStacks/clock.jpg";
import ReactCrud from "../../img/TechStacks/reactapp.png";
import Todojs from "../../img/TechStacks/todojs.png";

import { themeContext } from "../../Context";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { motion } from "framer-motion";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const swiperRef = useRef(null);

  const miniProjects = [
    {
      title: "Registration Form & Tables",
      img: Form,
      github: "https://github.com/Punnamanikumar/HTML-Form-and-Tables-A-2",
      live: "https://punnamanikumar.github.io/HTML-Form-and-Tables-A-2/"
    },
    {
      title: "React CRUD Application",
      img: ReactCrud,
      github: "https://github.com/Punnamanikumar/REACT-Assignment-5",
      live: "#"
    },
    {
      title: "JavaScript Todo List",
      img: Todojs,
      github: "https://github.com/Punnamanikumar/TodoList-JS",
      live: "https://punnamanikumar.github.io/TodoList-JS/"
    },
    {
      title: "Digital Clock UI",
      img: Clock,
      github: "https://github.com/Punnamanikumar/DigitalClock-UI",
      live: "https://punnamanikumar.github.io/DigitalClock-UI/"
    }
  ];

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <AnimatedSection direction="up" className="portfolio-heading">
        <span style={{ color: darkMode ? "white" : "" }}>Mini Projects</span>
        <span> Portfolio</span>
      </AnimatedSection>

      {/* slider with custom nav buttons outside */}
      <AnimatedSection direction="none" delay={0.2} className="portfolio-slider-wrapper">
        <button
          className="portfolio-nav-btn portfolio-nav-prev"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="portfolio-slider"
          breakpoints={{
            481: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {miniProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="portfolio-card"
                whileHover="hover"
                initial="initial"
                variants={{
                  initial: { scale: 1, y: 0, rotate: 0 },
                  hover: { scale: 1.05, y: -8, rotate: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                }}
              >
                <img src={project.img} alt={project.title} />
                <motion.div
                  className="portfolio-overlay"
                  variants={{
                    initial: { opacity: 0, backdropFilter: "blur(0px)", backgroundColor: "rgba(10, 10, 15, 0)" },
                    hover: { opacity: 1, backdropFilter: "blur(12px)", backgroundColor: "rgba(10, 10, 15, 0.75)" }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="portfolio-title">{project.title}</h3>
                  <div className="portfolio-links">
                    {project.live && project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="portfolio-btn">
                        Demo ↗
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer" className="portfolio-btn github-btn">
                      Repo ↗
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="portfolio-nav-btn portfolio-nav-next"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
        >
          ›
        </button>
      </AnimatedSection>
    </div>
  );
};

export default Portfolio;
