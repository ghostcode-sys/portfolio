import "./Loading.css"

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
        <div className="w-40 aspect-square rounded-full border-2 border-white shadowbox relative">
            <div className="absolute w-50 h-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900"></div>
            <div className="absolute w-50 h-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 rotate-90"></div>
        </div>
    </div>
  )
}

export default Loading