import { useEffect, useRef, useState } from "react"
import OpenInNew from "@mui/icons-material/OpenInNew"
import "./Welcome.css"

interface WelcomeProps {
  changeTopBarVisibility: (isVisible: boolean) => void;
}   
const Welcome = ({changeTopBarVisibility}:WelcomeProps) => {
    const nameRef = useRef<HTMLParagraphElement | null>(null);
    const firstContentRef = useRef<HTMLParagraphElement | null>(null);
    const secondContentRef = useRef<HTMLParagraphElement | null>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [isFirstContentIntersect, setIsFirstContentIntersect] = useState(false);
    const [isSecondIntersect, setIsSecondIntersect] = useState(false);

    useEffect(() => {
      changeTopBarVisibility(isIntersecting);
    }, [isIntersecting])


    useEffect(() => {
        const checkIntersectionWithName = () => {
            const intersectArea = document.querySelector("#intersectArea") as HTMLElement | null;
            const refCurrent = nameRef.current;
            if (!intersectArea || !refCurrent) return;

            const intersectRect = intersectArea.getBoundingClientRect();
            const nameRect = refCurrent.getBoundingClientRect();

            const topOfIntersectArea = intersectRect.top;
            const topOfName = nameRect.top; 
            
            if (topOfName <= topOfIntersectArea) {
                setIsIntersecting(true);
            } else {
                setIsIntersecting(false);
            }
        };



        const checkIntersectionWithFirstContent = () => {
            const intersectArea = document.querySelector("#intersectArea") as HTMLElement | null;
            const refCurrent = firstContentRef.current;
            if (!intersectArea || !refCurrent) return;

            const intersectRect = intersectArea.getBoundingClientRect();
            const nameRect = refCurrent.getBoundingClientRect();

            const topOfIntersectArea = intersectRect.top;
            const topOfName = nameRect.top; 
            
            if (topOfName <= topOfIntersectArea - 10) {
                setIsFirstContentIntersect(true);
            } else {
                setIsFirstContentIntersect(false);
            }
        };

        const checkIntersectionWithSecondContent = () => {
            const intersectArea = document.querySelector("#intersectArea") as HTMLElement | null;
            const refCurrent = secondContentRef.current;
            if (!intersectArea || !refCurrent) return;

            const intersectRect = intersectArea.getBoundingClientRect();
            const nameRect = refCurrent.getBoundingClientRect();

              const topOfIntersectArea = intersectRect.top;
            const topOfName = nameRect.top; 
            
            if (topOfName <= topOfIntersectArea - 10) {
                setIsSecondIntersect(true);
            } else {
                setIsSecondIntersect(false);
            }
        };


        const scrollArea = document.querySelector("#scrollArea");
        if (scrollArea) {
            scrollArea.addEventListener("scroll", checkIntersectionWithName);
            scrollArea.addEventListener("scroll", checkIntersectionWithFirstContent);
            scrollArea.addEventListener("scroll", checkIntersectionWithSecondContent);
        }
        window.addEventListener("resize", checkIntersectionWithName);
        window.addEventListener("resize", checkIntersectionWithFirstContent);
        window.addEventListener("resize", checkIntersectionWithSecondContent);

        // Initial check
        checkIntersectionWithName();
        checkIntersectionWithFirstContent();
        checkIntersectionWithSecondContent();

        return () => {
            if (scrollArea) {
                scrollArea.removeEventListener("scroll", checkIntersectionWithName);
                scrollArea.removeEventListener("scroll", checkIntersectionWithFirstContent);
                scrollArea.removeEventListener("scroll", checkIntersectionWithSecondContent);
            }
            window.removeEventListener("resize", checkIntersectionWithName);
            window.removeEventListener("resize", checkIntersectionWithFirstContent);
            window.removeEventListener("resize", checkIntersectionWithSecondContent);
        };
    }, []);

    const ShowResume = () => {
        window.open("https://drive.google.com/file/d/1CSqBaz1z1d4hnOu3Yd1EdgOpaWTeIVKL/view?usp=drive_link", "_blank");
    }

    return (
        <div className="w-full h-full flex justify-center items-center relative">
            <div className="m-10 hover:bg-blue-500/3 hover:border border-white/10 rounded-xl p-4 box-border ">
                <p
                    className={`font-extrabold  lg:text-6xl ${!isIntersecting? "revealContent" : "hideContent"}`}
                    ref={nameRef}
                >
                    Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600"> Prashant Chandel </span>
                </p>
                <p className={`lg:text-2xl my-2 revealContent ${!isFirstContentIntersect? "revealContent" : "hideContent"}`} ref={firstContentRef}>I’m a <span className="bg-emerald-300/30 rounded p-1">Software Developer</span> passionate about solving complex problems and building clean, scalable solutions. </p>
                <p className={`lg:text-2xl my-2 revealContent ${!isSecondIntersect? "revealContent" : "hideContent"}`} ref={secondContentRef}>From optimizing algorithms in C++, experimenting with Go concurrency, or designing sleek React + Tailwind UIs, I enjoy learning new technologies and applying them to real-world challenges.</p>

                <div className={`w-fit h-fit cursor-pointer flex hover:text-emerald-400 ${!isSecondIntersect? "revealContent" : "hideContent"} hover:font-semibold`} onClick={ShowResume}>
                    <span><OpenInNew/> </span> Resume 
                </div>
            </div>
        </div>
    )
}

export default Welcome