import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <a href="#" className="logo">
            KALIMASHE
          </a>
          <div className="navigation">
            <div className="navitems">
              <div className="navclosebtn"></div>
              <a href="#About">Meet Likhaya</a>
              <a href="#Skills">Talent Bank</a>
              <a href="#Carousel">Creations</a>
              <a href="#Contact">Let's Connect</a>
            </div>
          </div>
          <div className="navmenubtn"></div>
        </div>
      </header>

      <section>
        <span className="hello-there-text">Hello There !</span>

        <p className="welcomeIntro">
          Welcome to my Digital Wonderland! 🚀
          <br />
          This is where pixels come alive, code speaks, and innovation reigns
          supreme! Get ready to embark on an adventure where every project is a
          story waiting to be told - a tale of precision, problem-solving
          skills, and creativity. Here, The Office isn't just a show; it's a
          wellspring of inspiration. Are you ready to explore the extraordinary?
          Let the digital adventure begin!
        </p>
      </section>
    </>
  );
};

export default Welcome;
