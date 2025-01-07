import React from "react";
import { FaDiscord, FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-neutral mt-10 text-primary-content p-10">
      <div>
        <img className="w-10 rounded-full" src="https://i.ibb.co.com/xXgJXnQ/image-1.png" alt="" />
        <p className="font-bold">
          MD Habibur Rahman
          <br />
          <span className='flex items-center gap-3 text-xl font-medium'><FaLocationDot className='text-3xl font-semibold text-red-600' /> Sylhet , Bangladesh.</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} Habibur Rahman - All right reserved</p>
      </div>
      <nav>
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
      </nav>
    </footer>
  );
};

export default Footer;
