import ToolName from "./ToolName"
import { useEffect, useState } from "react";

const Libraries = () => {

    const [description, setDescription] = useState<string>("")
    const [years, setYears] = useState<number>(0)
    const [months, setMonths] = useState<number>()
    const [activeIcon, setActiveIcon] = useState<string>("")
    const currentDate = new Date()
    const [tools, setTools] = useState<{ name: string, active: boolean, description: string, icon: string, startDate: Date }[]>(
        [
  {
    "name": "Docker",
    "active": true,
    "description": "A platform for developers and sysadmins to build, run, and share applications with containers. It packages an application and all its dependencies into a single, portable unit.",
    "icon" : "devicon-docker-plain",
    "startDate": new Date("2024-07-01"),
  },
  {
    "name": "Kubernetes",
    "active": false,
    "description": "An open-source container orchestration system for automating the deployment, scaling, and management of containerized applications. It groups containers into logical units for easy management and discovery.",
    "icon" : "devicon-kubernetes-plain",
    "startDate": new Date("2024-09-01"),
  },
  {
    "name": "Tailwind CSS",
    "active": false,
    "description": "A utility-first CSS framework for rapidly building custom user interfaces. It provides a set of low-level utility classes that can be composed to create any design directly in your markup.",
    "icon" : "devicon-tailwindcss-plain",
    "startDate": new Date("2022-07-01"),
  },
  {
    "name": "React",
    "active": false,
    "description": "A JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and manage the state of their application efficiently.",
    "icon" : "devicon-react-plain",
    "startDate": new Date("2020-04-01"),
  },
  {
    "name": "Vue.js",
    "active": false,
    "description": "A progressive JavaScript framework for building user interfaces. It's designed to be incrementally adoptable, with a focus on ease of use and a gentle learning curve.",
    "icon" : "devicon-vuejs-plain",
    "startDate": new Date("2021-07-01"),
  },
  {
    "name": "React Native",
    "active": false,
    "description": "An open-source mobile application framework used to develop applications for Android, iOS, and other platforms by enabling developers to use the React framework along with native platform capabilities.",
    "icon" : "devicon-reactnative-original-wordmark",
    "startDate": new Date("2022-10-01"),
  },
  {
    "name": "Express",
    "active": false,
    "description": "A fast, unopinionated, minimalist web framework for Node.js. It's widely used for building robust APIs and web applications.",
    "icon" : "devicon-express-original-wordmark",
    "startDate": new Date("2020-06-01"),
  },
  {
    "name": "Gin",
    "active": false,
    "description": "A web framework for the Go programming language. It features a Martini-like API with much better performance, making it popular for building high-performance APIs and web services.",
    "icon" : "devicon-go-plain",
    "startDate": new Date("2023-08-01"),
  },
  {
    "name": "Django",
    "active": false,
    "description": "A high-level Python web framework that encourages rapid development and clean, pragmatic design. It's known for its 'batteries-included' approach, providing many built-in features.",
    "icon" : "devicon-django-plain",
    "startDate": new Date("2020-05-01"),
  },
  {
    "name": "YII",
    "active": false,
    "description": "A high-performance PHP framework for developing large-scale Web applications. It's a component-based framework that provides a rich set of features and tools for rapid development.",
    "icon" : "devicon-yii-plain",
    "startDate": new Date("2023-08-01"),
  },
  {
    "name": "Bootstrap",
    "active": false,
    "description": "A free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
    "icon" : "devicon-bootstrap-plain",
    "startDate": new Date("2020-04-01"),
  },
  {
    "name": "jQuery",
    "active": false,
    "description": "A fast, small, and feature-rich JavaScript library. It simplifies things like HTML document traversal and manipulation, event handling, animation, and Ajax interactions for rapid web development.",
    "icon" : "devicon-jquery-plain",
    "startDate": new Date("2019-07-01"),
  },
   {
    "name": "Node.js",
    "active": false,
    "description": "A back-end JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It's built on Chrome's V8 JavaScript engine and is widely used for building scalable network applications.",
    "icon": "devicon-nodejs-plain-wordmark",
    "startDate": new Date("2020-03-01"),
  },
  {
    "name": "Mongoose",
    "active": false,
    "description": "An elegant MongoDB object modeling tool for Node.js. It provides a straightforward, schema-based solution for modeling your application data and includes built-in type casting, validation, query building, and business logic hooks.",
    "icon": "devicon-mongoose-original",
    "startDate": new Date("2020-06-01")
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
        makeActive("Docker")
    }, [])

    return (
     
           
                <div className='lg:flex lg:flex-row justify-between w-full h-fit my-5'>
                    <div className='w-full lg:w-[40%] inline-flex flex-wrap lg:h-fit  h-45 overflow-auto'>
                        {tools.map(tool =>
                            <ToolName key={tool.name} name={tool.name} active={tool.active} makeActive={makeActive} color="bg-blue-500/10" />
                        )}
                    </div>
                    <div className="w-full lg:w-[50%] h-fit border-2 rounded-xl border-white/10 text-wrap">
                        <div className="bg-white/10 border-b border-white/10 rounded-t-xl  flex justify-start">
                            <i
                                className={`${activeIcon} font-bold text-3xl p-2 lg:text-6xl text-blue-500 transition-transform duration-300 ease-in-out`}
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
                        <div className="text-blue-400 font-bold p-2 h-40 overflow-auto">
                            {description}
                        </div>
                        <div className="bg-white/10 border-t border-white/10 p-2">
                            Experience: {years !== 0 ? years === 1 ? `${years} Year` : `${years} Years`: ""}{months !== 0 ? months === 1 ? `, ${months} Month` : `, ${months} Months`: ""}
                        </div>
                    </div>
                </div>
    )
}


export default Libraries 