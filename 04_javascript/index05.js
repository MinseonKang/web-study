// 반복문
// - for문
// - while문

// for문
/*
for (초기값; 조건식; 증감값) {
    // 반복할 코드
}
*/

// i++
// i = i + 1

// i--
// i = i - 1

// case1. 0~4 출력
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}
console.log("반목문 끝");


// case2. 1~5 출력
for (let i = 1; i < 6; i++) {
    console.log(i); // 1 2 3 4 5
}
for (let i = 0; i < 5; i++ ) {
    console.log(i+1); // 1 2 3 4 5
}
for (let i = 1; i <= 5; i++ ) {
    console.log(i); // 1 2 3 4 5
}
console.log("반목문 끝");

// case3. 5부터 1까지 출력
for (let i = 5; i > 0; i--) {
    console.log(i); // 5 4 3 2 1
}
console.log("반목문 끝");


// case4. 1부터 10까지 출력
// ver.1 반복을 1부터 10까지 + 2로 나눈 나머지가 0일 때만 출력
// 반복문 + 조건문
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// ver.2 증감값 변경
for (let i = 2; i <= 10; i = 2 + i) {
    console.log(i)
}
console.log("반목문 끝");


// 퀴즈) 1부터 10까지 합 구하기
let sum = 0; // 합을 저장할 변수 생성ㅇ
for (let i = 1; i <= 10; i++) {
    sum = i + sum; // 재할당
}
console.log(`1~10까지 모두 더한 값: ${sum}`); // 55


// 퀴즈) 1부터 10까지의 짝수의 합 구하기
// ver.1
let evenSum = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
}
console.log(`1~10까지 짝수를 더한 값: ${evenSum}`); // 30
// ver.2
let evenSum2 = 0;
for (let i = 2; i <= 10; i = i + 2) {
    if (i % 2 === 0) {
        evenSum2 += i;
    }
}
console.log(`1~10까지 짝수를 더한 값2: ${evenSum2}`); // 30



// =================================
// while문
/*
while (조건식) {
    // 반복할 코드
}
=> 조건식을 만족하면, 블럭({}) 내부 코드를 실행
=> 내부 코드 실행 완료 -> 조건식으로 돌아가서 다시 반복 여부 결정
*/

// case1. 1~5 반복
var n = 1; // 반복할 변수 초기값 설정
while (n <= 5) { // n의 조건식 (5이하까지는 true이기 때문에 반복, 6부터는 false이기 때문에 반복문 실행X)
    console.log(n); // n을 출력
    n++; //증감값
}
console.log("반복문 끝");


// case2. 9부터 4까지 while문으로 반복
var n = 9;
while (n >= 4) {
    console.log(n);
    n -= 1; // n = n - 1, n--
}
console.log("반복문 끝");


// case3. 1부터 10까지 짝수 출력
// ver.1
var n = 1;
while (n <= 10) {
    if (n % 2 === 0) {
        console.log(n);
    }
    n++;
}
console.log("반복문 끝");
// ver.2
n = 2;
while (n <= 10) {
    console.log(n);
    n += 2;
}
console.log("반복문 끝");


// case4. 10부터 1까지 홀수 출력
//ver.1
var n = 10;
while (n >= 1) {
    if (n % 2 === 1) {
        console.log(n);
    }
    n--;
}
console.log("반복문 끝");
// ver.2
n = 9;
while (n >= 1) {
    console.log(n);
    n -= 2;
}
console.log("반복문 끝");


// =============================
// 무한 루프 : 반복문에서 조건식의 결과가 항상 참이 되어 반복문을 탈출하지 못하는 상태
// 의도적으로 무한 루프를 만들어서 특정 조건이 만족될 때까지 반복하여서 코드를 작성하기도 함

/*
while (true) {
    ...
    // 탈출 조건 만들기
}
*/
// 조건문 등을 이용해 탈출 조건을 만들어 주고, break 키워드를 사용하면 블록({})을 빠져나옴

// let go = confirm('계속 진행할까요?');
// console.log(go); // [확인]: ture, [취소]: false

let count = 1;
while (true) { // 무한 루프에 빠지게 하기
    if (confirm("계속 진행하시겠습니까?") === true) {
        alert(`${count}번째 반복입니다!`);
        count += 1;
    }  else { // [취소] fasle 반환
        break;
    }
}
console.log("무한 루프 탈출 성공!");

