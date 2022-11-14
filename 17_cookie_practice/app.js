const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(cookieParser());

const cookieConfig = {
  httpOnly: true,
  //   maxAge: 24 * 60 * 60 * 1000, // 24시간 설정 (유효기간)
  maxAge: 10 * 1000, // 10초 (유효기간)
  // expires: 만료 날짜 설정
};

// res.cookie()
app.get("/", (req, res) => {
  // req.cookies.popup
  // 쿠키 설정시: 'hide'
  // 쿠키 미설정시: ''
  res.render("index", { popup: req.cookies.popup });
});

app.post("/setCookie", (req, res) => {
  // 쿠키 설정
  res.cookie("popup", "popup-hide", cookieConfig); // 쿠키를 설정하는 것뿐 (응답x)

  res.send("쿠키 설정 성공!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
