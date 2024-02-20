import React from "react";
import "./Skills.css";

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
            </li>
            <li>
              <img src="src/images/css-icon.svg" />
            </li>
            <li>
              <img src="src/images/js-icon.svg" />
            </li>
            <li>
              <img src="src/images/icons8-react.svg" />
            </li>
            {/* Add more frontend skills as needed */}
          </ul>
        </div>
        <hr />
        <div className="backend-skills">
          <h2>Backend Skills</h2>
          <ul>
            <li>
              <img src="src/images/icons8-react.svg" />
            </li>
            <li>
              <img src="src/images/icons8-nodejs-64.svg" />
            </li>
            {/* Add more backend skills as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
