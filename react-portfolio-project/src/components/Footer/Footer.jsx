import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
  <div className="footer-container">
    <div className="about group">
      <h2>Kalimashe.</h2>
      
    </div>
    <div className="hr"></div>
    <div className="info group">
      
      <ul>
        <li><a href="#Welcome">Welcome</a></li>
        <li><a href="#About">Meet Likhaya</a></li>
        <li><a href="#Skills">Talent Bank</a></li>
        <li><a href="#Slider">Creations</a></li>
      </ul>
    </div>
    <div className="hr"></div>
    <div className="follow group">
      
      <ul>
      <li><a href="https://www.linkedin.com/in/likhaya-kalimashe-b86b69200/" target="_blank"><img src="src/images/linkedin.png" alt="LinkedIn"></img></a></li>
  <li><a href="https://github.com/likeLikhaya" target="_blank"><img src="src/images/github.png" alt="GitHub"></img></a></li>
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
