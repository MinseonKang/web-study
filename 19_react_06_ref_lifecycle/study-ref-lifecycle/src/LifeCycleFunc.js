import { useState, useEffect } from "react";

// 자식 컴포넌트
const MyComponent = (props) => {
  const { number } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    // Mount 시점에 실행
    console.log("⭕️ mount!");

    // Unmount 시점에 실행 : effect 함수에서 함수를 리턴할 때
    return () => {
      console.log("❌ unmount!");
    };
  }, []);

  // Mount & Update 시점에 실행
  useEffect(() => {
    console.log("⏱ update!");
  });

  // text가 바뀔 때(Update)만 실행
  useEffect(() => {
    console.log("🧨 only text state update! >>> ", text);
  }, [text]);

  return (
    <>
      <p>MyComponent {number}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

// 부모 컴포넌트
const LifeCycleFunc = () => {
  const [number, setNumber] = useState(1);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(number + 1);
  };

  const changeVisibleState = () => {
    setVisible(!visible);
  };

  return (
    <>
      <h3>함수형 컴포넌트에서 LifeCycle 이해하기</h3>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>ON/OFF</button>
      {visible && <MyComponent number={number} />}
      {/* 자식한테 number props를 넘겨줌 */}
    </>
  );
};

export default LifeCycleFunc;
