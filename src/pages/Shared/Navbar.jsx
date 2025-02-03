import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

const links = <>
<li><NavLink to={'/'}>Home</NavLink></li>
<li><NavLink to='/aboutMe'>About Me</NavLink></li>
<li><NavLink to={'/skills'}>Skills</NavLink></li>
<li><NavLink to={'/education'}>Education</NavLink></li>
<li><NavLink to={'/projects'}>Projects</NavLink></li>
<li><NavLink to={'/contactMe'}>Contact Me</NavLink></li>
</>

const styles = { fixedIcon: { position: 'fixed', bottom: '20px', right: '20px', width: '50px', height: '50px', cursor: 'pointer' }}

 const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' });}
  return (
    <div className="navbar bg-base-100 rounded-xl">
      <div id="navbar" className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl font-medium text-gray-500"
          >
            {/* {links} */}
          </ul>
        </div>
       <div>
       <h1 className="text-xl sm:text-2xl sm:font-semibold md:text-3xl md:font-bold text-black font-medium">H.Rahman</h1>
       <p className="text-xl sm:font-medium text-black">portfolio</p>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-medium text-gray-500">
{/* {links} */}
        </ul>
      </div>
      <div className="navbar-end">
       <Link to={'https://drive.google.com/file/d/1-g0Ny3d_kugNGTfuHi-BpVn5krW4XJBg/view?usp=drive_link'}> <button className="btn">Download Resume</button></Link>
      </div>
    
      <div style={styles.fixedIcon} onClick={scrollToTop}> <FaCircleArrowUp className="text-4xl font-semibold text-white" />
      </div>
   
    </div>
  );
};

export default Navbar
