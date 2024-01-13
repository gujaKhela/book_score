import React from "react";
import LineSeperatorDashes from "./LineSeperatorDashes";
import Logo from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiFacebookBoxLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <LineSeperatorDashes />

      <div className="w-11/12 mx-auto flex items-center place-content-between mb-12">
        <Link to="/">
          <img src={Logo} alt="site logo" className="w-32 h-6" />
        </Link>
        <div className="w-52 h-14 flex place-content-between ">
          <div className="relative group w-14 h-14">
            <div className=" bg-white border-2 border-black rounded-full flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/guja-khelashvili-a71a00267/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 group-hover:opacity-100 transition-opacity duration-500"
              >
                <AiOutlineLinkedin size={28} />
              </a>
            </div>
            <div className="w-14 h-14 bg-blue-500 rounded-full absolute top-1 left-1 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
          </div>

          <div className="relative group w-14 h-14">
            <div className=" bg-white border-2 border-black rounded-full flex items-center justify-center">
              <a
                href="https://github.com/gujaKhela"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 group-hover:opacity-100 transition-opacity duration-500"
              >
                <FiGithub size={28} />
              </a>
            </div>
            <div className="w-14 h-14 bg-blue-500 rounded-full absolute top-1 left-1 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
          </div>

          <div className="relative group w-14 h-14">
            <div className=" bg-white border-2 border-black rounded-full flex items-center justify-center">
              <a
                href="https://www.facebook.com/guja.khelashvili/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 group-hover:opacity-100 transition-opacity duration-500"
              >
                <RiFacebookBoxLine size={28} />
              </a>
            </div>
            <div className="w-14 h-14 bg-blue-500 rounded-full absolute top-1 left-1 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
          </div>
        </div>
        <p> By Guja</p>
      </div>
    </footer>
  );
};

export default Footer;
