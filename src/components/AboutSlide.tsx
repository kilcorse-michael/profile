import { Parallax } from "react-scroll-parallax";
import profilePic from "../assets/profile_pic.jpg";
import { Link } from "react-router-dom";

export default function AboutSlide() {
  return (
    <div className="flex grow flex-col md:flex-row items-center justify-center h-screen">
      <div className="grow w-full h-full bg-white text-center">
        <Parallax opacity={[0, 1]}>
          <h1 className="animate-fade-in text-5xl text-cyan-600">ABOUT</h1>
          <p className="m-10 text-xl lg:text-6xl text-violet-900">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil odit
            iusto facilis officiis asperiores non quia labore corporis, nobis
            dolorem consequuntur rerum autem fuga ipsa deserunt ipsum, sit
            commodi tempore?
          </p>
          <div className="">
            <Link to="/about">
              <button type="button" className="bg-teal-400 border-black border-b-2 p-2 font-normal rounded-md text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </Parallax>
      </div>
      <div className=" flex w-full h-full bg-black">
        <img src={profilePic} />
      </div>
    </div>
  );
}
