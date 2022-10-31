// async, await

// 기본 구조
async function 함수명() {
  await 비동기_처리_메서드();
}

// async 키워드
// - 함수를 비동기 함수로 선언
// - 프로미스를 반환하지 않더라도 자동으로 프로미스를 반환함을 암시
// - 반환값(return ?)이 있으면 resolve
// - 오류가 있으면, rejected

// await 키워드
// - 대기 키워드 (기다리게 함): 비동기 코드를 동기적으로 보이게 함

// => async/await는 세트! 같이 사용해야 함

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
    }, 3000);
  });
}

function pay() {
  console.log(`${product} 제품의 가격은 ${price}이다.`);
}

async function exec() {
  goMart();
  await pickDrink(); // 3초 시간이 걸림
  pay();
}

exec();
