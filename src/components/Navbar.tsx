import { useEffect, useState } from "react"
import Icon from "./IconDisplay"

interface NavbarProps { 
    activeIconName: string;
    changeActiveIcon: (iconName: string) => void;
}
const Navbar = ({activeIconName, changeActiveIcon}:NavbarProps) => {
    const [iconDetails, setIconDetails] = useState<{ iconName: string; isActive: boolean}[]>([
        { iconName: "home", isActive: false},
        { iconName: "about", isActive: false},
        { iconName: "project", isActive: false},
        { iconName: "contact", isActive: false },
        // Add more icons here if needed
    ]);
    const activeIcon = (iconName: string) => {
        changeActiveIcon(iconName);
        const updatedIcons = iconDetails.map(icon => {
            if (icon.iconName === iconName) {
                return { ...icon, isActive: true };
            } else {
                return { ...icon, isActive: false };
            }
        });
        setIconDetails(updatedIcons);
    }

    useEffect(() => { 
         const updatedIcons = iconDetails.map(icon => {
            if (icon.iconName === activeIconName) {
                return { ...icon, isActive: true };
            } else {
                return { ...icon, isActive: false };
            }
        });
        setIconDetails(updatedIcons);
     },[activeIconName])

    return (

        <div className="w-full lg:w-fit lg:h-full lg:flex items-center justify-center lg:mx-10 fixed bottom-0 lg:relative z-50">
            <div className={`h-fit lg:py-5 w-full lg:w-18 flex lg:flex-col justify-center items-center overflow-hidden m-auto`}>
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