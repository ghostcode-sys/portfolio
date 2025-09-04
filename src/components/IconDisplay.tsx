import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ConstructionIcon from '@mui/icons-material/Construction';
import ContactMailIcon from '@mui/icons-material/ContactMail';

interface IconDisplayProps {
  iconName: string;
  isActive: boolean;
  Activate: (x: string) => void;
}

const IconDisplay = ({ iconName, isActive, Activate }: IconDisplayProps) => {


  const defaultBoxStyle: string = "flex items-center justify-center w-14 h-15 border-neutral-600 m-auto rounded-md my-4 hover:border-white text-neutral-600 hover:text-white hover:cursor-pointer";

  const activeBoxStyle: string = `flex items-center justify-center w-15 h-15 m-auto rounded-md my-4 text-white hover:cursor-pointer bg-radial-[at_50%_50%] from-white/20 to-transparent `;

  const activeIcon = () => {
    console.log("Icon clicked:", iconName);
    Activate(iconName)
  }

  return (
    <div className={isActive ? activeBoxStyle : defaultBoxStyle}>
      {iconName === "home" ? <HomeIcon sx={{ fontSize: 30 }} onClick={activeIcon} /> : 
      iconName === "about" ? <PersonIcon sx={{ fontSize: 30 }} onClick={activeIcon} /> : 
      iconName === "project" ? <ConstructionIcon sx={{ fontSize: 30 }} onClick={activeIcon} /> : 
      iconName === "contact" ? <ContactMailIcon sx={{ fontSize: 30 }} onClick={activeIcon} /> : 
      <div onClick={activeIcon}>{iconName}</div>}
    </div>
  );
}

export default IconDisplay