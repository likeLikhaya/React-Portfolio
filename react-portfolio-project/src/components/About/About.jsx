import React from "react";
import "./About.css";
import cv from "./cv.pdf";
import profilePic from "../../images/profile-pic.png";

const About = () => {
  return (
    <section className="about-me-section" id="about">
      <div className="about-me-container">
        <h1 className="about-me-heading">About Me</h1>
        <br />
        <div className="about-me-image">
          <img src={profilePic} alt="About Me" />
        </div>
        <div className="about-me-text">
          <p>
            I am a skilled coder who creates innovative products using
            caffeine-powered code spells. <br /> <br />
            During the day, I work in the tech industry, transforming computer
            code into beautiful, functional systems. When I'm not working, I
            love to watch K-dramas and The Office for a good laugh. <br />
            <br />
            But sometimes I need a break from the digital world, and that's when
            I head to the beach. The soothing sound of the waves and the fresh
            sea air helps me de-stress and recharge. It's a peaceful escape from
            the complexity of coding. <br />
            <br />
            Throughout all of this, my friends and family kept me grounded. They
            support me and keep me sane in the ever-changing world of tech.
          </p>
          <a
            href={cv}
            download="Likhaya Kalimashe's CV.pdf"
            className="download-button"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
