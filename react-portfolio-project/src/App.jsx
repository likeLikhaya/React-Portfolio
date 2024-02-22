import React from "react";
import "./App.css";

//simport About from "./components/About/About";
import Welcome from "./components/Welcome/Welcome";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <>
      <Welcome />

      <Skills />
      <Slider />
      <Contact />
      <Footer />
      {/*  <About />*/}
    </>
  );
}

export default App;
