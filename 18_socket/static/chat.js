let socket = io.connect(); // socket 사용을 위한 객체 생성
let myName; // 내 닉네임 설정

// socket.emit() -> 이벤트명을 지정하고 이벤트 메시지를 보냄
// socket.on() -> 해당 이벤트를 받고 콜백함수 실행

// [실습44] 채팅창 입장 안내 문구
socket.on("notice", (msg) => {
  console.log("socket on notice >>> ", msg);
  document
    .querySelector("#chat-box")
    .insertAdjacentHTML("beforeend", `<div class="notice">${msg}</div>`);
});

// [실습44-2] 채팅창 입장 안내 문구 socket.id -> nickname
function entry() {
  socket.emit("setName", document.querySelector("#nickname").value);
}

socket.on("entrySuccess", (name) => {
  myName = name;

  // 입력창 비활성화
  document.querySelector("#nickname").disabled = true;
  // 입장 버튼 비활성화
  document.querySelector(".entry-box > button").disabled = true;
  // 닉네임을 설정하라는 문구 사라지게 함
  document.querySelector(".set-name").classList.add("d-none");
});

// 닉네임 중복 alert 띄우기
socket.on("error", (data) => {
  alert(data.errorMsg);
});

// [실습45] 채팅창 메시지 전송 step 1
// "send" 이벤트 전송하기
function send() {
  const data = {
    myName: myName, // "entrySuccess" 이벤트에서 입장 성공시 설정하는 내 닉네임
    dm: document.querySelector("#name-list").value, // 현재 선택된 select
    msg: document.querySelector("#message").value,
  };
  socket.emit("send", data);
  const chatInput = document.querySelector(".chat-input");
  chatInput.value = "";
}

// 엔터 쳤을 때 전송
$("#nickname").on("keyup", function (key) {
  if (key.keyCode == 13) {
    entry();
  }
});

$(".chat-input").on("keyup", function (key) {
  if (key.keyCode == 13) {
    send();
  }
});

// step 2
// "newMessage" 이벤트 전달받기 { 닉네임, 메시지 내용 }
socket.on("newMessage", (data) => {
  console.log("socket on newMessage >>", data); // { myName: 'a', dm: '전체 | 특정 님네임', msg: 'cc' }

  let chatList = document.querySelector("#chat-box");
  let div = document.createElement("div");
  let div2 = document.createElement("div");

  let divChat = document.createElement("div"); // 가장 안쪽 div (메시지 박스) 생성

  // 새 메시지 (data => { , , }) 가 도착했는데,
  // myName에 저장된 현재 내 닉네임과
  // 새 메시지(data)의 name이 같다면, 내가 보낸 채팅
  // 새 메시지(data)의 name이 다르다면, 상대방이 보낸 채팅
  if (myName === data.name) {
    div.classList.add("mine", "messages"); // <div class="mine messages"></div>
    div2.classList.add("message", "last");
  } else {
    div.classList.add("yours", "message"); // <div class="yours messages"></div>
    div2.classList.add("message", "last");
  }

  // [실습46] DM 기능 추가
  console.log("send data check >>> ", data);

  if (data.dm) {
    div.classList.add(".secret-chat");
    divChat.textContent = `${data.dm}에게 `;
  }

  //   <div class="mine messages">
  //         <div class="message last">
  //           <div>msg1</div>
  //         </div>
  //       </div>
  //       <div class="yours messages">
  //         <div class="your-name">상대 이름</div>
  //         <div class="message last">
  //           <div>msg2</div>
  //         </div>
  //       </div>

  divChat.textContent += `${data.name} : ${data.msg}`; // <div>(속닥속닥) name : msg</div>
  div2.append(divChat);
  div.append(div2);
  chatList.append(div);

  // 채팅 스크롤 하단 고정
  chatList.scrollTop = chatList.scrollHeight;
});

// [실습46] DM 기능
socket.on("updateNames", (nameArray) => {
  console.log("socket on updateNames >> ", nameArray);

  // 유저 목록 하나하나를 option 태그로 만들어서 select에 추가
  // select 태그 내부에 추가되어야 할 코드 형식
  //  <option value="all">전체</option>
  //   <option value="socketId1">name1</option>
  //   <option value="socketId2">name2</option>

  let select = document.querySelector("#name-list");
  let options = `<option value="all">전체</option>`; // 모든 option 태그들

  // 1. 반복문을 사용해서 option 태그 하나하나 완성
  // 2. select 태그에 option 태그들을 추가
  for (const key in nameArray) {
    options += `<option value="${key}">${nameArray[key]}</option>`;
  }
  select.innerHTML = options;
});

// [실습42]
// function setMsg(obj) {
//   document.querySelector(
//     "#from-server"
//   ).textContent = `${obj.who}: ${obj.msg}`;
// }

// socket.on("connect", () => {
//   console.log(">>>>> ⭕️ Client Socket >>>>>", socket.id);
// });

// function sayHello() {
//   socket.emit("hello", { who: "client", msg: "hello" });
//   socket.on("helloKr", (data) => {
//     // console.log("socket on helloKr >>> ", data);
//     setMsg(data);
//   });
// }

// function sayStudy() {
//   socket.emit("study", { who: "client", msg: "Study with me" });
//   socket.on("studyKr", (data) => {
//     setMsg(data);
//   });
// }

// function sayBye() {
//   socket.emit("bye", { who: "client", msg: "Bye" });
//   socket.on("byeKr", (data) => {
//     setMsg(data);
//   });
// }
