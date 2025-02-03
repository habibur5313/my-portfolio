import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TiHome } from "react-icons/ti";
import { FaCode, FaUser } from "react-icons/fa6";
import { MdCastForEducation, MdOutlineConnectWithoutContact } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
const Sidebar = () => {
  return (
    <div className="fixed z-50 right-0 bottom-10 flex flex-col justify-center items-center">
      <div
        className="tooltip tooltip-warning px-4 py-3 m-2 rounded-xl tooltip-left bg-yellow-500 text-white"
        data-tip="Home"
      >
        <a href="#home">
        <TiHome />
        </a>
      </div>
      <div
        className="tooltip tooltip-warning px-4 py-3 m-2 rounded-xl tooltip-left bg-yellow-500 text-white"
        data-tip="About Me"
      >
        <a href="#aboutMe">
        <FaUser />
        </a>
      </div>
      <div
        className="tooltip tooltip-warning px-4 py-3 m-2 rounded-xl tooltip-left bg-yellow-500 text-white"
        data-tip="Skills"
      >
        <a href="#skills">
        <SiHyperskill />
        </a>
      </div>
      <div
        className="tooltip tooltip-warning px-4 py-3 m-2 rounded-xl tooltip-left bg-yellow-500 text-white"
        data-tip="Education"
      >
        <a href="#education">
        <MdCastForEducation />
        </a>
      </div>

      <div
        className="tooltip tooltip-warning px-4 py-3 m-2 rounded-xl tooltip-left bg-yellow-500 text-white"
        data-tip="Projects"
      >
        <a href="#projects">
        <FaCode />
        </a>
      </div>
      <div
        className="tooltip tooltip-warning px-4 py-3 m-2 rounded-xl tooltip-left bg-yellow-500 text-white"
        data-tip="Contact"
      >
        <a href="#contact">
        <MdOutlineConnectWithoutContact />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
