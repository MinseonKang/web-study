import "./App.css";
import Counter from "./Counter";
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";
import CounterFunction2 from "./CounterFunction2";
import SayFunction from "./SayFunction";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <hr />
      <SayFunction></SayFunction>
      <hr />
      <CounterFunction value="일 더하기"></CounterFunction>
      <hr />
      <h1>state 실습 1</h1>
      <CounterClass></CounterClass>
      <hr />
      <h1>state 실습 2</h1>
      <CounterFunction2></CounterFunction2>
    </div>
  );
}

export default App;
