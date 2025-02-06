import React from "react";
import Navbar from "../pages/Shared/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import ContactMe from "../pages/Home/ContactMe";
import AboutMe from "../pages/Home/AboutMe";
import Education from "../pages/Home/Education";
import Projects from "../pages/Home/Projects";
import Banner from "../pages/Home/Banner";
import Sidebar from "../pages/Shared/Sidebar";
import Skills from "../pages/Home/Skills";
const MainLayout = () => {
  return (
    <div className="bg-blue-900 text-white">
      <div className="container mx-auto">
        <Navbar></Navbar>
<Sidebar></Sidebar>
          <div id="home">
            <Banner></Banner>
          </div>
          <div className="w-11/12 mx-auto min-h-screen">
          <div id="aboutMe">
            <AboutMe></AboutMe>
          </div>
          <div id="skills">
            <Skills></Skills>
          </div>
          <div id="education">
            <Education></Education>
          </div>
          <div id="projects">
            <Projects></Projects>
          </div>
          <div id="contact">
            <ContactMe></ContactMe>
          </div>
        </div>
          </div>
      <div id="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
