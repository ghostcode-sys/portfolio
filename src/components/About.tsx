import Libraries from './Libraries'
import Languages from './Languages'
import Technologies from './Technologies'
import { useEffect, useRef, useState } from 'react'

const About = () => {
    const [msg, setMsg] = useState<string>("")
    const scrollDiv = useRef<HTMLDivElement | null>(null);

    // State to control visibility
    const [opacityLanguages, setopacityLanguages] = useState(1);
    const [opacityLibraries, setopacityLibraries] = useState(1);
    const [opacityTechnologies, setopacityTechnologies] = useState(1);

    const messages = "backend development,web development,problem solving,data structures,algorithms"

    let idx = 0;
    let charAt = 0;
    let messageArr = messages.split(",")
    useEffect(() => {
        const interval = setInterval(() => {
            if (charAt < messageArr[idx].length) {
                charAt++
                setMsg(messageArr[idx].substring(0, charAt))
            } else {
                charAt = 0
                idx = (idx + 1) % messageArr.length;
            }
        }, 100)

        return () => {
            clearInterval(interval)
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const divElement = scrollDiv.current;
            if (divElement) {
                const scrollPosition = divElement.scrollTop;
                const maxScroll = divElement.scrollHeight - divElement.clientHeight;
                const scrollPercentage = scrollPosition / (maxScroll || 1);
                console.log(scrollPercentage)
                let langopacity = 0
                let libopacity = 0
                let techopacity = 1
                if (scrollPercentage < 0.10){
                    langopacity = 1
                } else if (scrollPercentage >= 0.10 && scrollPercentage < 0.20){
                    langopacity= 0.75
                    libopacity= 0.25
                } else if (scrollPercentage >= 0.20 && scrollPercentage < 0.30){
                    langopacity= 0.50
                    libopacity= 0.75
                } else if (scrollPercentage >= 0.30 && scrollPercentage < 0.40){
                    langopacity= 0
                    libopacity = 1
                }else if (scrollPercentage >= 0.40 && scrollPercentage < 0.60){
                    libopacity= 0.75
                    techopacity = 0.25
                }else if (scrollPercentage >= 0.60 && scrollPercentage < 0.70){
                    libopacity= 0.50
                    techopacity = 0.75
                }else if (scrollPercentage >= 0.70 && scrollPercentage < 0.80){
                    techopacity = 1
                }else if (scrollPercentage >= 0.80 && scrollPercentage < 0.90){
                    langopacity= 0.75
                }else{
                    techopacity = 1
                } 
                setopacityLanguages(langopacity)
                setopacityLibraries(libopacity)
                setopacityTechnologies(techopacity)
            }
        };

        const currentDiv = scrollDiv.current;
        if (currentDiv) {
            currentDiv.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (currentDiv) {
                currentDiv.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="w-full h-full">
            <div className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600 text-8xl h-fit w-fit m-auto'>ABOUT ME</div>
            <div className='w-250 m-auto text-center'>
                I’m a developer with a strong foundation in <div className='bg-emerald-400/10 w-50 p-1 border border-white/10 rounded-md inline-block'>{msg}</div> and practical experience working across different Languages and Framework
            </div>
            <div ref={scrollDiv} className='mt-10 w-full h-[80%] overflow-y-auto no-scrollbar'>
                <div style={{ opacity: opacityLanguages}}>
                    <Languages />
                </div>
                <div style={{ opacity: opacityLibraries }}>
                    <Libraries />
                </div>
                <div style={{ opacity: opacityTechnologies }}>
                    <Technologies />
                </div>
                <div className='w-full h-50 opacity-0 bg-white block'>
                </div>
            </div>
        </div>
    )
}

export default About