import { useState } from "react";

function DiscoButton() {
  // Coloring
  const [btnColor, setBtnColor] = useState("white");
  const randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
  const changeColor = () => setBtnColor(randomHsl);
  // Increments
  const [counter, setCounter] = useState(0);
  const incrementValue = () => setCounter(counter + 1);
  // Combined two functions
  const combinedFunc = () => {
    changeColor();
    incrementValue();
  };

  return (
    <button style={{ backgroundColor: btnColor }} onClick={combinedFunc}>
      {counter} Likes
    </button>
  );
}

export default DiscoButton;
