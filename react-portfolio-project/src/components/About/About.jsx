import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="desktop">
      <div className="div">
        <img
          className="profilepic"
          alt="Profilepic"
          src="src/images/profile-pic.png"
        />
        <div className="text-wrapper">Meet Likhaya!</div>
        <p className="i-am-a-skilled-coder">
          I am a skilled coder who creates innovative products using
          caffeine-powered code spells. During the day, I work in the tech
          industry, transforming computer code into beautiful, functional
          systems. When I'm not working, I love to watch K-dramas and The Office
          for a good laugh.
          <br />
          <br />
          But sometimes I need a break from the digital world, and that's when I
          head to the beach. The soothing sound of the waves and the fresh sea
          air helps me de-stress and recharge. It's a peaceful escape from the
          complexity of coding.
          <br />
          <br />
          Throughout all of this, my friends and family kept me grounded. They
          support me and keep me sane in the ever-changing world of tech.
        </p>
      </div>
    </div>
  );
};

export default About;
