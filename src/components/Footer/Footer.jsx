import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>punnamanikumar@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/Punnamanikumar" target="_blank" rel="noreferrer">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://linkedin.com/in/punnamanikumar" target="_blank" rel="noreferrer">
            <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Insta color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
