import React from "react";
import "./Skills.css";
import html from "../../images/html-icon.svg";
import css from "../../images/css-icon.svg";
import js from "../../images/js-icon.svg";
import react from "../../images/icons8-react.svg";
import nodejs from "../../images/icons8-nodejs-32.svg";

const Skills = () => {
  return (
    <section className="Skills">
      <h1>Talent Bank</h1>
      <div className="container">
        <div className="skill-box">
          <div className="skills-title">
            <div className="img frontend">
              <img src={html} alt="HTML Icon" className="skill-icon" />
            </div>
            <h3>HTML 5</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skills-title">
            <div className="img frontend">
              <img src={css} alt="CSS Icon" className="skill-icon" />
            </div>
            <h3>CSS</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skills-title">
            <div className="img frontend">
              <img src={js} alt="JavaScript Icon" className="skill-icon" />
            </div>
            <h3>JavaScript</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skills-title">
            <div className="img frontend">
              <img src={react} alt="React Icon" className="skill-icon" />
            </div>
            <h3>React</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skills-title">
            <div className="img backend">
              <img src={nodejs} alt="Node.js Icon" className="skill-icon" />
            </div>
            <h3>Node.js</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
