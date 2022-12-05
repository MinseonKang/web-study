import { useRef, useState } from "react";

const RefSmaple2 = () => {
  // 1. ref 객체 만들기
  const id = useRef(1); // 기본 값 1 설정

  const plusId = () => {
    // 2. ref.current를 로컬 변수로 사용
    id.current += 1;
    console.log(id.current);
  };

  /////////////////////////////////
  const [num, setNum] = useState(1);

  const plusNum = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h2>Ref: {id.current}</h2>
      <button onClick={plusId}>PLUS Ref</button>
      <h2>State: {num}</h2>
      <button onClick={plusNum}>PLUS State</button>
    </>
  );
};

export default RefSmaple2;
