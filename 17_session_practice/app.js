const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
  })
);

// (임시) DB에 저장되어 있는 사용자 정보
const userInfo = { id: "1", pw: "1" };

app.get("/", (req, res) => {
  console.log("req.session.user >>>>", req.session.user);
  const user = req.session.user;
  // 세션 설정 x -> undefined
  // 세션 설정 o -> userInfo.id 값

  // 세션 값이 있으면, index.ejs render { isLogin: true, user: req.session.user }
  // 세션 값이 없으면, index.ejs render { isLogin: false }
  if (user === undefined) {
    res.render("index", { isLogin: false });
  } else {
    res.render("index", { isLogin: true, user: user });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  console.log(req.body.id);

  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
    // 로그인 정보 일치하면
    // - req.session.user 저장
    req.session.user = req.body.id;
    // - / redirect
    res.redirect("/");
  } else {
    // 로그인 정보 일치하지 않으면
    // - alert
    res.send(
      `<script>
        alert('로그인 실패');
        document.location.href = '/';
      </script>`
    );
  }
});

app.get("/logout", (req, res) => {
  const user = req.session.user;
  if (user !== undefined) {
    req.session.destroy((err) => {
      if (err) {
        throw err;
      }
      res.redirect("/");
    });
  } else {
    res.send(`
    <script>
    alert('잘못된 접근입니다.')
    document.location.href = '/';
    </script>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
