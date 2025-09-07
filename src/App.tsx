import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Backgound from "./components/Background";
import Content from "./components/Content";
import Topbar from "./components/Topbar";
import axios from "axios";
import "./App.css";
import Loading from "./components/Loading";
function App() {
  const [showTopBar, setShowTopBar] = useState(false);
  const [activeIconName, setActiveIconName] = useState("home");
  const [loading, setLoading] = useState(true);

  const changeTopBarVisibility = (isVisible: boolean) => {
    setShowTopBar(isVisible);
  };

  const changeActiveIcon = (iconName: string) => {
    setActiveIconName(iconName);
  };

  useEffect(() => {
    // Run in background, errors are ignored
    (async () => {
      try {
        await axios.get("/logIp");
      } catch (e) {
        // Silently ignore errors
        console.log(e);
      }
    })();
  }, []);

  return (
    loading ? <div className="w-screen lg:min-w-220 h-dvh lg:h-screen box-border overflow-hidden relative text-white font-mono bg-gray-900">
     <Loading/>
    </div> :
    <div className="w-screen lg:min-w-220 h-dvh lg:h-screen box-border overflow-hidden relative text-white font-mono">
      <Backgound />
      <div className="w-full h-full lg:flex lg:flex-row lg:px-2 lg:py-5 box-border">
        <Navbar
          activeIconName={activeIconName}
          changeActiveIcon={changeActiveIcon}
        />
        <div className="w-full h-dvh lg:h-full border-box over-flow-auto .no-scrollbar">
          <Topbar visiblity={showTopBar} />
          <Content
            changeTopBarVisibility={changeTopBarVisibility}
            activePane={activeIconName}
            changeActiveIcon={changeActiveIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
