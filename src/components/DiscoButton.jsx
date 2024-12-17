import { useState } from "react";

function DiscoButton() {
  // Coloring
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [btnColor, setBtnColor] = useState(0);
  const changeColor = () => setBtnColor(btnColor < colors.length - 1 ? btnColor + 1 : 0);

  // Increments
  const [counter, setCounter] = useState(0);
  const incrementValue = () => setCounter(counter + 1);

  // Combined two functions
  const combinedFunc = () => {
    changeColor();
    incrementValue();
  };

  return (
    <button style={{ backgroundColor: colors[btnColor] }} onClick={combinedFunc}>
      {counter} Likes
    </button>
  );
}

export default DiscoButton;
