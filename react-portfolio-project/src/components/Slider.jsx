import React, { useState } from "react";
import Projects from "./Projects";
import { creations } from "./Projects";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const creations = [];
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
