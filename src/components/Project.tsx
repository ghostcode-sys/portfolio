import "./Project.css"
import Card from "./Card"

type colorArr = "green" | "purple" | "lime" | "pink" | "orange"
interface CardProps {
    color: colorArr;
    link: string;
    projectName: string;
    description: string;
    description2: string;
    tags: string;
}

const projects: CardProps[] = [
  {
    color: "green",
    link: "https://github.com/yourusername/api-history",
    projectName: "API History",
    description:
      "A Dockerized API testing tool that validates endpoints, logs results to a database, and dynamically generates Swagger documentation from test outcomes.",
    description2:
      "Designed for developers and QA engineers to streamline API lifecycle management, providing automated regression testing and monitoring with minimal setup.",
    tags: "GO, Docker, React, MongoDB",
  },
  {
    color: "purple",
    link: "https://github.com/yourusername/securechat",
    projectName: "SecureChat",
    description:
      "A secure messaging app that uses Steganography to hide encrypted messages within images.",
    description2:
      "Built with privacy-first principles, it integrates end-to-end encryption and innovative message concealment, making it resilient against surveillance and interception.",
    tags: "React, Node.js, SocketIO",
  },
  {
    color: "lime",
    link: "https://github.com/yourusername/bingo",
    projectName: "Bingo",
    description: "A real-time, socket-based multiplayer game.",
    description2:
      "Features custom room creation, live score updates, and cross-device synchronization for an engaging and competitive gaming experience.",
    tags: "React, SocketIO, Node.js",
  },
  {
    color: "pink",
    link: "https://github.com/yourusername/portfolio",
    projectName: "Portfolio",
    description:
      "A professional portfolio to showcase personal projects and technical skills.",
    description2:
      "Responsive, modern UI with smooth animations and SEO optimizations. Acts as a central hub to present experience, achievements, and coding expertise.",
    tags: "React, TypeScript, TailwindCSS, Go",
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
  },
];


const Project = () => {
    return (
        <div className="w-full h-full">
            <div className='font-extrabold text-violet-600 text-6xl h-fit w-fit m-auto '
                style={{ textShadow: '2px 2px 8px rgba(99,102,241,0.5)' }}
            >Featured Projects</div>
            {projects.map((val, idx)=> {
                return <Card key={idx} color={val.color}  tags={val.tags} description={val.description} description2={val.description2} projectName={val.projectName} link={val.link}/>
            })}
        </div>
    )
}

export default Project