import React from "react";
import Marquee from "react-fast-marquee";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div className="mt-10" id="skills">
      <h1 className="text-4xl mb-4 font-bold text-center">Skills</h1>
      <div className="sm:text-2xl text-xl sm:font-semibold flex  mt-10 ">
                  {/* <div className="flex items-center justify-center bg-purple-700 rounded-xl z-50">
                  <button className="">Current Skills</button>
                  </div> */}
      <Marquee pauseOnHover>
        <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-orange-600 border flex flex-col items-center justify-center">
          <button className="bg-white text-black text-4xl mb-4 rounded-full py-2  px-2">
            <IoLogoHtml5 />
          </button>
          <h1>HTML</h1>
        </div>
        <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-blue-500 flex flex-col items-center justify-center">
          <button  className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
            <FaCss3Alt />
          </button>
          <h1>CSS</h1>
        </div>

        <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-yellow-500 flex flex-col items-center justify-center">
          <button  className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
            <IoLogoJavascript />
          </button>
          <h1>JAVASCRIPT</h1>
        </div>
        <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-black flex flex-col items-center justify-center">
          <button  className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
            <FaReact />
          </button>
          <h1>REACT</h1>
        </div>
        <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-green-500 flex flex-col items-center justify-center">
          <button  className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
            <FaNodeJs />
          </button>
          <h1>NODE.JS</h1>
        </div >
        <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-slate-600 flex flex-col items-center justify-center">
          <button  className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
            <SiMongodb />
          </button>
          <h1>MONGODB</h1>
        </div>
        <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-purple-600 flex flex-col items-center justify-center">
          <button  className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
            <RiTailwindCssFill />
          </button>
          <h1>TAILWIND CSS</h1>
        </div>
        <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-yellow-600 flex flex-col items-center justify-center">
          <button  className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
          <RiFirebaseFill />
          </button>
          <h1>FIREBASE</h1>
        </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
