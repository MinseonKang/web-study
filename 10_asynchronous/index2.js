// #1 프로미스 (Promise)
// - 비동기 함수를 동기처리 하기 위해 만든 객체
// - 성공, 실패를 분리해서 반환
// 성공이든 실패든 무언가의 "최종 결과"
// - fulfilled (resolve): 성공
// - rejected (reject): 실패

// promise 객체를 반환하는 promise1 함수 정의
/*
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag === true) {
      resolve(
        `👍promise 상대는 fulfilled! then()으로 연결됩니다 \n 이때 flag가 ${flag}입니다.`
      ); // true (성공)
      // resolve -> then으로 연결
    } else {
      reject(
        `👎promise 상대는 rejected! catch()으로 연결됩니다 \n 이때 flag가 ${flag}입니다.`
      ); // false (실패)
      // reject -> catch로 연결
    }
  });
}

promise1(true)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
*/

// #2 Promise 사용법
// index.js에서 "콜백함수"를 이용해 동기처리한 것을 "promise를 이용해 동기처리 해보자!"
/*
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    // setTimeout() 비동기 처리 -> 동기처리 하기 위해 promise로 감싸기
    setTimeout(function () {
      console.log("고민 끝!");
      product = "제로 콜라";
      price = 2000; // 2000, 4000
      resolve();

      // reject도 사용하려는 경우
      //   if (price <= 2000) {
      //     resolve();
      //   } else {
      //     reject();
      //   }
    }, 3000);
  });
}

function pay() {
  console.log(`${product} 제품의 가격은 ${price}이다.`);
}

// reject도 사용하려는 경우
// function nopay() {
//   console.log(`${product} 제품의 가격은 ${price}이다. 비싸서 안 사야겠다.`);
// }

let product;
let price;
goMart();
// pickDrink().then(pay).catch(nopay);
pickDrink().then(pay);
*/

// #3 Promise 체이닝
// ex. 함수를 이용해 (4+3)*2-1=13을 연산해 보자!
// add -> mul -> sub 순으로 연산 필요

// step1. 콜백함수 사용
/*
function add(n1, n2, callback) {
  setTimeout(function () {
    let result = n1 + n2; // 4 + 3 = 7
    callback(result); // callback(7)
  }, 1000);
}

function mul(n, callback) {
  setTimeout(function () {
    let result = n * 2;
    callback(result);
  }, 700);
}

function sub(n, callback) {
  setTimeout(function () {
    let result = n - 1;
    callback(result); // callback(13)
  }, 500);
}

add(4, 3, function (x) {
  // add 함수 정의부의 callback(result)
  console.log("1: ", x); // 7
  mul(x, function (y) {
    // mul 함수 정의부의 callback(result)
    console.log("2: ", y); // 14
    sub(y, function (z) {
      // sub 함수 정의부의 callback(result)
      console.log("3: ", z); // 13
    });
  });
});
*/

// step2. 프로미스 체이닝 사용
// function add(n1, n2) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let result = n1 + n2;
//       resolve(result);
//       // 예외 처리를 하기 위해 의도저으로 에러 일으켜 봄
//       // reject(new Error("의도적으로 에러를 일으켜 봤다!"));
//     }, 1000);
//   });
// }

// function mul(n) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let result = n * 2;
//       resolve(result);
//     }, 700);
//   });
// }

// function sub(n) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let result = n - 1;
//       resolve(result);
//     }, 500);
//   });
// }

// add(4, 3)
//   .then(function (result) {
//     console.log("1:", result);
//     return mul(result);
//   })
//   .then(function (result) {
//     console.log("2:", result);
//     return sub(result);
//   })
//   .then(function (result) {
//     console.log("3:", result);
//   })
//   .catch(function (err) {
//     console.log("실패!");
//     console.log(err);
//   });

//예외 처리
/*
add(4, 3)
  .then(function (result) {
    console.log("1:", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2:", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3:", result);
  })
  .catch(function (err) {
    console.log("실패!");
    console.log(err);
  });
*/

// 프로미스 체이닝은 형제 관계 같은 느낌? 명시적으로 볼 수 있다. 예외처리도 간편하게 가능!

// ========= 실습 23 ===========

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

call("kang")
  .then(function (name) {
    console.log(name + "반가워");
    return back("back");
  })
  .then(function (txt) {
    console.log(txt + "을 실행했구나");
    return hell();
  })
  .then(function () {
    console.log("여기는 callback hell");
  });
