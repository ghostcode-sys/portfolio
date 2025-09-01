import "./ToolName.css"
interface ToolNameProps {
    active: boolean;
    name : string;
    color: string;
    makeActive : (toolName: string ) => void;
}

const ToolName = ({active, name, color, makeActive}: ToolNameProps) => {
    const makeActiveCurrent = () => {
        makeActive(name);
    } 

    const defaultButtonStyle = "bg-white/10 border border-white/30 p-2 rounded-md w-fit h-fit block m-2 cursor-pointer hover:font-bold "
    const activeButtonStyle = `${color} border border-white/30 p-2 rounded-md w-fit h-fit m-2 block cursor-pointer font-bold wiggle`

    return (
        <div onClick={makeActiveCurrent} className={active? activeButtonStyle: defaultButtonStyle  }>{name}</div>
    )
}
export default ToolName