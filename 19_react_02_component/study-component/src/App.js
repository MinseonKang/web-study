import "./App.css";
import Button from "./Button";
import ClassComponent from "./ClassComponent";
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
    </div>
  );
}

export default App;
