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
              <img src="src/images/html-icon.svg" alt="HTML5 Icon" />
              HTML5
            </li>
            <li>
              <img src="src/images/css-icon.svg" /> CSS3
            </li>
            <li>
              <img src="src/images/js-icon.svg" /> JavaScript
            </li>
            <li>
              <img src="src/images/icons8-react.svg" /> React
            </li>
            {/* Add more frontend skills as needed */}
          </ul>
        </div>
        <div className="backend-skills">
          <h2>Backend Skills</h2>
          <ul>
            <li>
              <img src="src/images/icons8-react.svg" /> Database Management
            </li>
            <li>
              <img src="src/images/icons8-react.svg" /> Node.js
            </li>
            {/* Add more backend skills as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
