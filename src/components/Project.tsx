import "./Project.css";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";
import {ArrowDownward} from "@mui/icons-material";

type colorArr = "green" | "purple" | "lime" | "pink" | "orange";
interface CardProps {
  color: colorArr;
  link: string;
  projectName: string;
  description: string;
  description2: string;
  tags: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

const Project = () => {
  const projects: CardProps[] = [
    {
      color: "green",
      link: "https://github.com/ghostcode-sys/postmanHistroy",
      projectName: "API History",
      description:
        "A Dockerized API testing tool that validates endpoints, logs results to a database, and dynamically generates Swagger documentation from test outcomes.",
      description2:
        "Designed for developers and QA engineers to streamline API lifecycle management, providing automated regression testing and monitoring with minimal setup.",
      tags: "GO, Docker, React, MongoDB",
      ref: useRef(null),
    },
    {
      color: "purple",
      link: "https://github.com/ghostcode-sys/SecureChat",
      projectName: "SecureChat",
      description:
        "A secure messaging app that uses Steganography to hide encrypted messages within images.",
      description2:
        "Built with privacy-first principles, it integrates end-to-end encryption and innovative message concealment, making it resilient against surveillance and interception.",
      tags: "React, Node.js, SocketIO",
      ref: useRef(null),
    },
    {
      color: "lime",
      link: "https://github.com/ghostcode-sys/bingo",
      projectName: "Bingo",
      description: "A real-time, socket-based multiplayer game.",
      description2:
        "Features custom room creation, live score updates, and cross-device synchronization for an engaging and competitive gaming experience.",
      tags: "React, SocketIO, Node.js",
      ref: useRef(null),
    },
    {
      color: "pink",
      link: "https://github.com/ghostcode-sys/portfolio",
      projectName: "Portfolio",
      description:
        "A professional portfolio to showcase personal projects and technical skills.",
      description2:
        "Responsive, modern UI with smooth animations and SEO optimizations. Acts as a central hub to present experience, achievements, and coding expertise.",
      tags: "React, TypeScript, TailwindCSS, Go, Docker",
      ref: useRef(null),
    },
    {
      color: "orange",
      link: "https://github.com/ghostcode-sys/Easy_form",
      projectName: "Easy form",
      description:
        "A form creation tool that stores submitted data in an Excel sheet.",
      description2:
        "Ideal for small businesses and event organizers, it simplifies data collection and integrates with export-ready formats for easy processing.",
      tags: "MongoDB, React, Express, Node.js",
      ref: useRef(null),
    },
  ];

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [activeProject, setActiveProject] = useState<string>(
    projects[0].projectName
  );

  const changeActiveProject = (idx: number) => {
    setActiveProject(projects[idx].projectName);
  };

  useEffect(() => {
    projects.forEach((element) => {
      if (element.projectName == activeProject) {
        const targetRef = element.ref;
        if (sliderRef && targetRef) {
          const sliderCurrentRef = sliderRef.current;
          const targetCurrentRef = targetRef.current;
          if (sliderCurrentRef && targetCurrentRef) {
            let leftPos = targetCurrentRef.offsetLeft;
            sliderCurrentRef.scroll({ behavior: "smooth", left: leftPos });
          }
        }
      }
    });
  }, [activeProject]);

  return (
    <div className="w-full h-full">
      <div
        className="font-extrabold text-violet-600 text-3xl lg:text-6xl h-fit w-fit m-auto "
        style={{ textShadow: "2px 2px 8px rgba(99,102,241,0.5)" }}
      >
        Featured Projects
      </div>
      <div className="max-w-full">
        <div
          className="w-full lg:w-[90%] relative flex overflow-x-auto no-scrollbar"
          ref={sliderRef}
        >
          {projects.map((val, idx) => (
            <div
              className={"w-[100%] flex-none mx-5 lg:mx-0"}
              key={idx}
              ref={val.ref}
            >
              <Card
                color={val.color}
                tags={val.tags}
                description={val.description}
                description2={val.description2}
                projectName={val.projectName}
                link={val.link}
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[70%] m-auto hidden lg:flex justify-around items-center">
          {projects.map((val, idx) => {
            return (
              <div
                key={idx}
                className={
                  val.projectName == activeProject
                    ? "border-2 border-white rounded-full w-5 aspect-square bg-white my-2 animate-bounce"
                    : "border-2 border-white rounded-full w-5 aspect-square my-2"
                }
                onClick={() => changeActiveProject(idx)}
              ></div>
            );
          })}
        </div>
        <div className="lg:hidden w-full text-end pr-10">
          Slide for More Projects <ArrowDownward className="animate-bounce rotate-270"/>
        </div>
      </div>
    </div>
  );
};

export default Project;
