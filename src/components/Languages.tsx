import ToolName from "./ToolName"
import { useEffect, useState } from "react";

const Languages = () => {

    const [description, setDescription] = useState<string>("")
    const [years, setYears] = useState<number>(0)
    const [months, setMonths] = useState<number>()
    const [activeIcon, setActiveIcon] = useState<string>("")
    const currentDate = new Date()
    const [tools, setTools] = useState<{ name: string, active: boolean, description: string, icon: string, startDate: Date }[]>([
        {
            "name": "Go",
            "active": false,
            "description": "A statically typed, compiled programming language known for its simplicity, efficiency, and concurrency support. It's often used for building scalable network services and command-line tools.",
            "icon": "devicon-go-plain",
            "startDate": new Date("2023-08-01")
        },
        {
            "name": "C++",
            "active": false,
            "description": "A powerful, general-purpose language that excels in performance-critical applications like game development, operating systems, and high-frequency trading systems due to its low-level memory manipulation capabilities.",
            "icon": "devicon-cplusplus-plain",
              "startDate": new Date("2019-04-01")
        },
        {
            "name": "JavaScript",
            "active": true,
            "description": "The foundational language of the web, enabling interactive and dynamic content on websites. It's an interpreted language widely used for both front-end and back-end development.",
            "icon": "devicon-javascript-plain",
            "startDate": new Date("2019-12-01")
        },
        {
            "name": "TypeScript",
            "active": false,
            "description": "A superset of JavaScript that adds optional static typing, improving code maintainability and catching errors early.",
            "icon": "devicon-typescript-plain",
            "startDate": new Date("2023-05-01")
        },
        {
            "name": "Python",
            "active": false,
            "description": "A versatile, high-level language with a clear syntax, making it popular for data science, machine learning, web development, and automation.",
            "icon": "devicon-python-plain",
            "startDate": new Date("2020-04-01")
        },
        {
            "name": "PHP",
            "active": false,
            "description": "A server-side scripting language designed for web development. It can be embedded into HTML and is widely used for building dynamic websites and web applications, powering a significant portion of the internet's content management systems.",
            "icon": "devicon-php-plain",
            "startDate": new Date("2023-05-01")
        },
        {
            "name": "MySQL",
            "active": false,
            "description": "A widely used open-source relational database management system for storing, managing, and retrieving data.",
            "icon": "devicon-mysql-plain",
            "startDate": new Date("2022-01-01")
        },
        {
            "name": "HTML",
            "active": false,
            "description": "The standard markup language for creating web pages and defining their structure.",
            "icon": "devicon-html5-plain",
            "startDate": new Date("2018-01-01")
        },
        {
            "name": "CSS",
            "active": false,
            "description": "A stylesheet language used to describe the presentation and styling of a document written in HTML.",
            "icon": "devicon-css3-plain",
            "startDate": new Date("2018-01-01")
        }
    ]);

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
        makeActive("Go")
    }, [])

    return (
            <div className='w-250 m-auto border-2 border-white/50 p-2'>
                <p className="text-4xl font-extrabold text-emerald-400 text-shadow-emerald-400/30 text-shadow-md text-center my-4">Languages</p>
                <div className='flex flex-row justify-between w-full h-fit my-5'>
                    <div className='w-[40%] inline-flex flex-wrap h-fit'>
                        {tools.map(tool =>
                            <ToolName key={tool.name} name={tool.name} active={tool.active} makeActive={makeActive} color="bg-emerald-400/10" />
                        )}
                    </div>
                    <div className="w-[50%] h-fit border-2 rounded-xl border-white/10 text-wrap">
                        <div className="bg-white/10 border-b border-white/10 pt-1">
                            <i className={`${activeIcon} font-bold text-6xl text-emerald-300`}></i>
                        </div>
                        <div className="text-emerald-400 font-bold p-2 h-40">
                            {description}
                        </div>
                        <div className="bg-white/10 border-t border-white/10 p-2">
                            Experience: {years !== 0 ? years === 1 ? `${years} Year` : `${years} Years`: ""}{months !== 0 ? months === 1 ? `, ${months} Month` : `, ${months} Months`: ""}
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default Languages 