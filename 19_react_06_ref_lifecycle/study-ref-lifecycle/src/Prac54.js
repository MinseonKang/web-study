import { useState, useRef } from "react";

const Prac54 = () => {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  // comment list state
  const [comments, setComments] = useState([
    { writer: "민선", title: "리액트 잼따" },
  ]);

  const writeRef = useRef();
  const titleRef = useRef();

  const checkInputValue = () => {
    // 실습54. ref 실습
    // ref를 이용하여 input에 값이 입력되지 않으면 input에 focus 추가
    if (inputWriter.trim().length < 1) {
      writeRef.current.focus();
      return false;
    }
    if (inputTitle.trim().length < 1) {
      titleRef.current.focus();
      return false;
    }

    return true;
  };

  const addComment = () => {
    if (!checkInputValue()) {
      // !false
      return;
    }

    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    setComments([...comments, newComment]);
    setInputTitle("");
    setInputWriter("");
  };

  return (
    <>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
          ref={writeRef}
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
        />
        <br />
        <label htmlFor="title">제목: </label>
        <input
          ref={titleRef}
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />
        <br />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((c, idx) => {
            return (
              <tr key={idx + 1}>
                <th>{idx + 1}</th>
                <th>{c.title}</th>
                <th>{c.writer}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Prac54;
