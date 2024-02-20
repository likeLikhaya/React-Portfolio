import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
  <div className="footer-container">
    <div className="about group">
      <h2>Kalimashe.</h2>
      <p>Junior Sofware Developer</p>
    </div>
    <div className="hr"></div>
    <div className="info group">
      <h3>More</h3>
      <ul>
        <li><a href="#Welcome">Welcome</a></li>
        <li><a href="#About">Meet Likhaya</a></li>
        <li><a href="#Skills">Talent Bank</a></li>
        <li><a href="#Slider">Creations</a></li>
      </ul>
    </div>
    <div className="hr"></div>
    <div className="follow group">
      <h3>Check Out</h3>
      <ul>
        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
        <li><a href="#" ><img src="src/images/github.png"></img></a></li>
      </ul>
    </div>
  </div>
  <div className="footer-copyright group">
    <p>© 2024 by Likhaya Kalimashe. All rights reserved.</p>
  </div>
</footer>

  );
};

export default Footer;
