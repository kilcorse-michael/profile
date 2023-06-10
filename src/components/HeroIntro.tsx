import { ParallaxBanner } from "react-scroll-parallax";
import frontImg from "../assets/2.png";
import backImg from "../assets/1.png";

export default function HeroIntro() {
  return (
    <>
      <ParallaxBanner
        layers={[
          { image: backImg, speed: -50 },
          {
            speed: -25,
            children: (
              <div className="absolute animate-fade-in m-2 inset-0 flex flex-col text-center items-center justify-center">
                <p className="text-slate-400 mb-3 tracking-wide">
                  Hello! My name is
                </p>
                <h1 className=" text-6xl md:text-8xl text-white tracking-wider font-thin">
                  MICHAEL KILCORSE
                </h1>
                <p className="text-slate-400 mb-3 tracking-wide -mb-1">
                  I am a{" "}
                </p>
                <h1 className="text-2xl md:text-4xl text-white font-thin">
                  Designer & Developer
                </h1>
                <p className="text-slate-400 text-sm mb-3 tracking-wider">
                  (and I really like space)
                </p>
              </div>
            ),
          },
          { image: frontImg, speed: 5 },
        ]}
        className="h-screen w-screen"
      />
      <div className="absolute flex text-center inset-0"></div>
    </>
  );
}
