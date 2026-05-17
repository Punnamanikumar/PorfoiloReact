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

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <AnimatedSection direction="up" className="portfolio-heading">
        <span style={{ color: darkMode ? "white" : "" }}>Mini Projects</span>
        <span>Portfolio</span>
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
          {[Form, ReactCrud, Todojs, Clock].map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ width: "100%", height: "100%", borderRadius: "19px", overflow: "hidden" }}
              >
                <img src={imgSrc} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
