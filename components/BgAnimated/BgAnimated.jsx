const BgAnimated = () => {
    return(
        <div className="z-[-1]  flex flex-col items-center h-full bg-black text-gray-100 overflow-hidden">
            <div className="inset-0 z-0">
            <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
            <div className=" bottom-0 right-0 w-3/4 h-3/4 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
            <div className=" top-1/2 left-[10%] transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
            </div>
        </div>
    )
}

export default BgAnimated