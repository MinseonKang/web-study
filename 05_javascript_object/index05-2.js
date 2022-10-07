// 이벤트 (Event) : 사용자들의 행동에 반응하는 작업 ex. 클릭, 더블클릭, 폼 제출 등 ...

// 이벤트 리스너 (Event Listener) : 이벤트가 발생했을 때 실행할 함수
// 1. 인라인 방식 onXXX
// 2. onXX 속성 방식
// 3. addEventListener() 메소드 방식


// 1. 인라인 방식
function showAlert() {
    alert('버튼 1 클릭!');
}

// 2. 속성(프로퍼티) 방식
let btn2 = document.querySelector('#btn2'); // <button>
btn2.onclick = function () {
    alert('버튼2 클릭!');
}

// 3. addEventListener 메소드 방식
// addEventListener(type, listener)
// ㄴ type: 이벤트 종류 (클릭, 더블 클릭 등)
// ㄴ listener: 이벤트 발생 시 처리할 함수
let btn3 = document.querySelector('#btn3'); // <button>
btn3.addEventListener('click', function () {
    alert('버튼3 클릭!');
});


// 연습
// function clickSpan1() {
//     let span1 = document.querySelector('#span1');
//     span1.style.color = "blue";
// }

// let span2 = document.querySelector('#span2');
// span2.onclick = function() {
//     let spanAnswer = prompt('오늘 기분이 어때요?');
//     if (spanAnswer === "좋아") {
//         alert("좋은 하루 보내세요");
//     } else if (spanAnswer === "그냥 그래") {
//         alert("무슨 일 있어요?");
//     } else if (spanAnswer === "안 좋아") {
//         alert("힘내세요!");
//     } else {
//         alert("대답은 '좋아', '그냥 그래', '안 좋아'만 가능합니다.");
//     }
// }

// let span3 = document.querySelector('#span3');
// span3.addEventListener('click', function() {
//     let spanConfirm = confirm('오늘 비 와요?');
//     if (spanConfirm === true) {
//         alert("꼭 우산 챙기세요!");
//     } else {
//         alert("그것 참 다행이네요!");
//     }
// });


// mouseover 이벤트
// function mouseover() {
//     let span1 = document.querySelector('#span1');
//     span1.style.color = "blue";
// }

// let span2 = document.querySelector('#span2');
// span2.onmouseover = function() {
//     let spanAnswer = prompt('오늘 기분이 어때요?');
//     if (spanAnswer === "좋아") {
//         alert("좋은 하루 보내세요");
//     } else if (spanAnswer === "그냥 그래") {
//         alert("무슨 일 있어요?");
//     } else if (spanAnswer === "안 좋아") {
//         alert("힘내세요!");
//     } else {
//         alert("대답은 '좋아', '그냥 그래', '안 좋아'만 가능합니다.");
//     }
// }

// let span3 = document.querySelector('#span3');
// span3.addEventListener('mouseover', function() {
//     let spanConfirm = confirm('오늘 비 와요?');
//     if (spanConfirm === true) {
//         alert("꼭 우산 챙기세요!");
//     } else {
//         alert("그것 참 다행이네요!");
//     }
// });


// dbclick 이벤트
function dblclickSpan1() {
    let span1 = document.querySelector('#span1');
    span1.style.color = "blue";
}

let span2 = document.querySelector('#span2');
span2.ondblclick = function() {
    let spanAnswer = prompt('오늘 기분이 어때요?');
    if (spanAnswer === "좋아") {
        alert("좋은 하루 보내세요");
    } else if (spanAnswer === "그냥 그래") {
        alert("무슨 일 있어요?");
    } else if (spanAnswer === "안 좋아") {
        alert("힘내세요!");
    } else {
        alert("대답은 '좋아', '그냥 그래', '안 좋아'만 가능합니다.");
    }
}

let span3 = document.querySelector('#span3');
span3.addEventListener('dblclick', function() {
    let spanConfirm = confirm('오늘 비 와요?');
    if (spanConfirm === true) {
        alert("꼭 우산 챙기세요!");
    } else {
        alert("그것 참 다행이네요!");
    }
});