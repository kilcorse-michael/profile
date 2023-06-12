import { useState } from "react";
import HeroIntro from "./components/HeroIntro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroIntro />
    </>
  );
}

export default App;
