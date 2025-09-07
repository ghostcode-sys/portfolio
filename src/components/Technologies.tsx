import ToolName from "./ToolName"
import { useEffect, useState } from "react";

const Technologies = () => {

    const [description, setDescription] = useState<string>("")
    const [years, setYears] = useState<number>(0)
    const [months, setMonths] = useState<number>()
    const [activeIcon, setActiveIcon] = useState<string>("")
    const currentDate = new Date()
    const [tools, setTools] = useState<{ name: string, active: boolean, description: string, icon: string, startDate: Date }[]>(
        [
            {
                name: "Git",
                active: true,
                description: "A distributed version control system that tracks changes in source code during software development. It enables multiple developers to work together and maintain a complete history of project changes.",
                icon: "devicon-git-plain",
                startDate: new Date("2019-01-01"),
            },
            {
                name: "Ubuntu",
                active: false,
                description: "A popular open-source Linux distribution based on Debian. Ubuntu is widely used for development, servers, and cloud computing due to its stability, security, and extensive package ecosystem.",
                icon: "devicon-ubuntu-plain",
                startDate: new Date("2019-06-01"),
            },
            {
                name: "Windows",
                active: false,
                description: "A widely used operating system developed by Microsoft. Windows provides a user-friendly interface and supports a vast range of applications for both personal and professional use.",
                icon: "devicon-windows8-original",
                startDate: new Date("2019-01-01"),
            },
            {
                name: "CI/CD",
                active: false,
                description: "Continuous Integration and Continuous Deployment (CI/CD) are practices that automate the building, testing, and deployment of applications. They help teams deliver software faster and more reliably.",
                icon: "devicon-githubactions-plain", // You can use another icon if preferred
                startDate: new Date("2021-03-01"),
            }
        ]
    );

    const makeActive = (toolName: string) => {
        const updatedTools = tools.map(tool => {
            if (tool.name === toolName) {
                setDescription(tool.description)
                setActiveIcon(tool.icon)
                let tempyears = currentDate.getFullYear() - tool.startDate.getFullYear()
                let tempmonths = currentDate.getMonth() - tool.startDate.getMonth()

                if (tempmonths < 0) {
                    tempmonths += 12
                    tempyears -= 1
                }
                setMonths(tempmonths)
                setYears(tempyears)
                return { ...tool, active: true };
            } else {
                return { ...tool, active: false };
            }
        });
        setTools(updatedTools);
    }

    useEffect(() => {
        makeActive("Git")
    }, [])

    return (
     
           
                <div className='lg:flex lg:flex-row justify-between w-full h-fit my-5'>
                    <div className='w-full lg:w-[40%] inline-flex flex-wrap lg:h-fit  h-45 overflow-auto'>
                        {tools.map(tool =>
                            <ToolName key={tool.name} name={tool.name} active={tool.active} makeActive={makeActive} color="bg-amber-500/10" />
                        )}
                    </div>
                    <div className="w-full lg:w-[50%] h-fit border-2 rounded-xl border-white/10 text-wrap">
                        <div className="bg-white/10 border-b border-white/10 rounded-t-xl  flex justify-start">
                            <i
                                className={`${activeIcon} font-bold text-3xl p-2 lg:text-6xl text-amber-50 transition-transform duration-300 ease-in-out`}
                                key={activeIcon}
                                style={{ animation: "iconPop 0.4s" }}
                            ></i>
                            <style>
                                {`
                                    @keyframes iconPop {
                                        0% { transform: scale(0.7); opacity: 0.5; }
                                        60% { transform: scale(1.2); opacity: 1; }
                                        100% { transform: scale(1); opacity: 1; }
                                    }
                                `}
                            </style>
                        </div>
                        <div className="text-amber-50 font-bold p-2 h-40 overflow-auto">
                            {description}
                        </div>
                        <div className="bg-white/10 border-t border-white/10 p-2 rounded-b-xl">
                            Experience: {years !== 0 ? years === 1 ? `${years} Year` : `${years} Years`: ""}{months !== 0 ? months === 1 ? `, ${months} Month` : `, ${months} Months`: ""}
                        </div>
                    </div>
                </div>
    )
}


export default Technologies 