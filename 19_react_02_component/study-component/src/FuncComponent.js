import React from "react";
import PropTypes from "prop-types";

// function FuncComponent() {}
const FuncComponent = (props) => {
  //   console.log(props); // { key: value }
  const { name, students } = props; // 구조분해할당
  // { name: 'KDT 3기', students: 25 }

  const teacher = "션";

  return (
    <div>
      <h1>안녕, {teacher}</h1>
      <p>여기는 Functional Component입니다!</p>
      <p>
        <b>{name}</b> 수업시간! 학생 수는 {students}명입니다.
      </p>
    </div>
  );
};

// props 기본값 설정해 주기
FuncComponent.defaultProps = {
  name: "헐",
  students: 0,
};

// defaultProps 타입 설정해 주기
FuncComponent.propTypes = {
  name: PropTypes.string,
  students: PropTypes.number.isRequired,
};

export default FuncComponent;
