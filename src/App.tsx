import { useState } from 'react'
import Navbar from './components/Navbar'
import Backgound from './components/Background'
import Content from './components/Content'
import Topbar from './components/Topbar'
import './App.css'
function App() {
   const [showTopBar, setShowTopBar] = useState(false);
   const [activeIconName, setActiveIconName] = useState("home");

   const changeTopBarVisibility = (isVisible: boolean) => {
     setShowTopBar(isVisible);
   }

   const changeActiveIcon = (iconName: string) => {
     setActiveIconName(iconName);
   } 

  return (
    <div className='w-screen lg:min-w-220 lg:h-screen box-border overflow-hidden relative text-white font-mono'>
      <Backgound/>
      <div className='w-full h-full flex flex-row px-2 py-5 box-border'>
      <Navbar activeIconName={activeIconName} changeActiveIcon={changeActiveIcon}/>
      <div className='w-full h-full border-box over-flow-auto .no-scrollbar'>
        <Topbar visiblity={showTopBar}/>
        <Content changeTopBarVisibility={changeTopBarVisibility} activePane={activeIconName} changeActiveIcon={changeActiveIcon}/>
      </div>
      </div>
    </div>
  )
}

export default App
