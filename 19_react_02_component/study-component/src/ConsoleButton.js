import React from "react";
import PropTypes from "prop-types";

class ConsoleButton extends React.Component {
  render() {
    const { text, valid } = this.props;

    return (
      <>
        <h3>{text}</h3>
        <button onClick={() => console.log("콘솔 띄우기 성공!")}>
          {valid}
        </button>
      </>
    );
  }
}

ConsoleButton.defaultProps = {
  valid: "콘솔 띄우기",
  text: "App 컴포넌트에서 넘겨준 text props입니다.",
};

ConsoleButton.propTypes = {
  valid: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default ConsoleButton;
