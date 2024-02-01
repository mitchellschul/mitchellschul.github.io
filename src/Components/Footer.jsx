import React from "react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const icons = [
    {
      id: 1,
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/mitchell-schuldinger/",
    },
    {
      id: 2,
      icon: <FaGithub size={30} />,
      href: "https://github.com/mitchellschul",
    },
    {
      id: 3,
      icon: <FaInstagram size={30} />,
      href: "https://www.instagram.com/mitchell_schul/",
    },
  ];

  return (
    <>
      <div className="hidden md:flex  py-4 justify-between items-center  px-4 bg-accent-blue">
        <div className="flex justify-center">
          {icons.map(({ id, icon, href }) => (
            <a
              key={id}
              href={href}
              className="flex mx-5 text-white hover:text-gray hover:scale-125 duration-300 "
              target="_blank"
              rel="noreferrer"
            >
              {icon}
            </a>
          ))}
        </div>
        <div className="text-black mr-4">
          &copy; {new Date().getFullYear()} Mitchell Schuldinger
        </div>
      </div>
      <div className="flex flex-col relative md:hidden items-center w-full px-4 py-4 bg-accent-blue">
        <div className="flex justify-center">
          {icons.map(({ id, icon, href }) => (
            <a
              key={id}
              href={href}
              className="flex mx-5 text-tanly hover:scale-125 duration-200 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              {icon}
            </a>
          ))}
        </div>
        <div className="text-tanly mt-3 cursor-default text-white">
          &copy; {new Date().getFullYear()} Mitchell Schuldinger
        </div>
      </div>
    </>
  );
};

export default Footer;
