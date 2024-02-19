import React from "react";

const githubIcon = "https://example.com/path/to/github.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer links div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Link</p>
            </a>
            <a href="/employer">
              <p>Link</p>
            </a>
            <a href="/employer">
              <p>Link</p>
            </a>
          </div>
          <div className="sb_footer links div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Link</p>
            </a>
            <a href="/employer">
              <p>Link</p>
            </a>
            <a href="/employer">
              <p>Link</p>
            </a>
          </div>
          <div className="sb_footer links div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Link</p>
            </a>
            <a href="/employer">
              <p>Link</p>
            </a>
            <a href="/employer">
              <p>Link</p>
            </a>
            <a href="/employer">
              <p>Link</p>
            </a>
          </div>
          <div className="sb_footer links div">
            <h4>For Business</h4>
            <div className="socialmedia">
              <p>
                <img src="https://icons8.com/icon/16318/github" alt="" />
              </p>
              <p>
                <img src={github} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
