import React from "react";
import "./About.css"

const About = () => {
  return (
    
    <><div className="heading">
      <h1>Meet Likhaya</h1>
     
    </div><div className="container">
      <section className="about">
        <div className="about-image">
          <img src="src/images/profile-pic.png" alt="" />
          </div>
          <div className="about-content">
          <p>
          I am a skilled coder who creates innovative products using
          caffeine-powered code spells. During the day, I work in the tech
          industry, transforming computer code into beautiful, functional
          systems. When I'm not working, I love to watch K-dramas and The Office
          for a good laugh.
        
          But sometimes I need a break from the digital world, and that's when I
          head to the beach. The soothing sound of the waves and the fresh sea
          air helps me de-stress and recharge. It's a peaceful escape from the
          complexity of coding.
        
          Throughout all of this, my friends and family keep me grounded. They
          support me and keep me sane in the ever-changing world of tech.
        </p>
        <a href="" className="download-cv"> Download CV</a>
          </div>
          </section>
          </div>
          </>
     
   
  );
};

export default About;
