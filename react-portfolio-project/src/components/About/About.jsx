import React from "react";

const About = () => {
  return (
    <section>
      <div className="content-section" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div className="about-img">
          <img src=""/>
        </div>
        <p>
          I am a skilled coder who creates innovative products using
          caffeine-powered code spells. During the day, I work in the tech
          industry, transforming computer code into beautiful, functional
          systems. When I'm not working, I love to watch K-dramas and The Office
          for a good laugh.
        </p>
        <br />
        <p>
          But sometimes I need a break from the digital world, and that's when I
          head to the beach. The soothing sound of the waves and the fresh sea
          air helps me de-stress and recharge. It's a peaceful escape from the
          complexity of coding.
        </p>
        <br />
        <p>
          Throughout all of this, my friends and family keep me grounded. They
          support me and keep me sane in the ever-changing world of tech.
        </p>
        <a href="cv/CV of Likhaya Kalimashe.pdf" download="Likhaya Kalimashe's CV.pdf"class="btn">Download CV <i class="fas fa-download"></i></a>
      </div>
    </section>
  );
};

export default About;
