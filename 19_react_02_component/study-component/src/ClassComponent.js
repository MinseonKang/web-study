import React from "react";
import PropTypes from "prop-types";

class ClassComponent extends React.Component {
  // 클래스형 컴포넌트에선 render() 필수
  render() {
    const { name, students } = this.props;

    const teacher = "Sean";

    return (
      <>
        <h1>Hello, {teacher}</h1>
        <p>이것은 Class Component입니다!</p>
        <p>
          {name} 수업시간! 학생수는 {students}
          명입니다.
        </p>
      </>
    );
  }

  static defaultProps = {
    name: "헐",
  };

  static propTypes = {
    name: PropTypes.string,
    students: PropTypes.number.isRequired,
  };
}

// 코드 23~30번 줄과 동일
ClassComponent.defaultProps = {
  name: "야호",
  students: 10,
};

ClassComponent.propTypes = {
  name: PropTypes.string,
  students: PropTypes.number.isRequired,
};

export default ClassComponent;
