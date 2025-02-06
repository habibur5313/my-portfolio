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
    <div className=" mx-auto bg-purple-700 rounded-xl text-white flex flex-col-reverse md:flex-row gap-6 ">
      <div className=" flex-1 flex flex-col  justify-center px-2 py-4 lg:px-10 xl:px-20 space-y-2">
        <p className="text-xl font-medium">Hello, There</p>
        <h4 className="text-xl font-medium">
          I am <span className="text-2xl font-bold">Md Habibur Rahman</span>
        </h4>
        <h1 className="text-xl font-medium">
          I am{" "}
          <span className="text-2xl font-bold">
            <Typewriter
              words={[
                "Web  Developer",
                "Front-end Developer",
                "React Developer",
                "JavaScript Developer",
              ]}
              loop={30}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-xl font-medium">
          I can make front and back of any web
          application. I know React, JavaScript, Tailwind CSS, Next.js,
          Express.js, MongoDb, HTML5, CSS3 etc technology.
        </p>
        <div className="text-2xl  font-medium flex gap-2">
          <Link to={"https://www.linkedin.com/in/md-habibur-rahman-4bbbbb340/"}>
            <button>
              <FaLinkedin />
            </button>
          </Link>
          <Link to={"https://www.facebook.com/habibur5231"}>
            <button>
              <FaFacebookSquare />
            </button>
          </Link>
          <Link to={"https://github.com/habibur5313"}>
            <button>
              <FaGithubSquare />
            </button>
          </Link>
          <Link to={"https://discord.com/habibur5231"}>
            <button>
              <FaDiscord />
            </button>
          </Link>
        </div>
        <Link
          to={
            "https://drive.google.com/file/d/1rub4hCa8zayvcy0Z8xjnmXFNPgvAYQqi/view?usp=drive_link"
          }
        >
          <button className="text-xl font-medium py-2 px-3 border rounded-xl">Download Resume</button>
        </Link>
      </div>
      <div className=" flex-1 px-2 py-4 xl:px-20 lg:py-10">
        <div>
          <img
            className=" rounded-3xl h-[350px] sm:h-[400px] lg:h-[500px] w-full px-4 sm:px-10 md:px-4"
            src="https://i.ibb.co.com/88PhdHw/image-8.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
