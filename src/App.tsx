import { useState } from "react";
import frontGroundImg from "./assets/1.png";
import profileImg from "./assets/profile.jpg";
import HeroIntro from "./components/HeroIntro";
import AboutSlide from "./components/AboutSlide";
import PhiloSlide from "./components/PhiloSlide";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroIntro />
      <AboutSlide />
      <PhiloSlide />
    </>
  );
}

export default App;
