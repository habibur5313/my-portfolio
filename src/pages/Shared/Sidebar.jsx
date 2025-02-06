import React from "react";
import { TiHome } from "react-icons/ti";
import { FaCode, FaUser } from "react-icons/fa6";
import { MdCastForEducation, MdOutlineConnectWithoutContact } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
const Sidebar = () => {
  return (
    <div className="fixed hidden z-50 right-0 bottom-32 lg:flex flex-col justify-center items-center">
      <a href="#home">
      <div
        className="tooltip tooltip-warning px-4 py-3 m-2 rounded-xl tooltip-left bg-white text-purple-600 md:text-xl md:font-medium"
        data-tip="Home"
      >
        
        <TiHome />
      </div>
        </a>
      <a href="#aboutMe">
      <div
        className="tooltip tooltip-warning px-4 py-3 m-2 rounded-xl tooltip-left bg-white text-purple-600 md:text-xl md:font-medium"
        data-tip="About Me"
      >
        
        <FaUser />
      </div>
        </a>
        <a href="#skills">
      <div
        className="tooltip tooltip-warning px-4 py-3 m-2 rounded-xl tooltip-left bg-white text-purple-600 md:text-xl md:font-medium"
        data-tip="Skills"
      >
       
        <SiHyperskill />
      </div>
        </a>
        <a href="#education">
      <div
        className="tooltip tooltip-warning px-4 py-3 m-2 rounded-xl tooltip-left bg-white text-purple-600 md:text-xl md:font-medium"
        data-tip="Education"
      >
        
        <MdCastForEducation />
      </div>
        </a>
        <a href="#projects">
      <div
        className="tooltip tooltip-warning px-4 py-3 m-2 rounded-xl tooltip-left bg-white text-purple-600 md:text-xl md:font-medium"
        data-tip="Projects"
      >
    
        <FaCode />
      </div>
        </a>
        <a href="#contact">
      <div
        className="tooltip tooltip-warning px-4 py-3 m-2 rounded-xl tooltip-left bg-white text-purple-600 md:text-xl md:font-medium"
        data-tip="Contact"
      >
       
        <MdOutlineConnectWithoutContact />
      </div>
        </a>
    </div>
  );
};

export default Sidebar;
