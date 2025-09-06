import "./Topbar.css"
import logo from "../assets/logo.png"
interface Props {
  visiblity: boolean;
}

const Topbar = ({visiblity}: Props) => {
  return (
    <div className="w-full h-fit flex items-center justify-between pr-5 ">
      <div className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600 text-4xl ${visiblity? "showName": "hideName"}`}>
        PRASHANT CHANDEL
      </div>
      <img src={logo} alt="logo" className="w-14 h-10 ml-3" />
    </div>
  )
}

export default Topbar