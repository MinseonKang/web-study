// #1 setTimeout()
// setTimeout(code, delay) : delay(단위: ms)동안 기다리다가 code 함수를 실행

// 1 -> 3 -> 2
/*
console.log(1);
setTimeout(function () {
  console.log(2);
}, 2000);
console.log(3);
*/

// #2 비동기 처리
// ex. 편의점에 들어가서 음료수를 사고 나오는 상황
/*
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다");
}

function pickDrink() {
  // 3초동안 고민하는 상황
  setTimeout(function () {
    console.log("고민 끝!");
    product = "제로 콜라";
    price = 2000;
  }, 3000);
}

function pay(product, price) {
  console.log(`${product} 제품의 가격은 ${price}이다.`);
}

let product;
let price;
goMart();
pickDrink();
pay(product, price);
*/

// #3 콜백 함수
// - 다른 함수의 실행이 끝난 뒤에 실행되는 함수
// - js에서는 어떤 함수의 "매개변수" 쓰일 수 있음

// 위에 있는 예시 코드에서 undefined가 뜨지 않도록 해보자!
// 즉, 비동기 방식으로 작성된 코드를 "동기 처리"할 수 있도록
/*
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다");
}

function pickDrink(callback) {
  // pay
  // callback: 매개변수가 될 콜백함수
  // 3초동안 고민하는 상황
  setTimeout(function () {
    console.log("고민 끝!");
    product = "제로 콜라";
    price = 2000;
    callback(product, price); // pay
  }, 3000);
}

// function pay(product, price) {
//   console.log(`${product} 제품의 가격은 ${price}이다.`);
// }

let product;
let price;
goMart();
pickDrink(function (product, price) {
  console.log(`${product} 제품의 가격은 ${price}이다.`);
});
*/

// #4 콜백 지옥 (callback hell) : 콜백 함수가 반복되어서 코드의 들여쓰기가 깊어짐 -> 가독성/유지보수성 하락
// 1초마다 배경색이 변경되는 코드
// red -> orange -> yellow -> green -> blue
// setTimeout(function () {
//   document.body.style.backgroundColor = "red";
//   setTimeout(function () {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(function () {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(function () {
//         document.body.style.backgroundColor = "green";
//         setTimeout(function () {
//           document.body.style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// ======== 실습 24 ==========
// promise로 바꿔 보자!
function changeRed() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let red = (document.body.style.backgroundColor = "red");
      resolve(red);
    }, 1000);
  });
}

function changeOrange() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let orange = (document.body.style.backgroundColor = "orange");
      resolve(orange);
    }, 1000);
  });
}

function changeYellow() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let yellow = (document.body.style.backgroundColor = "yellow");
      resolve(yellow);
    }, 1000);
  });
}

function changeGreen() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let green = (document.body.style.backgroundColor = "green");
      resolve(green);
    }, 1000);
  });
}

function changeBlue() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let blue = (document.body.style.backgroundColor = "blue");
      resolve(blue);
    }, 1000);
  });
}

changeRed()
  .then(function (orange) {
    return changeOrange(orange);
  })
  .then(function (yellow) {
    return changeYellow(yellow);
  })
  .then(function (green) {
    return changeGreen(green);
  })
  .then(function (blue) {
    return changeBlue(blue);
  });
