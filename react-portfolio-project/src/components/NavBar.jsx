import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div>
        <div>
          <a href="/" className="text-2xl font-bold flex space-x-3">
            {" "}
            KALIMASHE{" "}
          </a>
        </div>

        {/* Buttons container */}
        <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-end">
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
