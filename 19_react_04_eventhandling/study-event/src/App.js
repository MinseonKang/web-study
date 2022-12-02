import "./App.css";
import ClassBind from "./ClassBind";
import Handler from "./Handler";
import HandlerPrac1 from "./HandlerPrac1";
import HandlerPrac2 from "./HandlerPrac2";
import NumberTest from "./NumberTest";
import SyntheticEvent from "./SyntheticEvent";

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />
      <NumberTest />
      <hr />
      <ClassBind />
      <hr />
      <h1>이벤트 핸들러 실습</h1>
      <Handler />
      <hr />
      <h1>이벤트 핸들러 실습 49</h1>
      <HandlerPrac1 />
      <hr />
      <h1>이벤트 핸들러 실습 50</h1>
      <HandlerPrac2 />
    </div>
  );
}

export default App;
