import Libraries from './Libraries'
import Languages from './Languages'
import Technologies from './Technologies'
import { useEffect, useRef, useState } from 'react'


const About = () => {
    const [msg, setMsg] = useState<string>("")

    // State to control visibility
    const messages = "backend development,web development,problem solving,data structures,algorithms"

    const HeadingRef = useRef<HTMLDivElement>(null)

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

    return (
        <div className="w-full h-fit my-10">
            <div
                className='font-extrabold text-indigo-600 text-6xl h-fit w-fit m-auto'
                style={{ textShadow: '2px 2px 8px rgba(99,102,241,0.5)' }}
                ref={HeadingRef}
            >
                Technical Skills
            </div>
            <div className='w-250 m-auto text-center'>
                I’m a developer with a strong foundation in <div className='bg-emerald-400/10 w-50 p-1 border border-white/10 rounded-md inline-block'>{msg}</div> and practical experience working across different Languages and Framework
            </div>
            <div className='mt-10 w-full h-fit'>
                <div  className='w-250 m-auto p-2 mt-10 transition-all duration-700 ease-in-out '
                    style={{ transitionProperty: 'opacity' }}
                    ref={el => {
                        if (el) {
                            const observer = new IntersectionObserver(
                                ([entry]) => {
                                    if (entry.isIntersecting) {
                                        el.style.opacity = '1';
                                        el.style.transform = "scale(1)"
                                    } else {
                                        el.style.opacity = '0.5';
                                        el.style.transform = "scale(0.9)"
                                    }
                                },
                                { threshold: 0.8 }
                            );
                            observer.observe(el);
                        }
                    }}>
                    <p className="text-4xl font-extrabold text-emerald-400 text-shadow-emerald-400/30 text-shadow-md text-center my-4">Languages</p>
                    <Languages />
                </div>
                <div
                    className='w-250 m-auto p-2 mt-10 transition-opacity transistion duration-700 ease-in-out'
                    style={{ transitionProperty: 'opacity' }}
                    ref={el => {
                        if (el) {
                            const observer = new IntersectionObserver(
                                ([entry]) => {
                                    if (entry.isIntersecting) {
                                        el.style.opacity = '1';
                                        el.style.transform = "scale(1)"
                                    } else {
                                        el.style.opacity = '0.5';
                                        el.style.transform = "scale(0.9)"
                                    }
                                },
                                { threshold: 0.8 }
                            );
                            observer.observe(el);
                        }
                    }}
                    >
                    <p className="text-4xl font-extrabold text-blue-400 text-shadow-blue-400/30 text-shadow-md text-center my-4">Frameworks & Libraries</p>
                    <Libraries />
                </div>
                <div  className='w-250 m-auto p-2 mt-10 transition-all duration-700 ease-in-out '
                    style={{ transitionProperty: 'opacity' }}
                    ref={el => {
                        if (el) {
                            const observer = new IntersectionObserver(
                                ([entry]) => {
                                    if (entry.isIntersecting) {
                                        el.style.opacity = '1';
                                        el.style.transform = "scale(1)"
                                    } else {
                                        el.style.opacity = '0.5';
                                        el.style.transform = "scale(0.9)"
                                    }
                                },
                                { threshold: 0.8 }
                            );
                            observer.observe(el);
                        }
                    }}>
                    <p className="text-4xl font-extrabold text-amber-50 text-shadow-amber-50/30 text-shadow-md text-center my-4">Tools & OS</p>
                    <Technologies />
                </div>
            </div>
        </div>
    )
}

export default About