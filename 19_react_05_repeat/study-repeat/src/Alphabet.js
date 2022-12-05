import { useState } from "react";

const Alphabet = () => {
  const [alphabets, setAlphabets] = useState([
    // alphabets 배열 초기값 설정
    // 배열(state)에 고유 id를 갖도록 설정
    { id: 1, alpha: "k" },
    { id: 2, alpha: "d" },
    { id: 3, alpha: "t" },
    { id: 4, alpha: "3" },
    { id: 5, alpha: "r" },
    { id: 6, alpha: "d" },
  ]);

  const [inputAlpha, setInputAlpha] = useState("");
  const [nextId, setNextId] = useState(7); // 새로운 항목 추가를 위한 id 값

  const addAlpha = () => {
    // 기존의 alphabets state에 새로 입력된 input 값 추가
    const newAlpha = alphabets.concat({
      id: nextId,
      alpha: inputAlpha,
    });
    setNextId(nextId + 1); // 다음 항목 id를 위해 1 증가
    setAlphabets(newAlpha); // alphabets state에 추가 newAlpha 추가
    setInputAlpha(""); // input 초기화
  };

  const deleteAlpha = (id) => {
    // console.log(">>>", id);
    const result = alphabets.filter((a) => a.id !== id); // a.id와 id가 달라야 true
    setAlphabets(result);
  };

  return (
    <div>
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => setInputAlpha(e.target.value)}
      />
      <button onClick={addAlpha}>추가하기</button>

      <ul>
        {alphabets.map((a) => {
          // a => { id: x, alpha: "y" },
          return (
            <li
              key={a.id}
              onDoubleClick={() => {
                deleteAlpha(a.id);
              }}
            >
              {a.alpha}
            </li>
          ); // map을 사용할 땐 key를 설정해 주는 것을 권장
        })}
      </ul>
    </div>
  );
};

export default Alphabet;
