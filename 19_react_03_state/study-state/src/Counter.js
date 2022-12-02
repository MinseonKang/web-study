// 클래스형 컴포넌트에서 state 다루기
import React from "react";

class Counter extends React.Component {
  // 기존 버전
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       number: 0,
  //     };

  // 현재 버전
  state = {
    number: 0,
  };

  render() {
    // state 데이터는 this.state로 접근 가능
    const { number } = this.state; // { number: 0 }

    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            alert(number);
          }}
        >
          alert
        </button>
        <br />
        {/* this.setState 이용해 state 값 변경 가능 */}
        <button onClick={() => this.setState({ number: 7 })}>
          Set Number 7
        </button>
        <br />
        <button onClick={() => this.setState({ number: number + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
