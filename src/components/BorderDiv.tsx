import { useEffect, useState } from "react"


const BorderDiv = () => {
    const [top, setTop] = useState<number>(0)
    const [left, setLeft] = useState<number>(0)
    const [rotationAngle, setRotationAngle] = useState<number>(180)

    const [angle, setAngle] = useState<number>(45)


    // animation loop
    useEffect(() => {
        let frameId: number

        const update = () => {
            setAngle(prev => (prev - 1 + 360) % 360) // keep within 0–359
            setTop(prev => (prev + 1) % 300) // move down and reset
            setLeft(prev => (prev + 1) % 300) // move right and reset
            setRotationAngle(prev => (prev + 1) % 360) // rotate and reset
            frameId = requestAnimationFrame(update)
        }

        frameId = requestAnimationFrame(update)

        return () => cancelAnimationFrame(frameId) // cleanup on unmount
    }, [])

    // log based on angle
    useEffect(() => {
        if (angle === 45) {
            console.log("Going bottom")
        } else if (angle === 135) {
            console.log("Going left")
        } else if (angle === 225) {
            console.log("Going top")
        } else if (angle === 315) {
            console.log("Going right")
        }
    }, [angle, rotationAngle])


    return (
        <div className="m-4 absolute size-[200px]" style={{ top: `${top}px`, left: `${left}px`, transform: `rotate(${rotationAngle}deg)` }}  >
            <div className="absolute size-[200px] rounded-md animate-border" style={{ background: `conic-gradient(from ${angle}deg, white, transparent 30%, transparent)` }}></div>
            <div className="absolute w-[194px] h-[196px] bg-gray-900 top-[1px] left-[2px] rounded-md"></div>
        </div>
    )
}

export default BorderDiv