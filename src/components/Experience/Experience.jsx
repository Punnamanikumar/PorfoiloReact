import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (<>
    <div className="e-heading" id='experience'>
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects and </span>
      <span>Work Experience</span>
    </div>
    <div className="experience" >
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>{process.env.REACT_APP_EXPERIENCE_YEAR}</div>
        <span style={{ color: darkMode ? 'white' : '' }}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>{process.env.REACT_APP_PROJECTS_COMPLETED}</div>
        <span style={{ color: darkMode ? 'white' : '' }}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>{process.env.REACT_APP_COMPANIES_WORKED}</div>
        <span style={{ color: darkMode ? 'white' : '' }}>companies </span>
        <span>Work</span>
      </div>
      <div className="blur" style={{ background: "rgb(238 210 255)", display: darkMode ? 'none' : '' }}></div>
      <div className="blur5" style={{ display: darkMode ? 'none' : '' }}></div>
    </div>
  </>

  );
};

export default Experience;