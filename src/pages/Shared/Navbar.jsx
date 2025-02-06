import { FaCircleArrowUp } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import React from "react";
import { TiHome } from "react-icons/ti";
import { FaCode, FaUser } from "react-icons/fa6";
import { MdCastForEducation, MdOutlineConnectWithoutContact } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const styles = {
    fixedIcon: {
      position: "fixed",
      bottom: "20px",
      right: "40px",
      width: "50px",
      height: "50px",
      cursor: "pointer",
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="mb-20 lg:mb-10 pt-2">
      <div className="flex justify-between items-center container mx-auto fixed top-0 opacity-90 z-50 lg:sticky bg-white lg:bg-blue-900 text-black lg:text-white px-0 sm:px-5 md:px-10 rounded-b-xl">
        <h1 className="text-2xl font-semibold">
          Habibur<span className="ml-1">Rahman</span> <br />
          <span className="text-xl font-medium">portfolio</span>
        </h1>
        <div className="flex gap-1 sm:gap-3">
          <button className="sm:text-xl sm:font-medium py-2 px-3 border rounded-xl flex gap-1">
            <span className="hidden sm:block">Download</span>Resume
          </button>
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="text-5xl font-semibold">
              <IoMenu />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 text-black rounded-box w-52 p-2 shadow flex flex-col space-y-3 z-50"
            >
<a href="#home" className="text-xl font-medium flex items-center text-purple-600 gap-1">
        <TiHome />Home
        </a>
      <a href="#aboutMe" className="text-xl font-medium flex items-center text-purple-600 gap-1">
        <FaUser />About Me
        </a>
        <a href="#skills" className="text-xl font-medium flex items-center text-purple-600 gap-1">
        <SiHyperskill />Skills
        </a>
        <a href="#education" className="text-xl font-medium flex items-center text-purple-600 gap-1">
        <MdCastForEducation />Education
        </a>
        <a href="#projects" className="text-xl font-medium flex items-center text-purple-600 gap-1"> <FaCode />Project

        </a>
        <a href="#contact" className="text-xl font-medium flex items-center text-purple-600 gap-1">
        <MdOutlineConnectWithoutContact />Contact
        </a>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="fixed md:bottom-10 z-50 right-0 bottom-0 w-[50px] h-[50px]"
        onClick={scrollToTop}
      >
        <FaCircleArrowUp className="text-4xl font-semibold text-white" />
      </div>
    </div>
  );
};

export default Navbar;
