import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="container">
      <div className="skill-box">
        <div className="skills-title">
          <div className="img">
            <img src="src/images/html-icon.svg" alt="HTML Icon" className="skill-icon" />
          </div>
          <h3>HTML 5</h3>
        </div>
        <p>add some text here maybe</p>
      </div>
      <div className="skill-box">
        <div className="skills-title">
          <div className="img">
            <img src="src/images/css-icon.svg" alt="CSS Icon" className="skill-icon" />
          </div>
          <h3>CSS</h3>
        </div>
        <p>add some text here maybe</p>
      </div>
      <div className="skill-box">
        <div className="skills-title">
          <div className="img">
            <img src="src/images/js-icon.svg" alt="JavaScript Icon" className="skill-icon" />
          </div>
          <h3>JavaScript</h3>
        </div>
        <p>add some text here maybe</p>
      </div>
      <div className="skill-box">
        <div className="skills-title">
          <div className="img">
            <img src="src/images/icons8-react.svg" alt="React Icon" className="skill-icon" />
          </div>
          <h3>React</h3>
        </div>
        <p>add some text here maybe</p>
      </div>
      <div className="skill-box">
        <div className="skills-title">
          <div className="img">
            <img src="src/images/icons8-nodejs-64.svg" alt="Node.js Icon" className="skill-icon" />
          </div>
          <h3>Node.js</h3>
        </div>
        <p>add some text here maybe</p>
      </div>
    </div>
  );
};

export default Skills;
