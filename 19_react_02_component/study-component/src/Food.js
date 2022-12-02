import React from "react";
import PropTypes from "prop-types";

const Food = (props) => {
  const { name } = props;
  const red = {
    color: "red",
  };
  return (
    <div>
      내가 좋아하는 음식은 <b style={red}>{name}</b>입니다.
    </div>
  );
};

// props 기본값 설정해 주기
Food.defaultProps = {
  name: "두부",
  students: 0,
};

// defaultProps 타입 설정해 주기
Food.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Food;
