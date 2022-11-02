const express = require("express");
const app = express();
const PORT = 8000;

// views 설정
app.set("view engine", "ejs"); // view engine 등록
// middleware (미들웨어) 설정 : 요청과 응답의 중간에서 작업
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json 형태로 데이터를 전달받음

// Routing - 경로 설정
// - req(request) : 요청 (클라이언트 -> 서버)
// - res(response) : 응답 (서버 -> 클라이언트)
app.get("/", function (req, res) {
  // GET (http://localhost:PORT)
  res.render("index", {
    title: "폼 전송을 배워보자",
    desc: "여기는 설명입니다",
  }); // views/index.ejs 파일 찾아서 클라이언트에게 "응답(res)"
});

app.get("/getForm", function (req, res) {
  // GET 요청은 req.query 객체에 폼 정보가 전달
  console.log(req.query);
  //   res.send("get 요청 응답 성공");
  res.render("result", { title: "GET 요청 성공", userInfo: req.query });
});

app.post("/postForm", function (req, res) {
  // POST 요청은 req.body 객체에 폼 정보가 전달
  console.log(req.body);
  //   res.send("post 요청 응답 성공");
  res.render("result", { title: "POST 요청 성공", userInfo: req.body });
});

// 실습 26
app.get("/prac26", function (req, res) {
  res.render("prac26", {
    title: "실습26. get으로 정보받기, 실습 29. axios get 회원가입",
  });
});

app.get("/getForm26", function (req, res) {
  console.log(req.query);
  res.render("prac26_result", {
    title: "실습26 폼 전송 완료!",
    userInfoPrac26: req.query,
  });
});

// 실습 27
app.get("/prac27", function (req, res) {
  res.render("prac27", {
    title: "실습27. post로 정보받기",
  });
});

app.post("/postForm27", function (req, res) {
  console.log(req.body);
  res.render("prac27_result", {
    title: "실습27 폼 전송 완료!",
    userInfoPrac27: req.body,
  });
});

// 실습 29
app.get("/axiosprac29", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// 실습 30
const realID = "minseon";
const realPW = "1234";

app.post("/axiosprac30", function (req, res) {
  console.log(req.body);

  if (realID === req.body.ID) {
    // 아이디 일치
    if (realPW === req.body.PW) {
      // 아이디 비번 모두 일치
      res.send({ userInfo: req.body, isLogin: true });
    } else {
      // 아이디 일치, 비번 불일치
      res.send({ userInfo: req.body, isLogin: false });
    }
  } else {
    // 아이디 비번 모두 불일치
    res.send({
      userInfo: req.body,
      isLogin: false,
    });
  }
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
