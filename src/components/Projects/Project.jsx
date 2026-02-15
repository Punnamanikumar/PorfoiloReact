import React from "react";
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

const Projects = () => {
  const clients = [
    {
      img: ReactBlog,
      title: 'React Blog Application',
      technology: "React JS, Node Js",
      description: 'The React blog is an application designed to showcase blog posts based on various categories. The app allows users to browse through different categories and access blog posts related to their interests. Users can easily navigate through the app, view the latest blog posts, and filter them based on their preferences.',
      hostedUrl: "https://manikumar-react-blog-complete.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/React-Blog-Complete",
    },
    {
      img: Jozbiz,
      title: 'Jozbiz Website',
      technology: "React JS",
      description: 'This React webiste was designed to showcase the Jozbiz Official WebPage with a Beautiful Design. This design of the website is visually appealing, with a modern layout that makes it easy to navigate and find the information you need.',
      hostedUrl: "https://manikumar-jozbiz.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/Jozbiz",   
    },
    {
      img: OroPocket,
      title: 'Oro Pocket Website',
      technology: "React JS",
      description: 'This React webiste was designed to showcase the OroPocket Official WebPage. This design of the website is visually appealing, with a modern layout that makes it easy to navigate and find the information you need.',
      hostedUrl: "https://manikumar-oropocket.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/OroPocket",   
     },
    {
      img: Klently,
      title: 'Klently Webiste',
      technology: "React JS",
      description: 'This React webiste was designed to showcase the Klently Official WebPage with a Beautiful Design. This design of the website is visually appealing, with a modern layout that makes it easy to navigate and find the information you need.',
      hostedUrl: "https://manikumar-klenty.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/Klenty-Assignment", 
    },
    {
      img: Myntra,
      title: 'Myntra Application',
      technology: "React JS, Redux",
      description: 'The Myntra website is an e-commerce platform Contains different categories such as Men, Women, Kids, and more. The website has a user-friendly interface with various sections, making it easy for users to navigate and find what they are looking for.',
      hostedUrl: "https://manikumar-myntra-clone.netlify.app/",
      githubUrl: "https://github.com/Punnamanikumar/Myntra-Clone", 
    },
  ];

  return (
    <div className="t-wrapper" id="projects">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
      className="swiper1"
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="projects">
                <img src={client.img} alt="" />
                <div className="description">
                  <div className="title">{client.title}</div>
                  {client.description}
                  <span style={{color:"green"}} className="techology"><span style={{color:"red"}}  className="techology">Techology :</span> {client.technology}</span>
                  <span className="links"><a href={client.hostedUrl} target="_blank" rel="noreferrer" className="links">Hosted URl</a><a href={client.githubUrl} target="_blank" rel="noreferrer" className="links">GitHub Repository URL</a></span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Projects;