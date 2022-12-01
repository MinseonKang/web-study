import "./Button.css";

const Button = (props) => {
  console.log(props);
  const { link, children } = props;
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="Button">{children}</button>
    </a>
  );
};

Button.defaultProps = {
  children: "네이버",
  link: "https://naver.com",
};

export default Button;
