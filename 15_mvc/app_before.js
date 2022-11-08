// MVC 패턴 적용 전 app.js 코드

const express = require("express");
const app = express();
const PORT = 8080;

// views 설정
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (임시) DB로부터 댓글 목록을 가져왔다고 가정
// 배열: 전체 댓글
// 각 객체: 댓글 하나
const comments = [
  {
    id: 1,
    userid: "helloworld!",
    date: "2022-10-31",
    comment: "안녕하세요!",
  },
  { id: 2, userid: "hello", date: "2022-11-02", comment: "반갑습니다." },
  { id: 3, userid: "world", date: "2022-11-03", comment: "배고파요" },
  { id: 4, userid: "!", date: "2022-11-04", comment: "점심 뭐 먹지?" },
];

// Routing - 경로 설정
// 화살표 함수: const f = () => {...}
// GET / [댓글 목록 보기] 이동 링크 걸려 있음
app.get("/", (req, res) => {
  res.render("index");
});

// GET /comments 댓글 전체 목록 확인할 수 있음
app.get("/comments", (req, res) => {
  console.log(comments);
  // { commentInfos : [ {}, {}, {}, {} ]}
  res.render("comments", { commentInfos: comments });
});

// GET /comments/:id 각 댓글을 자세히 볼 수 있음
app.get("/comment/:id", (req, res) => {
  console.log(req.params); // rout 매개변수(:id)에 대한 정보가 담겨 있음
  // { id: 1 } { id: '안녕' }
  console.log(req.params.id); // id 값 추출
  const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수 1, 2, ...1000
  console.log(comments[commentId - 1]); // 댓글 목록에서 특정 댓글 정보 추출

  // 1. id - 존재하지 않는 댓글 id x (0, 음수, 배열 length보다 큰 값)
  if (commentId < 1 || commentId > comments.length) {
    return res.render("404");
  }

  // 2. id - 숫자가 아닌 것이 들어오면 x
  // isNaN(Not a Number) 숫자라면 false, 문자라면 True
  if (isNaN(commentId)) {
    // (5 > 3) === true // true === true 같은 쓸데없는 연산은 피하자
    return res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
});

// [404 Error Page]
// (중요) 맨 마지막 라우트로 선언
// 그렇지 않으면 나머지 코드가 무시됨
// * : all
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
