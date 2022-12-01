import "./App.css";
// import grass from "./grass.png";
import React from "react";

function App() {
  const myName = "Minseon";
  let flag = true;
  let txt = "";

  if (flag) {
    txt = "true입니다";
  } else {
    txt = "false입니다";
  }

  const styles = {
    h2: { backgroundColor: "blue", fontSize: "40px", color: "white" },
    p: { backgroundColor: "red", fontSize: "30px", color: "white" },
  };

  const name = "새해";
  const animal = "강아지";

  const a = 1000;
  const b = 100;

  const input = {
    margin: "10px",
    textAlign: "center",
  };

  const title = "리액트 짱!";

  return (
    // JSX 문법
    // 1. 컴포넌트에 여러 요소 있으면 반드시 부모 요소 하나로 감싸야 한다.
    <div className="App">
      {/* 2. {} 감싸면 자바스크립트 표현식 사용 가능 */}
      {/* 3. style 속성
        - dom 요소에 스타일 적용시 문자열 x -> "객체" 사용
        - 스타일 이름 중 하이픈(-) 포함시 camelCase 작성해야 함
      */}
      <h2 style={styles.h2}>안녕? {myName}</h2>
      <p>{name === "Minseon" ? "반가워" : "누구세요?"}</p>
      <p style={styles.p}>{txt}</p>
      <p>{flag ? <h3>true입니다</h3> : <h3>false입니다</h3>}</p>
      <p>{flag && <h3>true일 때만 보이는 메시지입니다.</h3>}</p>

      {/* 4. classNmae 사용
      - class 속성이 아닌 className 속성을 사용
      */}
      <h4 className="hello" onClick={() => alert("방가워요!")}>
        안녕하세요!
      </h4>
      {/* 5. 종료 태그가 없는 태그의 사용
        - 기존 html 태그에서 종료 태그가 없더라도 종료 태그를 작성해야 함
        - or self-closing
        - 잘못된 예) <input>, <br>
        - 올바른 예) <input />, <br />
      */}
      <hr />
      {/* 실습 1 */}
      <h1>실습1 - 1</h1>
      <div>
        이것은 div입니다.
        <h3>이것은 div 안에 있는 h3태그입니다.</h3>
      </div>
      <hr />
      <h1>실습1 - 2</h1>
      <p>제 반려동물의 이름은 {name}입니다.</p>
      <p>
        {name}는 {animal}입니다.
      </p>
      <hr />
      <h1>실습1 - 3</h1>
      <div>{3 + 5 === 8 ? <p>정답입니다!</p> : <p>틀렸습니다!</p>}</div>
      <hr />
      <h1>실습1 - 4</h1>
      <div>{a > b && <p>a가 b보다 큽니다.</p>}</div>
      <hr />
      <h1>실습1 - 5</h1>
      <div className="test">{title}</div>
      <div>
        <span>아이디:</span>
        <input type="text" style={input} />
        <br />
        <span>비밀번호:</span>
        <input type="password" style={input} />
      </div>
      <hr />
      <h1>실습1 - 6</h1>
      <div className="box">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
      <hr />
      <h1>실습 2</h1>
      {/* <div className="circle1 position-absolute">
        <div className="eye1 position-absolute">
          <div className="eye2 position-absolute"></div>
        </div>
      </div>
      <div className="circle2 position-absolute"></div>
      <div className="circle3 position-absolute"></div>
      <div className="circle4 position-absolute"></div>
      <div className="circle5 position-absolute"></div>
      <div className="grass position-absolute">
        <img className="grass" src={grass} alt="바닥 잔디" />
      </div> */}
    </div>
  );
}

export default App;
