console.log(document); // js
console.log($(document));

// 1. Load Event
$(document).ready(function () {
  console.log("ready - 문서의 dom 트리가 완성되면 실행");
});

$(function () {
  console.log("안녕?");
});

// js
document.addEventListener("DOMContentLoaded", function () {
  console.log("domcontentloaded - 문서의 dom 트리가 완성되면 실행");
});

// 2. Mouse Event
$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

console.log($(".num"));
$(".num").click(function () {
  // length: 4
  // $(".num").css("color", "blue");
  // $(this): 자기 자신을 의미
  $(this).css("color", "blue");
  console.log($(this));
});

// js
// const nums = document.querySelectorAll(".num");
// for (let i = 0; i < nums.length; i++) {
//   nums[i].addEventListener("click", function () {
//     this.style.color = "blue";
//   });
// }

// mouseover() : 요소에 마우스를 올렸을 때
// $(".numbers").mouseover(function () {
//   $(this).css("background-color", "skyblue");
//   $(this).append("<div>.mouseover() called!</div>");
// });

// hover(): 마우스 올렸을 때, 떼었을 때
// hover(inFunc, outFunc)
$(".div-hover").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);

// scroll() : 스크롤할 때
console.log(window);
console.log($(window)); // jQuery

$(window).scroll(function () {
  console.log("scroll!!!!!!!");
});

// 3. Key Event
$(".input-key").keydown(function (e) {
  console.log(e);

  if (e.code == "ArrowUp") {
    console.log("up");
  } else if (e.code == "ArrowDown") {
    console.log("down");
  } else {
    console.log("others");
  }
});

// 4. Form Event
$("#todo-form").submit(function (e) {
  e.preventDefault(); // 기본 동작 막기

  const todo = $('input[name="todo"]').val(); // input 값 tod에 할당
  $(".todos").append(`<li>${todo}</li>`); // ul에 li 추가
  $('input[name="todo"]').val(""); // input 초기화
});
