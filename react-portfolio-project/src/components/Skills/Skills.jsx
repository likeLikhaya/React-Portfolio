import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="page-container">
      <div className="skills-page">
        <div className="frontend-skills">
          <h2>Frontend Skills</h2>
          <ul>
            <li>
              <i className="fab fa-html5"></i> HTML5
            </li>
            <li>
              <i className="fab fa-css3-alt"></i> CSS3
            </li>
            <li>
              <i className="fab fa-js"></i> JavaScript
            </li>
            {/* Add more frontend skills as needed */}
          </ul>
        </div>
        <div className="backend-skills">
          <h2>Backend Skills</h2>
          <ul>
            <li>
              <i className="fas fa-database"></i> Database Management
            </li>
            <li>
              <i className="fab fa-node-js"></i> Node.js
            </li>
            {/* Add more backend skills as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
