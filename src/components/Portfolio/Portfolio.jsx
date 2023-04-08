import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import Form from "../../img/TechStacks/multiform.png";
import Clock from "../../img/TechStacks/clock.png";
import ReactCrud from "../../img/TechStacks/reactapp.png";
import Todojs from "../../img/TechStacks/todojs.png";



import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
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
    </div>
  );
};

export default Portfolio;
