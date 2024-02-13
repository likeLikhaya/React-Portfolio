import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <>
      <header>
        <div class="navbar">
          <a href="#" class="logo">
            KALIMASHE
          </a>
          <div class="navigation">
            <div class="navitems">
              <div class="navclosebtn"></div>
              <a href="#About">Meet Likhaya</a>
              <a href="#Skills">Talent Bank</a>
              <a href="#Carousel">Creations</a>
              <a href="#Contact">Let's Connect</a>
            </div>
          </div>
          <div class="navmenubtn"></div>
        </div>
      </header>

      <section>
        <div>
          <span className="hello-there-text">
            <h2 className="welcome">Hello There !</h2>
          </span>
          <div className="welcomeIntro">
            <p>Welcome to my Digital Wonderland! 🚀</p>
            <p>
              This is where pixels come alive, code speaks, and innovation
              reigns supreme! Get ready to embark on an adventure where every
              project is a story waiting to be told - a tale of precision,
              problem-solving skills, and creativity. Here, The Office isn't
              just a show; it's a wellspring of inspiration. Are you ready to
              explore the extraordinary? Let the digital adventure begin!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
