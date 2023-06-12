import { Parallax } from "react-scroll-parallax";
import profilePic from "../assets/profile_pic.png";
import { Link } from "react-router-dom";

export default function AboutSlide() {
  return (
    <div className="flex grow flex-col md:flex-row items-center justify-center h-screen">
      <div className="grow w-full h-full bg-white text-center">
        <Parallax opacity={[0, 1]}>
          <h1 className="animate-fade-in text-5xl lg:text-7xl text-cyan-600">
            <span className="text-8xl lg:text-9xl content-start">A</span>
            <span className=" mb-80">BOUT</span>
          </h1>
          <p className="m-10 text-xl lg:text-6xl text-violet-900">
            <span className="text-3xl lg:text-8xl">L</span>orem ipsum dolor, sit
            amet consectetur adipisicing elit. Nihil odit iusto facilis officiis
            asperiores non quia labore corporis, nobis dolorem consequuntur
            rerum autem fuga ipsa deserunt ipsum, sit commodi tempore?
          </p>
          <div className="">
            <Link to="/about">
              <button
                type="button"
                className="bg-teal-400 border-black border-b-2 p-2 font-normal rounded-md text-black"
              >
                READ MORE
              </button>
            </Link>
          </div>
        </Parallax>
      </div>
      <div className=" flex items-center justify-center w-full h-full bg-black">
        <img alt="Michael Kilcorse" src={profilePic} />
      </div>
    </div>
  );
}
