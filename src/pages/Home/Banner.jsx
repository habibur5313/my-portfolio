import React from "react";
import {
  FaDiscord,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="lg:w-10/12 mx-auto bg-purple-700 rounded-xl text-white  mt-10 flex flex-col-reverse md:flex-row gap-6 ">
      <div className=" flex-1 flex flex-col items-center justify-center px-2 py-4 lg:py-20 lg:px-10 space-y-3">
        <h1 className="text-4xl font-bold text-center">I am a  <Typewriter
            words={["FrontEnd", "React", "JavaScript"]}
            loop={30}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /> Developer</h1>
        <p className="text-xl font-medium text-center">
          hello, I am a FrontEnd Developer.
        I can make front of any website. I know react,javascript,tailwind css,next.js,Express.js etc technology.
        </p>
        <div className="text-2xl  font-medium flex gap-2">
          <Link to={'https://www.linkedin.com/in/md-habibur-rahman-4bbbbb340/'}>
            <button>
              <FaLinkedin />
            </button>
          </Link>
          <Link to={'https://www.facebook.com/habibur5231'}><button>
            <FaFacebookSquare />
          </button></Link>
         <Link to={'https://github.com/habibur5313'}> <button>
            <FaGithubSquare />
          </button></Link>
          <Link to={'https://discord.com/habibur5231'}><button>
            <FaDiscord />
          </button></Link>
        </div>
       <Link to={'https://docs.google.com/document/d/1WDT2iigjhYb8ruXtkLFa8hIIp0cI2FsNKIuZRmIQGPE/edit?tab=t.0'}> <button className="btn">Download Resume</button></Link>
      </div>
      <div className=" flex-1 px-2 py-4 lg:py-20 lg:px-10 ">
       <div>
        <img className=" rounded-xl" src="https://i.ibb.co.com/5GhH6jt/image-4.png" alt="" />
       </div>
      </div>
    </div>
  );
};

export default Banner;
