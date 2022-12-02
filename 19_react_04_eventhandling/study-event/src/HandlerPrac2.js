import { useState } from "react";

const HandlerPrac2 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "사라져라" : "보여라"}
      </button>
      {/* <h2>{visible ? "안녕하세요" : ""}</h2> */}
      <h2>{visible && "안녕하세요"}</h2> {/* 단축회로평가 */}
    </div>
  );
};

export default HandlerPrac2;
