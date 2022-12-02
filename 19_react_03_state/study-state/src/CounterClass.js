// 클래스형 컴포넌트에서 state 다루기
import React from "react";

class CounterClass extends React.Component {
  state = {
    number: 0,
  };

  render() {
    // state 데이터는 this.state로 접근 가능
    const { number } = this.state; // { number: 0 }

    return (
      <div>
        <h1>{number}</h1>
        <br />
        {/* this.setState 이용해 state 값 변경 가능 */}
        <button onClick={() => this.setState({ number: number + 2 })}>
          +2
        </button>
        <button onClick={() => this.setState({ number: number - 1 })}>
          -1
        </button>
      </div>
    );
  }
}

export default CounterClass;
