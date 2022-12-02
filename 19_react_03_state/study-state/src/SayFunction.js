import { useState } from "react";

const SayFunction = () => {
  console.log(useState("welcome!")); // ['welcome!', ƒ]
  const [message, setMessage] = useState("welcome!");
  // 'welcome': 상태(state) 초기값
  // message: 메시지 상태
  // setMessage: message라는 state 값을 바꾸는 setter 함수

  const onClickEnter = () => setMessage("안녕하세요?");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  return (
    <>
      <h1>{message}</h1>
      <button onClick={onClickEnter}>입장</button>{" "}
      {/* 함수명 옆에 괄호를 안 붙여야 함수를 바로 호출함! */}
      <button onClick={onClickLeave}>퇴장</button>
    </>
  );
};

export default SayFunction;
