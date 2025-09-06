import About from "./About";
import Welcome from "./Welcome";
import Project from "./Project";
import Contact from "./Contact";
import { useEffect, useRef } from "react";

interface ContentProps {
  changeTopBarVisibility: (isVisible: boolean) => void;
  activePane: string;
  changeActiveIcon: (iconName: string) => void;
}

const Content = ({
  changeTopBarVisibility,
  activePane,
  changeActiveIcon,
}: ContentProps) => {
  const welcomeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  let disabled = false;

  const handleScroll = () => {
    const scrollArea = scrollAreaRef.current;
    if (!scrollArea) return;

    const scrollPosition = scrollArea.scrollTop;
    const windowHeight = scrollArea.clientHeight;

    const sections = [
      { ref: welcomeRef.current, name: "home" },
      { ref: aboutRef.current, name: "about" },
      { ref: projectRef.current, name: "project" },
      { ref: contactRef.current, name: "contact" },
    ];

    for (const section of sections) {
      if (section.ref) {
        const top = section.ref.offsetTop;
        const height = section.ref.offsetHeight;
        if (
          scrollPosition >= top - windowHeight / 2 &&
          scrollPosition < top + height - windowHeight / 2
        ) {
          if (disabled && section.name === activePane){
            disabled = false;
            break;
          }else if(!disabled){
            changeActiveIcon(section.name);
            break;
          }
        }
      }
    }
  };

  // Scroll to correct section when activePane changes
  useEffect(() => {
    const scrollArea = scrollAreaRef.current;
    if (!scrollArea) return;

    let targetRef: HTMLDivElement | null = null;
    if (activePane === "home") targetRef = welcomeRef.current;
    else if (activePane === "about") targetRef = aboutRef.current;
    else if (activePane === "project") targetRef = projectRef.current;
    else if (activePane === "contact") targetRef = contactRef.current;

    if (targetRef) {
      disabled = true;
      const offset = targetRef.offsetTop;
      scrollArea.scrollTo({ top: offset, behavior: "smooth" });
    }
  }, [activePane]);

  // Attach scroll listener
  useEffect(() => {
    const scrollArea = scrollAreaRef.current;
    if (scrollArea) {
      scrollArea.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener("scroll", handleScroll);
      }
    };
  }, [activePane]);

  return (
    <div className="h-full w-full relative no-scrollbar mt-7">
      <div className="absolute top-0 left-0 w-full h-20" id="intersectArea" />
      <div
        ref={scrollAreaRef}
        className="h-[90%] overflow-auto w-full relative no-scrollbar pb-8"
        id="scrollArea"
      >
        <div className="w-full h-full" ref={welcomeRef}>
          <Welcome changeTopBarVisibility={changeTopBarVisibility} />
        </div>
        <div ref={aboutRef} className="min-h-full">
          <About />
        </div>
        <div ref={projectRef} className="min-h-full">
          <Project />
        </div>
        <div ref={contactRef} className="min-h-full  bg-gradient-to-tr from-cyan-500/20 p-3 to-black/30">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Content;
