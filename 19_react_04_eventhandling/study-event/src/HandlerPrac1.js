import { useState } from "react";

const HandlerPrac1 = () => {
  const [message, setMessage] = useState("검정");
  const [color, setColor] = useState("black");

  const changeMessageRed = () => {
    setColor("red");
    setMessage("빨간");
  };

  const changeMessageBlue = () => {
    setColor("blue");
    setMessage("파란");
  };

  return (
    <div>
      <h1 style={{ color }}>{message}색 글씨</h1>
      <button onClick={changeMessageRed}>빨간색</button>
      <button onClick={changeMessageBlue}>파란색</button>
    </div>
  );
};

export default HandlerPrac1;
