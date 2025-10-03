import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Experience from "./Experience";
import About from "./About";

import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
