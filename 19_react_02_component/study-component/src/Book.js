import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  const { title, author, price, type } = props;

  return (
    <div>
      <div className="box">
        <img src="https://image.yes24.com/goods/95607825/XL" alt="책 사진" />
        <p className="title">{title}</p>
        <p className="desc">저자: {author}</p>
        <p className="desc">가격: {price}</p>
        <p className="desc">구분: {type}</p>
      </div>
    </div>
  );
};

// props 기본값 설정해 주기
Book.defaultProps = {
  title: "나의 하루는 4시 40분에 시작된다",
  author: "김유진",
  price: "13,500원",
  type: "자기계발서",
};

// defaultProps 타입 설정해 주기
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Book;
