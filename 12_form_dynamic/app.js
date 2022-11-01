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
app.get("/", function (req, res) {
  res.render("index", {
    title: "동적 폼 전송을 배워보자",
  });
});

// 1. ajax
// GET /ajax
app.get("/ajax", function (req, res) {
  console.log(req.query);
  res.send(req.query); // index.ejs에 보내 준다 (프론트에)
});

// POST /ajax
app.post("/ajax", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 2. axios
// GET /axios
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /axios
app.post("/axios", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 3. fetch
// GET /fetch
app.get("/fetch", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /fetch
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
