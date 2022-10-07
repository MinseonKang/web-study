// JS 표준 내장 객체
// 기본적으로 (이미) 가지고 있는 객체
// String, Number, Array, Date, Math, ...

// =======================================
// Date 객체
// 시간, 날짜에 대한 정보를 얻기 위함

let now = new Date();
console.log(now);

// ms 
// 1970-01-01 09:00:00를 기준으로
console.log(new Date(0)); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)
console.log(new Date(80000)); // Thu Jan 01 1970 09:01:20 GMT+0900 (한국 표준시)

// new Date(y, m, d, h, m, s, ms)
// year : 4자리
// month : 0(1월)~11(12월) -> 주의!!
// date : 1~31 -> 생략하면 1로 처리
// hore, minutes, seconds, ms
console.log(new Date(2018, 2, 2));
console.log(new Date(2018, 2, 2, 18, 20, 30));
console.log(new Date(2022, 8, 30, 10, 53)); // Fri Sep 30 2022 10:53:00 GMT+0900 (한국 표준시)

// Date 객체 메서드
// 메서드를 이용해서 년, 월, 일 등의 값을 얻기
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth()+1); // 0(1월)~11(12월)
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay()); // 요일:0(일)~6(토)



// 퀴즈
// Date 객체를 이용해 오늘 요일을 얻고,
// switch-case문과 if문으로 오늘이 평일/주말 구별해보자
console.log("=========")
let day = now.getDay();

// if문
if (day === 0 || day === 6) {
    console.log("주말");
} else {
    console.log("평일");
}
// 삼항 연산자
console.log(day === 0 || day === 6 ? "주말":"평일");
// switch문
switch (day) {
    case 0:
    case 6:
        console.log("주말");
        break;
    default:
        console.log("평일");
        break;
}
console.log("=========")



// ################################3
// Math 객체
// 수학적인 상수와 함수를 위한 속성과 메서드

// 속성
console.log(Math.E); // 자연로그 밑
console.log(Math.PI); // 파이
console.log(Math.SQRT2); // 2의 제곱근

// 메서드 (속성과 메서드의 차이는 괄호가 있느냐 없느냐!)
console.log(Math.min(100, 200, 30, 7)); // 최소값인 7을 반환해줌
console.log(Math.max(100, 200, 30, 7)); // 최대값인 200을 반환해줌
console.log(Math.round(6.5)); // 반올림
console.log(Math.round(6.3)); // 반올림
console.log(Math.floor(6.5)); // 내림
console.log(Math.round(6.3)); // 내림
console.log(Math.ceil(6.5)); // 올림
console.log(Math.ceil(6.3)); // 올림

// 메서드를 메서드로 감싸 써서 사용 가능
console.log(Math.floor(Math.max(1.1, 2.2, 3.3, 7.7))); // 7
console.log(Math.floor(7.7)); // 7
console.log(7); // 7

// 0 <= x < 1 범위의 난수를 뱉어냄
console.log(Math.random());

// 0 <= 10x < 10
console.log(Math.floor(Math.random() * 10)); // 1내림으로 하면 소숫점이 사라짐

// 퀴즈) 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

// 퀴즈) 1 to 100
console.log(Math.floor(Math.random() * 100) + 1);

// 퀴즈) 20 to 22
console.log(Math.floor(Math.random() * 3) + 20);