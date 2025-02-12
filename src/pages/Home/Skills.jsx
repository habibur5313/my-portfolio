import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiAxios, SiExpress, SiJsonwebtokens, SiMongodb } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import { VscVscode } from "react-icons/vsc";
const Skills = () => {
    // const [fadeLeft, setFadeLeft] = useState("fade-left");
    // const [fadeRight, setFadeRight] = useState("fade-right");
    // const [fadeUp, setFadeUp] = useState("fade-up");
    // const [fadeBottom, setFadeBottom] = useState("fade-bottom");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="mt-20" id="skills">
      <h1
        className="text-4xl mb-10 font-bold text-center"
        data-aos="fade-right"
      >
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div
          className="border-2 rounded-xl shadow-xl bg-white"
          data-aos="flip-right"
        >
          <h4 className="text-2xl font-medium text-center  pb-3 border-b-2 border-b-black text-black">
            Expertise
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-3 py-5 px-5 ">
            <div className="bg-orange-600 flex flex-col items-center justify-center rounded-xl">
              <button className="bg-white text-black text-4xl mb-2 mt-6 text-center rounded-full py-2  px-2">
                <IoLogoHtml5 />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                HTML
              </h1>
            </div>
            <div className="rounded-xl bg-blue-500 flex flex-col items-center justify-cente">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <FaCss3Alt />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                CSS
              </h1>
            </div>
            <div className="rounded-xl bg-yellow-500 flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <IoLogoJavascript />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                Javascript
              </h1>
            </div>
            <div className="rounded-xl bg-black flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <FaReact />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                React
              </h1>
            </div>
            <div className="rounded-xl bg-purple-600 flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <RiTailwindCssFill />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4 text-center">
                Tailwind
              </h1>
            </div>
            <div className="rounded-xl bg-pink-300 flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <SiJsonwebtokens />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                JWT
              </h1>
            </div>
          </div>
        </div>
        <div
          className=" border-2 h-full bg-white  rounded-xl shadow-xl "
          data-aos="flip-up"
        >
          <h4 className="text-2xl font-medium text-center pb-3 text-black border-b-2 border-b-black">
            Familiar
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-3 py-5 px-5  ">
            <div className="rounded-xl bg-orange-300 flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <RiNextjsFill />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                Next.JS
              </h1>
            </div>
            <div className="rounded-xl bg-green-500 flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <FaNodeJs />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                Node.JS
              </h1>
            </div>
            <div className="rounded-xl bg-black flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <SiExpress />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                Express.JS
              </h1>
            </div>
            <div className="rounded-xl bg-pink-300 flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <SiAxios />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                Axios
              </h1>
            </div>
            <div className="rounded-xl bg-pink-300 flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <SiAxios />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                Tanstack
              </h1>
            </div>
            <div className="rounded-xl bg-slate-600 flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <SiMongodb />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                MongoDB
              </h1>
            </div>
          </div>
        </div>
        <div
          className=" border-2 h-full bg-white  rounded-xl shadow-xl"
          data-aos="flip-left"
        >
          <h4 className="text-2xl font-medium text-center border-b-2 border-b-black text-black pb-3">
            Tools
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-3 py-5 px-5  ">
            <div className="rounded-xl bg-pink-300 flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <VscVscode />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                VS Code
              </h1>
            </div>
            <div className="rounded-xl bg-yellow-600 flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <RiFirebaseFill />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                Firebase
              </h1>
            </div>
            <div className="rounded-xl bg-pink-300 flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <FaGithub />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                Github
              </h1>
            </div>
            <div className="rounded-xl bg-pink-300 flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <FaGitAlt />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                Surge
              </h1>
            </div>
            <div className="rounded-xl bg-pink-300 flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <FaGitAlt />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                Git
              </h1>
            </div>
            <div className="rounded-xl bg-pink-300 flex flex-col items-center justify-center">
              <button className="bg-white text-4xl mb-2 mt-6 text-black rounded-full py-2  px-2">
                <FaGitAlt />
              </button>
              <h1 className="text-xl font-medium lg:text-2xl lg:font-semibold mb-4">
                Dev Tool
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="sm:text-2xl text-xl sm:font-semibold flex  mt-10 "
        data-aos="flip-right"
      >
        <Marquee pauseOnHover speed={'5'} >
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-orange-600 border flex flex-col items-center justify-center">
            <button className="bg-white text-black text-4xl mb-4 rounded-full py-2  px-2">
              <IoLogoHtml5 />
            </button>
            <h1>HTML</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-blue-500 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <FaCss3Alt />
            </button>
            <h1>CSS</h1>
          </div>

          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-yellow-500 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <IoLogoJavascript />
            </button>
            <h1>JAVASCRIPT</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-black flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <FaReact />
            </button>
            <h1>REACT</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-orange-300 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <RiNextjsFill />
            </button>
            <h1>NEXT.JS</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-green-500 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <FaNodeJs />
            </button>
            <h1>NODE.JS</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-slate-600 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <SiMongodb />
            </button>
            <h1>MONGODB</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-purple-600 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <RiTailwindCssFill />
            </button>
            <h1>TAILWIND CSS</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-yellow-600 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <RiFirebaseFill />
            </button>
            <h1>FIREBASE</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-pink-300 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <SiJsonwebtokens />
            </button>
            <h1>JWT</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-pink-300 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <SiAxios />
            </button>
            <h1>AXIOS</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-black flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <SiExpress />
            </button>
            <h1>EXPRESS</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-pink-300 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <SiAxios />
            </button>
            <h1>TANSTACK</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-pink-300 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <VscVscode />
            </button>
            <h1>VSCODE</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-pink-300 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <FaGithub />
            </button>
            <h1>GITHUB</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-pink-300 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <FaGitAlt />
            </button>
            <h1>SURGE</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-pink-300 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <FaGitAlt />
            </button>
            <h1>GIT</h1>
          </div>
          <div className=" ml-5 w-[150px] md:w-[300px] py-8 md:py-16 rounded-xl bg-pink-300 flex flex-col items-center justify-center">
            <button className="bg-white text-4xl mb-4 text-black rounded-full py-2  px-2">
              <FaGitAlt />
            </button>
            <h1>DEV Tool</h1>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
