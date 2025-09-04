import { useState } from "react"
import Icon from "./IconDisplay"

const Navbar = () => {
    const [iconDetails, setIconDetails] = useState<{ iconName: string; isActive: boolean}[]>([
        { iconName: "home", isActive: true},
        { iconName: "about", isActive: false},
        { iconName: "project", isActive: false},
        { iconName: "contact", isActive: false },
        // Add more icons here if needed
    ]);
    const activeIcon = (iconName: string) => {

        const updatedIcons = iconDetails.map(icon => {
            if (icon.iconName === iconName) {
                return { ...icon, isActive: true };
            } else {
                return { ...icon, isActive: false };
            }
        });
        setIconDetails(updatedIcons);
    }
    return (

        <div className="w-fit h-full flex items-center justify-center mx-10">
            <div className={`h-fit py-5 w-18 flex flex-col justify-center items-center overflow-hidden m-auto`}>
                {
                    iconDetails.map((icon) => (
                        <Icon key={icon.iconName} iconName={icon.iconName} isActive={icon.isActive} Activate={activeIcon}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar