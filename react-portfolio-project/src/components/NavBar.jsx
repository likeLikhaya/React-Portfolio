import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div>
        <div>
          <a href="/" className="">
            {" "}
            KALIMASHE{" "}
          </a>
        </div>

        {/* Buttons container */}
        <div className="menubar">
          {/* Add more buttons as needed */}
          <button>Meet Likhaya</button>
          <button>Talent Bank</button>
          <button>Creations</button>
          <button>Let's Connect</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
