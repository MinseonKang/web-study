import "./styles/Prac56.scss";

const Prac56 = () => {
  return (
    <div className="lavar">
      <div className="body body1">
        <div className="eye eye-white">
          <div className="eye eye-black"></div>
        </div>
      </div>
      <div className="body body2"></div>
      <div className="body body3"></div>
      <div className="body body4"></div>
      <div className="body body5"></div>

      {/* process.env.PUBLIC_URL: /public 폴더 경로 */}
      <img src={process.env.PUBLIC_URL + "/image/grass.png"} alt="잔디" />
    </div>
  );
};

export default Prac56;
