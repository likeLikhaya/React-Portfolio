import React from "react";
import data from "./data.json";

import "./Slider.css"; // Make sure to adjust the path to your CSS file

const Slider = () => {
  return (
    <>
      <section className="portfolio--section" id="MyPortfolio">
        <div className="portfolio--container-box">
          <div className="portfolio--container">
            <h2 className="section--heading">Creations</h2>
          </div>
          <div></div>
        </div>
        <div className="portfolio--section--container">
          {data?.slider?.map((item, index) => (
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
              </div>
              <div className="portfolio--section--card--content">
                <div>
                  <h3 className="portfolio--section--title">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
                <p className="text-sm portfolio--link">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.link}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0  0  20  19"
                      fill="none"
                    >
                      <path
                        d="M4.66667  1.66675H18V15.0001M18  1.66675L2  17.6667L18  1.66675Z"
                        stroke="currentColor"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Slider;
