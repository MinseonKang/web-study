import "./App.css";
import Book from "./Book";
import Button from "./Button";
import ClassComponent from "./ClassComponent";
import ConsoleButton from "./ConsoleButton";
import Food from "./Food";
import FuncComponent from "./FuncComponent";

function App() {
  return (
    <div className="App">
      <ClassComponent></ClassComponent>
      <ClassComponent name="KDT 3rd" students={100} />
      <hr />

      <FuncComponent name="KDT 3기" students={25}></FuncComponent>
      <FuncComponent />
      <hr />
      <Button></Button>
      <Button link="https://www.google.com">구글</Button>
      <Button link="https://www.daum.net">다음</Button>
      <hr />
      <h1>props 실습 1</h1>
      <Food></Food>
      <hr />
      <h1>props 실습 2</h1>
      <Book />
      <hr />
      <h1>props 실습 3</h1>
      <ConsoleButton text="이건 기본 text props입니다."></ConsoleButton>
    </div>
  );
}

export default App;
