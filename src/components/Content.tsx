
import About from "./About";
import Welcome from "./Welcome"

interface ContentProps {
  changeTopBarVisibility: (isVisible: boolean) => void;
}

const Content = ({ changeTopBarVisibility }: ContentProps) => {

  return (
    <div className="h-full w-full relative  no-scrollbar mt-7">
      <div className="absolute top-0 left-0 w-full h-20" id="intersectArea"> </div>
      <div className="h-[90%] overflow-auto w-full relative  no-scrollbar pb-8" id="scrollArea">
        <Welcome changeTopBarVisibility={changeTopBarVisibility} />
        <About/>
      </div>
    </div>
  )
}

export default Content