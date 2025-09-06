import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormObject((prev) => ({ ...prev, [id]: value }));
  };


  const handleClick = (clickType: string) => {
    if (clickType === "email") {
      window.open("mailto:prashantchandel.me@gmail.com");
    } else if (clickType === "github") {
      window.open("https://github.com/ghostcode-sys");
    } else {
      window.open("https://www.linkedin.com/in/prashant-chandel-0a7032205");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormObject({ name: "", email: "", message: "" });
  }

 
  return (
    <div className="w-full h-full mt-10">
      <div
        className="font-extrabold text-orange-600 text-6xl h-fit w-fit m-auto "
        style={{ textShadow: "2px 2px 8px rgba(99,102,241,0.5)" }}
      >
        Contact Me
      </div>
      <div className="w-250 m-auto text-center mt-5">
        I am currently open to new opportunities and collaborations. Whether you
        have a project in mind, need assistance with development, or just want
        to connect, feel free to reach out!
      </div>
      <div className="flex items-center w-full h-fit mt-5">
        <div className="w-[25%] text-neutral-500">
          <div
            className="border rounded-md border-neutral-400 backdrop-blur-3xl w-full py-2 mt-4 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] transition-shadow duration-300 cursor-pointer m-auto flex items-center hover:text-cyan-700 hover:border-cyan-500"
            onClick={() => handleClick("email")}
          >
            <Email sx={{ fontSize: 40 }} />
            <div className="w-fit truncate showText ml-1" id="emailText">
              prashantchandel.me@gmail.com
            </div>
          </div>
          <div
            className="border rounded-md border-neutral-400 backdrop-blur-3xl w-full py-2 mt-4 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] transition-shadow duration-300 cursor-pointer m-auto flex items-center hover:text-cyan-700 hover:border-cyan-500"
            onClick={() => handleClick("linkedin")}
          >
            <LinkedIn sx={{ fontSize: 40 }} />
            <div className="w-fit truncate showText ml-1" id="linkedInText">
              linkedin.com/in/prashant-chandel-0a7032205
            </div>
          </div>
          <div
            className="border rounded-md border-neutral-400 backdrop-blur-3xl w-full py-2 mt-4 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]  transition-shadow duration-300 cursor-pointer m-auto flex items-center hover:text-cyan-700 hover:border-cyan-500"
            onClick={() => handleClick("github")}
          >
            <GitHub sx={{ fontSize: 40 }} />
            <div className="w-fit truncate showText ml-1" id="gitHubText">
              github.com/ghostcode-sys
            </div>
          </div>
        </div>
        <div className="h-full w-full mx-4">
          <div className="w-full text-neutral-400 text-4xl font-bold text-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            Query For Me...
          </div>
          <form className="border-4 border-neutral-500/50 rounded-xl p-4 my-4 bg-neutral-600/50" onSubmit={handleSubmit}>
            <div className="w-full">
              <input
                className="w-full outline-none bg-transparent border-b-2 border-neutral-500/50 focus:border-cyan-500/70 focus:text-cyan-400 p-2 mb-4"
                id="name"
                type="text"
                value={formObject.name}
                placeholder="Name"
                required
                onChange={handleTextChange}
              />
            </div>
            <div className="w-full">
              <input
                className="w-full outline-none bg-transparent border-b-2 border-neutral-500/50 focus:border-cyan-500/70 focus:text-cyan-400 p-2 mb-4"
                id="email"
                type="email"
                value={formObject.email}
                placeholder="Email"
                required
                onChange={handleTextChange}
              />
            </div>
            <div className="w-full">
              <textarea
                className="w-full outline-none bg-transparent border-b-2 border-neutral-500/50 focus:border-cyan-500/70 focus:text-cyan-400 p-2 mb-4"
                rows={5}
                id="message"
                value={formObject.message}
                placeholder="Message"
                required
                onChange={handleTextChange}
              />
            </div>
            <div className="w-full">
              <input 
                type="submit" 
                value="Submit"
                className="cursor-pointer border-2 px-6 py-2 rounded-xl text-white font-bold bg-blue-400/50 duration-300 hover:scale-105 transition-scale " 
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
