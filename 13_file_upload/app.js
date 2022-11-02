const express = require("express");
const app = express();
const PORT = 8080;

// multer, path
const multer = require("multer");
const path = require("path");

// multer 설정
const upload = multer({
  dest: "uploads/",
});

// multer 세부 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      // req: 요청에 대한 정보
      // file: 파일에 대한 정보
      // done(에러, 저장 경로): 콜백 함수
      done(null, "uploads/"); // 경로 설정
    },
    filename(req, file, done) {
      // req: 요청에 대한 정보
      // file: 파일에 대한 정보
      // done: 함수
      const ext = path.extname(file.originalname); // file.originalname에서 "확장자" 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); // [파일명 + 현재시간.확장자] 이름으로 바꿔서 파일 업로드
      // 현재 시간: 파일명이 겹치는 것을 막기 위함
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// views 설정
app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(__dirname + "/views"));
app.use("/uploads", express.static(__dirname + "/uploads")); // uploads 폴더 static
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json 형태로 데이터를 전달받음

// Routing - 경로 설정
app.get("/", function (req, res) {
  res.render("index", { title: "파일 업로드를 배워 보자!" });
});

// 1. single(): 하나의 파일을 업로드할 때 사용
// single()의 인자: input 태그의 name 값. single() -> req.file 객체에 파일 정보

// app.post("/upload", upload.single("userfile"), function (req, res) {
// req.file: 파일 업로드 성공 결과 (파일 정보)
// {
//   fieldname: 'userfile', // 폼에 정의된 name
//   originalname: 'img2.jpeg', // 원본 파일명
//   encoding: '7bit', // 파일 엔코딩 설정
//   mimetype: 'image/jpeg', // 파일 타입
//   destination: 'uploads/', // 파일을 저장할 경로
//   filename: 'e89791367a2c33d969062fb867ee8137', // destnation에 저장된 파일명
//   path: 'uploads/e89791367a2c33d969062fb867ee8137', // 업로드된 파일 전체 경로
//   size: 125020 // 파일 크기 (byte)
// }

// 1-2. 세부 설정
app.post("/upload", uploadDetail.single("userfile"), function (req, res) {
  console.log(req.file);
  // req.body title 데이터 정보 확인 가능
  console.log(req.body);
  res.send("Upload!");
});

// 2. array(): 여러 파일을 하나의 input에 업로드할 때
// array() -> req.files 객체에 파일 정보
app.post("/upload/array", uploadDetail.array("userfiles"), function (req, res) {
  console.log(req.files); // [ {}, {}, {}, {} ] 형식으로 파일 정보 확인
  console.log(req.body); // [Object: null prototype] { title: '여러 파일' }
  res.send("Upload Multiple!");
});

// 3. fields(): 여러 파일을 각각의 input에 업로드할 때
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  function (req, res) {
    console.log(req.files); // { userfile1: [{}], userfile2: [{}] }
    console.log(req.body); // [Object: null prototype] { title1: '사람', title2: '장미' }
    res.send("Upload Multiple Each!");
  }
);

// 실습 31
// app.post("/ms/test", uploadDetail.single("userfilePrac"), function (req, res) {
//   console.log(req.file.filename);
//   console.log(req.body);

//   res.render("result", {
//     userImg: req.file.filename,
//     userInfo: req.body,
//   });
// });

app.post("/test", uploadDetail.single("userfilePrac"), function (req, res) {
  console.log(req.file.path);
  console.log(req.body);
  res.render("result", { userImg: req.file.path, userInfo: req.body });
});

// 4. axios

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
