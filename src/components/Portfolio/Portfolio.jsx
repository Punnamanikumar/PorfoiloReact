import React, { useContext, useRef } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Form from "../../img/TechStacks/multiform.png";
import Clock from "../../img/TechStacks/clock.png";
import ReactCrud from "../../img/TechStacks/reactapp.png";
import Todojs from "../../img/TechStacks/todojs.png";

import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const swiperRef = useRef(null);

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Mini Projects</span>
      <span>Portfolio</span>

      {/* slider with custom nav buttons outside */}
      <div className="portfolio-slider-wrapper">
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
          <SwiperSlide>
            <img src={Form} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ReactCrud} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Todojs} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Clock} alt="" />
          </SwiperSlide>
        </Swiper>

        <button
          className="portfolio-nav-btn portfolio-nav-next"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
