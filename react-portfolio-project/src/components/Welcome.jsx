import React from "react";

const Welcome = () => {
  return (
    <section>
      <header>
        <div className="nav-bar">
          <a href="#" className="logo">
            Kalimashe
          </a>
          <div className="navigation">
            <div className="nav-items">
              <div className="nav-close-btn"></div>
              <a className="active" href="#About">
                Meet Likhaya
              </a>
              <a href="#Skills">Talent Bank</a>
              <a href="#Projects">Creations</a>
              <a href="#Contact">Let's Connect</a>
            </div>
          </div>
        </div>
      </header>
      <div>
        <span className="hello-there-text">
          <p>Hello There !</p>
        </span>
        <div className="welcomeIntro">
          <p>Welcome to my Digital Wonderland! 🚀</p>
          <p>
            This is where pixels come alive, code speaks, and innovation reigns
            supreme! Get ready to embark on an adventure where every project is
            a story waiting to be told - a tale of precision, problem-solving
            skills, and creativity. Here, The Office isn't just a show; it's a
            wellspring of inspiration. Are you ready to explore the
            extraordinary? Let the digital adventure begin!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
