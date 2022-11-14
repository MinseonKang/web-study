const express = require("express");
const cookieParser = require("cookie-parser");
// cookie-parser
// 요청의 쿠키를 해석해서 req.cookies 객체로 만들어 준다
// ex) name = hello 라는 쿠키를 보내면, req.cookies -> { name: 'hello' }가 들어 있다
// 유효기간이 지난 쿠키는 알아서 제거
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); // req.cookies 가능해짐

app.get("/", (req, res) => {
  res.render("index");
});

// res.cookie('키', '값', '옵션 객체') -> 쿠키를 "설정"하는 method
// res.clearCookie('키', '값', '옵션 객체') -> 쿠키를 "삭제"하는 method

const cookieConfig = {
  // 옵션 속성들
  httpOnly: true, // 웹서버를 통해서만 쿠키 접근 가능하도록 설정 (js에서 접근 불가능)
  maxAge: 60 * 1000, // 1min 유효시간(단위: 밀리초)
  // expires: 만료 날짜 설정
  // secure: https에서만 쿠키 접근
  // signed: 쿠키 암호화 설정
};

app.get("/setCookie", (req, res) => {
  res.cookie("myKey1", "myValue1", cookieConfig); // 쿠키 설정
  res.send("set cookie"); // 응답을 보냄
});

app.get("/getCookie", (req, res) => {
  res.send(req.cookies); // 쿠키 해석 (읽기)
});

app.get("/clearCookie", (req, res) => {
  res.clearCookie("myKey1", "myValue1", cookieConfig); // 쿠키 삭제
  res.send("clear cookie!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
