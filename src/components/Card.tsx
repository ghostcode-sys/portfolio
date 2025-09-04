import { useEffect, useRef, useState } from 'react'
import { OpenInNew, DocumentScannerOutlined, SportsEsports, Sms, PortraitOutlined, Assignment } from '@mui/icons-material';

type colorArr = "green" | "purple" | "lime" | "pink" | "orange"
interface CardProps {
    color: colorArr;
    link: string;
    projectName: string;
    description: string;
    description2: string;
    tags: string;
}


const Card = ({color, link, projectName, description, description2, tags}: CardProps) => {
    const [isHovered, setIsHovered] = useState(false)
    
    const container = useRef<HTMLDivElement>(null);
    

    const borderColor = {
        "green": "border-emerald-400",
        "purple": "border-purple-400",
        "lime": "border-lime-400",
        "pink": "border-pink-400",
        "orange": "border-orange-400",
    }
    const backgoundContainer = {
        "green": "from-emerald-950/50",
        "purple": "from-purple-950/50",
        "lime": "from-lime-950/50",
        "pink": "from-pink-950/50",
        "orange": "from-orange-950/50",
    }

    const textColor = {
        "green": "text-emerald-400",
        "purple": "text-purple-400",
        "lime": "text-lime-400",
        "pink": "text-pink-400",
        "orange": "text-orange-400",
    }

    const buttonBackground = {
        "green": "bg-emerald-700/50",
        "purple": "bg-purple-700/50",
        "lime": "bg-lime-700/50",
        "pink": "bg-pink-700/50",
        "orange": "bg-orange-700/50",
    }


    const openProject = () => {
        window.open(link)

    }

    const [tagList, setTaglist] = useState<string[]>([])
    
    useEffect(() => {
        const addHover = () => {
            setIsHovered(true)
        }
    
        const removeHover = () => {
            setIsHovered(false)
        }
    
       setTaglist(tags.split(", "))

        if (container) {
            const currentRef = container.current
            if (currentRef) {
                currentRef.addEventListener("mouseover", addHover)
                currentRef.addEventListener("mouseout", removeHover)
            }
        }
        return () => {
            if (container) {
                const currentRef = container.current
                if (currentRef) {
                    currentRef.removeEventListener("mouseover", addHover)
                    currentRef.removeEventListener("mouseout", removeHover)
                }
            }
        }
    }, [])

    return (
        <div ref={container} className={`w-240 m-auto my-10 p-10 rounded-xl bg-linear-to-r ${backgoundContainer[color]} to-gray-950/50 hover:scale-105 duration-500 ease-in-out transition-transform hover:border-2 ${borderColor[color]}`}>
            <div className='flex justify-between items-center mb-5'>
                <div className={`border ${borderColor[color]} w-fit aspect-square p-3 rounded-lg `}>
                    {projectName == "API History" ?  <DocumentScannerOutlined className={textColor[color]} sx={{ fontSize: 60 }} /> :
                    projectName == "SecureChat" ? <Sms  className={textColor[color]} sx={{ fontSize: 60 }} /> : 
                    projectName == "Bingo" ? <SportsEsports className={textColor[color]} sx={{ fontSize: 60 }} /> :
                    projectName == "Portfolio"? <PortraitOutlined className={textColor[color]} sx={{ fontSize: 60 }} /> :
                    projectName == "Easy form" ? <Assignment className={textColor[color]} sx={{ fontSize: 60 }} /> : ""
                }
                </div>
                <div className={isHovered ? "opacity-100" : "opacity-0"} onClick={openProject}>
                    <i className={`devicon-github-original text-6xl cursor-pointer w-fit aspect-square p-3 rounded-lg ${textColor[color]}`}></i>
                </div>
            </div>
            <div className={`text-5xl font-extrabold ${isHovered ? textColor[color] : "text-white"}`}>
                {projectName}
            </div>
            <div className='my-2'>
                {description}
            </div>
            <div className='my-2'>
                {description2}
            </div>
            <div className='inline-flex flex-wrap h-fit my-2'>
                {tagList.map((val, idx) => {
                     return <div className={`${buttonBackground[color]} px-5 py-2 font-bold rounded-full border ${borderColor[color]} mx-2`} key={idx}>{val}</div>
                })}
            </div>
        </div>
    )
};

export default Card