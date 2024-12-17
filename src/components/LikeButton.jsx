import { useState } from "react";

function LikeButton({ color }) {
  const [counter, setCounter] = useState(0);
  const incrementValue = () => setCounter(counter + 1);

  return (
    <button style={{ backgroundColor: color }} onClick={incrementValue}>
      {counter} Likes
    </button>
  );
}

export default LikeButton;
