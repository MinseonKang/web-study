const express = require("express");
const app = express();
// socket은 express가 아닌 http 모듈에 연결해야 사용 가능
const http = require("http").Server(app);
const io = require("socket.io")(http); // http-socket 연결
const PORT = 8005;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("chat");
});

const nameArray = {}; // 유저 목록

// [실습46] DB 기능 구현
// 유저 목록 업데이트 (유저 입장, 퇴장)
function updateList() {
  io.emit("updateNames", nameArray); // { socket.id: name1, socket.id: name2, ... }
}

// io.on -> socket과 관련된 통신 작업을 처리
io.on("connection", (socket) => {
  // "connection" event -> 클라이언트가 접속했을 때 발생, 콜백으로 socket 객체를 제공!

  // socket.id: 소켓 고유 아이디 -> socket은 웹페이지별로 생긴다!
  // [실습42]
  //   socket.on("hello", (data) => {
  //     // console.log("socket on hello >> ", data);
  //     console.log(`${data.who} : ${data.msg}`);
  //     socket.emit("helloKr", { who: "hello", msg: "안녕?" });
  //   });

  //   socket.on("study", (data) => {
  //     console.log(`${data.who} : ${data.msg}`);
  //     socket.emit("studyKr", { who: "study", msg: "같이 공부할래?" });
  //   });

  //   socket.on("bye", (data) => {
  //     console.log(`${data.who} : ${data.msg}`);
  //     socket.emit("byeKr", { who: "bye", msg: "잘 가!" });
  //   });

  // [실습44] 채팅창 입장 안내 문구
  //   io.emit("notice", socket.id);

  // [실습44-2] 채팅창 입장 안내 문구 socket.id -> nickname

  socket.on("setName", (name) => {
    console.log("socket on setName >>> ", name);

    // nameArray: { socket.Id1: name1, socket.Id2: name2, ... }
    // -> Object.values(): [ name1, name2, ... ]
    // -> name이 존재하는지 (indexOf 사용!)

    if (Object.values(nameArray).indexOf(name) > -1) {
      // 닉네임 중복이 있다면
      socket.emit("error", {
        errorMsg: "이미 존재하는 닉네임입니다. 다시 시도해 주세요!",
      });
    } else {
      // 닉네임 중복이 없다면
      nameArray[socket.id] = name; // { socket.id: nick }
      console.log("접속 유저 목록 >>", nameArray);
      io.emit("notice", `${name}님이 입장하셨습니다.`);
      socket.emit("entrySuccess", name);

      updateList(); // 유저 목록 업데이트
    }
  });

  // [실습44-3] 접속자 퇴장시 "notice" 이벤트로 퇴장 공지
  socket.on("disconnect", () => {
    // 1. socket.id 콘솔로그 찍기
    console.log(">>>> ❌ Server Socket >>>>", socket.id);
    // 2. 전체 공지 ('notice', 퇴장 메시지(유저닉네임))
    io.emit("notice", `${nameArray[socket.id]}님이 퇴장하셨습니다.`);
    // 3. nameArray에서 해당 유저 삭제
    delete nameArray[socket.id];

    updateList(); // 유저 목록 업데이트
  });

  // [실습45] 채팅창 메시지 전송 step 1
  socket.on("send", (data) => {
    console.log("socket on send >>", data); // { myName: 'a', dm: 'all | 특정 닉네임', msg: 'cc' }
    console.log("nameArray >>>", nameArray);

    // [실습46] DM 기능
    if (data.dm !== "all") {
      let dmSocketId = data.dm; // 특정 유저의 socket id
      const sendData = {
        name: data.myName,
        msg: data.msg,
        dm: nameArray[data.dm],
      };
      io.to(dmSocketId).emit("newMessage", sendData); // 특정 socket id에게만 메시지 전송
      socket.emit("newMessage", sendData); // 자기 자신에게도 DM 메시지 전송
    } else {
      // [실습45] 채팅창 메시지 전송 step 2
      const sendData = { name: data.myName, msg: data.msg };
      io.emit("newMessage", sendData);
    }
  });
});

// 주의) 소켓을 사용하기 위해서는 http.listen()으로 포트를 열어야 함
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
