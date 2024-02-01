import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import mitchPic from "../assets/images/mitchellschuldinger.png";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Programmer", "Developer", "Designer", "Coffee Addict"],
    cursor: true,
    loop: false,
    typeSpeed: 70,
    deleteSpeed: 70,
    delaySpeed: 1100,
  });

  return (
    <div className="w-full mx-12 mt-10 md:mt-40 lg:mx-auto max-w-screen-lg  flex-col md:flex-row flex justify-between items-center ">
      <div className="flex flex-col items-start font-roboto gap-2 mr-10 balance">
        <div className="text-lg">Hi, my name is</div>
        <div className="text-5xl">Mitchell Schuldinger</div>
        <div className="text-3xl">
          <span className="text-gray">I am a</span>
          <span className="text-accent-blue font-bold pl-2">{text}</span>
          <Cursor />
        </div>
      </div>

      <div>
        <div className="hidden md:block w-8 h-8  rounded-md border-4 border-accent-blue absolute mt-[270px] ml-56"></div>

        <div className="hidden md:block w-12 h-12 bg-accent-blue rounded-md border-accent-blue absolute mt-[-65px]"></div>

        <div className="hidden md:block w-64 h-64 object-fit rounded-md">
          <img
            src={mitchPic}
            alt="mitchell schuldinger"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
