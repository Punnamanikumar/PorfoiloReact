import React, { useContext } from "react";
import "./About.css";
import { themeContext } from "../../Context";
import mongo from '../../img/TechStacks/mongodb.jpg'
import express from '../../img/TechStacks/express.png'
import react from '../../img/TechStacks/react.png'
import node from '../../img/TechStacks/nodejs.png'
import html from '../../img/TechStacks/html5 logo.png'
import css from '../../img/TechStacks/css-logo.png'
import js from '../../img/TechStacks/js.png'
import bootstarp from '../../img/TechStacks/bootstrap logo.png'
import github from '../../img/TechStacks/github.png'
import sql from '../../img/TechStacks/sql.png'



const About = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="about">
      <div className="ab0">
        <div className="ab1"  style={{ color: darkMode ? "#5EAAA8" : "" }}>About Me</div>
        <div className="hr2"></div>
        <div className="ab2" style={{ color: darkMode ? "white" : "" }}>
          {process.env.REACT_APP_ABOUT_DESC}
        </div>
        <div className="ab3" style={{ color: darkMode ? "white" : "" }}>
          I enjoy turning complex problems into simple, beautiful and intuitive
          designs. When I'm not pushing pixels, you'll find me playing Games,
          watching movies or chilling out with friends .
        </div>
        <div className="about-div" >
          <p style={{ color: darkMode ? "#5EAAA8" : "" }}>Languages/Library/Technology</p>
          <div className="icon_flex">
            <img src={mongo} alt="mongobd logo"/>
            <img src={express} alt="express logo"/>
            <img src={react} alt="react logo" />
            <img src={node} alt="nodejs logo" />
            <img src={html} alt="html5 logo"/>
            <img src= {css} alt="css logo" />
            <img src={js} alt="js logo" />
            <img src={bootstarp} alt="bootstrap logo" />
            <img src={github} alt="github logo" />
            <img src={sql} alt="sql logo" />
          </div>
        </div>
        <div
    className="blur s-blur2"
    style={{ background: "var(--purple)" }}></div>
        <br />
      </div>
    </div>
  );
};

export default About;