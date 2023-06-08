import { useState } from "react";
import frontGroundImg from "./assets/1.png";
import profileImg from "./assets/profile.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <img
      className=" max-[400px]:rotate-90 max-[400px]:h-screen max-[400px]:w-auto max-h-full w-auto"
      src={frontGroundImg}
    ></img>
  );
}

export default App;
