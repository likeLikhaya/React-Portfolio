import React, { useState } from "react";
import Projects from "./Projects";
import { Projects } from "./Projects";

const ProjectsDesign = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const creations = [];
  return (
    <div className="slider">
      <div className="creations">
        <div
          className="layout"
          style={{ transform: "translate: (-${activeIndex * 100})" }}
        >
          {" "}
          {creations.map((creations) => {
            return <Projects slider={creations} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsDesign;
