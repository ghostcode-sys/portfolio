import "./Loading.css";

const Loading = () => {

    const divs = [];
    for(let i=0; i<36; i++){
        let rn = 1*Math.random() 
        divs.push(<div key={i} className={`absolute w-60 aspect-square rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900`}
            style={{transform: `rotate(${i * 10}deg)`}}>
            <div className="absolute w-10 h-0.5 rounded-full bg-white  shadowboxTeal top-1/2 left-1/2" style={{transform: `translateX(${rn + 6}rem)`}}></div>
        </div>);
    }
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative">
        {divs}
        <div className="w-40 aspect-square rounded-full border-2 border-white shadowbox absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-50 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 spinLoaderFirst"></div>
          <div className="absolute w-50 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 spinLoaderSecond"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
