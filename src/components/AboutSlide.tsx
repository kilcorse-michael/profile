import { Parallax } from "react-scroll-parallax";

export default function AboutSlide(){
    return(
        <div className="flex grow flex-col md:flex-row items-center justify-center h-screen">
            <div className="grow w-full h-full bg-orange-500 text-center">
                <Parallax opacity={[0, 1]}><h1 className="animate-fade-in text-5xl text-white">About</h1></Parallax>
            </div>
            <div className="grow w-full h-full bg-black"></div>
        </div>
    );
}