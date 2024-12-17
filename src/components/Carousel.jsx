import { useState } from "react";

function Carousel() {
  const images = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
  ];
  const [counter, setCounter] = useState(0);
  const incrementValue = () => setCounter(counter + 1);
  const decrementValue = () => setCounter(counter - 1);

  return (
    <div className="carousel">
      <button onClick={counter > 0 && decrementValue}>Left</button>
      <img src={images[counter]} alt="Portrait" />
      <button onClick={counter < 3 && incrementValue}>Right</button>
    </div>
  );
}

export default Carousel;
