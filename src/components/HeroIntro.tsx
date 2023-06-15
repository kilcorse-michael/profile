import { ParallaxBanner } from "react-scroll-parallax";
import { Link } from "react-router-dom";
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
          { image: backImg, speed: -50, className: "space" },
          { image: frontImg, speed: 5, className: "stars" },
          {
            children: (
              <>
                <div className="absolute animate-fade-in m-2 inset-0 flex flex-col text-center items-center font-thin tracking-wider justify-center">
                  <Sol />
                  <div className="flex absolute planets">
                    <Link to="/about">
                      <div className="w-48 hover:drop-shadow-glow relative -top-72 -left-96">
                        <img className="" src={aboutPlanet} />
                        <h1 className="text-white text-2xl">ABOUT</h1>
                      </div>
                    </Link>
                    <div className="relative hover:drop-shadow-glow -bottom-72 -left-96 w-36">
                      <img src={portfolioPlanet} />
                      <h1 className="text-white text-2xl">PORTFOLIO</h1>
                    </div>
                    <div className="w-36  hover:drop-shadow-glow relative -right-72">
                      <img src={contactPlanet} />
                      <h1 className="text-white text-2xl">CONTACT</h1>
                    </div>
                  </div>
                </div>
              </>
            ),
          },
        ]}
        className="h-screen w-screen"
      />
    </>
  );
}
