import { useState } from "react";

const SyntheticEvent = () => {
  const [text, setText] = useState("초기값");

  const printSyntheticEvent = (e) => console.log(e);
  const setInputValue = (e) => setText(e.target.value);
  const showAlert = () => {
    alert(`input 입력값은 ${text}!!!`);
    setText("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      showAlert();
    }
  };

  return (
    <div>
      <button onClick={printSyntheticEvent}>SyntheticEvent 확인</button>
      <br />

      <input
        type="text"
        placeholer="입력하세요"
        onChange={setInputValue}
        onKeyPress={onKeyPress}
        value={text}
      />
      <button onClick={showAlert}>버튼</button>
    </div>
  );
};

export default SyntheticEvent;
