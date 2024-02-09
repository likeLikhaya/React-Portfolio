import React, { useState } from "react";
import Projects from "./Projects";
import { Projects } from "./Projects";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const creations = [title, description, image, icon];
  return (
    <div className="slider">
      <div className="creations">
        <div
          className="layout"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
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

export default Slider;
