import { ParallaxBanner } from "react-scroll-parallax";
import Sol from "./Sol";
import frontImg from "../assets/2.png";
import backImg from "../assets/1.png";
import aboutPlanet from "../assets/planets/2.svg";
import portfolioPlanet from "../assets/planets/3.svg";
import contactPlanet from "../assets/planets/4.svg";
export default function HeroIntro() {
  return (
    <>
      <ParallaxBanner
        layers={[
          { image: backImg, speed: -50 },
          {
            speed: -25,
            children: (
              <>
                <div className="absolute animate-fade-in m-2 inset-0 flex flex-col text-center items-center font-thin tracking-wider justify-center">
                  <Sol />
                  <div className="planets absolute h-[40%] top-[35%]">
                    <div className="absolute planet-rotate left-10 -translate-y-60">
                      <img src={aboutPlanet} />
                      <h1 className="text-white text-2xl">ABOUT</h1>
                    </div>
                    <div className="absolute planet-rotate  right-20 translate-y-60">
                      <img src={portfolioPlanet} />
                      <h1 className="text-white rotate-180 text-2xl">
                        PORTFOLIO
                      </h1>
                    </div>
                    <div className="absolute  right-64 -translate-y-80">
                      <img src={contactPlanet} />
                      <h1 className="text-white rotate-[-106deg] translate-x-20 -translate-y-8 text-2xl">
                        CONTACT
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            ),
          },
          { image: frontImg, speed: 5, className: "stars" },
        ]}
        className="h-screen w-screen"
      />
    </>
  );
}
