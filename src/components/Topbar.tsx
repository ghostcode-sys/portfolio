import "./Topbar.css"
import logo from "../assets/logo.png"
interface Props {
  visiblity: boolean;
}

const Topbar = ({visiblity}: Props) => {
  return (
    <div className="w-full h-fit flex items-center justify-between lg:pr-5 px-1">
      <div className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600 lg:text-4xl ${visiblity? "showName": "hideName"}`}>
        PRASHANT CHANDEL
      </div>
      <img src={logo} alt="logo" className="lg:w-14 lg:h-10 lg:mr-3 w-7 aspect-square" />
    </div>
  )
}

export default Topbar