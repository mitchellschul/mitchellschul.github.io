import React, { useEffect } from "react";

import ProjectCards from "./ProjectCards";
import placeholderImg from "../assets/images/placeholder.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

import ITRosterCover from "../assets/images/itroster.png";
import odenThumbnail from "../assets/images/odenThumb.jpg";
import sucessTrackThumbnail from "../assets/images/sucessTrackThumb.png";
import fellasThumb from "../assets/images/fellas.png";


const Projects = () => {
  const [openTab, setOpenTab] = React.useState(1);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const tabs2 = [
    {
      id: 1,
      title: "Web / Mobile Dev",
      projects: [
        {
          id: 1,
          img: placeholderImg,
          title: "BlueBag",
          desc: "A portal to organize your cash, create goals",
          cat: "web",
          link1: "www.google.com",
          link2: "www.google.com",
        },
        {
          id: 2,
          img: placeholderImg,
          title: "NeoSass",
          desc: "Using AI to revolutionize automation for businesses. AIDR, and AI-Rep, our flagship products aim to help you automate the aspects of your business previously thought to be manual work.",
          cat: "web",
          link1: "www.google.com",
          link2: "www.google.com",
        },
      ],
    },
    {
      id: 2,
      title: "UX",
      projects: [
        {
          id: 1,
          img: ITRosterCover,
          title: "IT Roster",
          desc: "Create a user-friendly solution to view and manage the members in UWM's cross-functional IT Organization.",
          cat: "UX",
          link1: "www.google.com",

        },
        {
          id: 2,
          img: sucessTrackThumbnail,
          title: "Success Track Redesign",
          desc: "To design a smarter system or series of questions to help brokers choose the correct class to attend.",
          cat: "UX",
          link1: "www.google.com",

        },
        {
          id: 2,
          img: odenThumbnail,
          title: "Oden Classroom",
          desc: "To provide a reliable, user-friendly, and efficient coding platform tailored specifically for computer science courses.",
          cat: "UX",
          link1: "https://www.figma.com/file/xQxSldEfPiW6T3klM8S1Y3/Odin-UI---Site?type=design&node-id=0%3A1&mode=design&t=C5BGEcn5VRaB40bb-1",
        },
      ],
    },
    {
      id: 3,
      title: "Other",
      projects: [
        {
          id: 1,
          img: fellasThumb,
          title: "Michigan State Accafellas",
          desc: "A summary of my works acting as the Web Master and Social Media Manager for the Michigan State Accafellas.",
          cat: "UX",
          link1: "www.google.com",
          link2: "www.google.com",
        },
        {
          id: 2,
          img: placeholderImg,
          title: "East Lansing Film Festival",
          desc: "BBBBThis will be a brief description of the project that is being displayed. Kept just to one or two sentences",
          cat: "UX",
          link1: "www.google.com",
          link2: "www.google.com",
        },
      ],
    },
  ];

  return (
    <div id='projects-section' className="my-12 h-screen maw-w-screen-lg lg:mx-auto md:mt-40 flex flex-col relative ">
      <div className="text-xl font-bold">
        {/* <div className="w-10 h-2 bg-accent-blue relative right-2 bottom-3 z-1"></div> */}
      </div>
      <div className="max-width-screen-md  mt-16">
        <ul
          className="flex mb-0 list-none flex-wrap pb-4 flex-row justify-center"
          role="tablist"
        >
          {tabs2.map(({ id, title, projects }) => (
            <li key={id} className="-mb-px mr-4 last:mr-0 flex justify-center items-center ">
              <a
                className={
                  "px-4 py-2 hover:bg-accent-blue hover:text-white duration-200 ease-in-out text-s font-bold uppercase shadow-lg rounded block leading-normal " +
                  (openTab === id
                    ? " bg-accent-blue text-white"
                    : " border border-accent-blue")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(id);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        {tabs2.map((tab, index) => (
          <div
            key={index}
            className={openTab === tab.id ? "block" : "hidden"}
            id="link1"
            transition-opacity
            ease-in
            duration-700
            opacity-100
          >
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-2">
              {tab.projects.map((project, index) => (
                <div key={index}>
                  <ProjectCards
                    cover={project.img}
                    title={project.title}
                    desc={project.desc}
                    cat={project.cat}
                    link1={project.link1}
                    link2={project.link2}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
