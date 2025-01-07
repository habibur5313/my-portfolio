import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Home;
