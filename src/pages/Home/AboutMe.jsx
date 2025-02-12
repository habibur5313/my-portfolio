import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const AboutMe = () => {
  const [fadeLeft, setFadeLeft] = useState("fade-left");
  useEffect(() => {
    Aos.init({ duration: 2000 });
    if (window.innerWidth < 1025) {
      setFadeLeft("fade-right");
    }
  }, []);
  // animate__animated animate__slideInLeft animate__delay-2s
  return (
    <div className="mt-20">
      <h1 className="text-4xl mb-10 font-bold text-center">About Me</h1>
      <div className="flex justify-center gap-4 ">
        <img
          className="h-[450px] lg:h-[400px]  hidden lg:block"
          data-aos='fade-right'
          src="https://i.ibb.co.com/5GhH6jt/image-4.png"
          alt=""
        />
        <div className="flex flex-col space-y-2  xl:ml-6" data-aos={fadeLeft}>
          <h1 className="md:text-3xl md:font-semibold text-2xl font-medium">
            Front-end web developer
          </h1>
          <p className="text-xl">
            I'm a passionate and dedicated Web Developer from Sylhet,
            Bangladesh. I have experience with technologies like React,
            JavaScript, HTML, CSS, Tailwind CSS, MongoDB, Express, Node.js,
            Next.js, Firebase etc. As a fresher, I'm eager to learn and improve
            my skills. Although my English isn't perfect, I'm always working on
            getting better.I love playing cricket and badminton in my free time.
            Check out my projects on GitHub, and feel free to connect with me on
            LinkedIn or via email. Let's build something amazing together!🚀
          </p>
          <div className="text-xl">
            <p>Name: Md Habibur Rahman</p>
            <p>Email: habiburmamun313@gmail.com</p>
            <div className="flex flex-wrap gap-3">
              <Link to={"https://github.com/habibur5313"}>
                <button className="btn- btn-link text-orange-500">
                  Github
                </button>
              </Link>
              <Link
                to={"https://www.linkedin.com/in/md-habibur-rahman-4bbbbb340/"}
              >
                <button className="btn- btn-link text-orange-500">
                  LinkedIn
                </button>
              </Link>
              <Link to={"https://www.facebook.com/habibur5231"}>
                <button className="btn- btn-link text-orange-500">
                  Facebook
                </button>
              </Link>
              <Link to={"https://discord.com/habibur5231"}>
                <button className="btn- btn-link text-orange-500">
                  Discord
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
