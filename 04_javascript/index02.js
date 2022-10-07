console.log("connected!");


// 변수
// - 변할 수 있는 수. 정해진 값이 아닌 수. variable
// - 데이터 보관함
// - 어떤 값을 저장하기 위한 메모리 공간을 "식별"하고자 붙인 이름

// 단계
// 1. 변수 선언
// 2. 값 할당


// var 키워드
// - 중복 선언 가능
var a; // 선언
console.log(a); // undefine: 값 할당하지 않은 경우
a = 2; // 할당
console.log(a) // 2
var a = 3; // 선언 + 할당, 재선언 -> 바람직하지 않은 코드
console.log(a); // 3
a = 4;
console.log(a); // 4
a = 10;
console.log(a); // 10

// var 문제점
// - 변수 재선언이 허용됨
// - 변수를 선언하기 전에 값을 할당이 허용됨 (장점으로 보일 수도 있지만 유지보수 최악
// var aa; // 선언
aa = 123; // 할당
console.log(aa);



// let 키워드
// - 변수 중복 선언 불가능
// - 재할당 가능
let c; // 선언
console.log(c); // undefined: 값을 할당하지 않은 경우
c = 4; // 할당
console.log(c); // 4
// let c = 4; // 선언과 할당 동시에
// let c = 4; // error: 중복 선언 불가능
c = 5; // 값을 재할당하는 건 가능
console.log(c); //5



// const 키워드
// - 재선언, 재할당 불가능
// - 선언과 할당이 동시에 이루어져야 함
// - "변하지 않는 값"을 변수에 저장할 때 사용
// ex. (const PI = 3.141592)
// const b; // error: 선언만 함
const b = 3; // 반드시 선언과 할당을 동시에 해야 함
console.log(b); // 3

// b = 5; // error: 재할당 불가능




// [QUIZ] 변수
// Q1. 코드 실행시 q1 변수는 어떤 값이 될까?
let q1 = 3;
q1 - 2;
// 정답 : 3 (q1에 값을 재할당해주지 않았기 때문에 그대로 3)

// Q2. 다음 코드 실행시 q2 변수는 어떤 값이 될까?
let q2 = 10;
q2 = q2 + 5; // 15 q2 변수에 재할당
q2 = q2 - 2; // 13 q2 변수에 재할당
// 정답: 13

// Q3. 다음 코드 실행시 q3 변수는 어떤 값이 될까?
const q3 = 1;
// q3 = q3 + 1; // error: const 변수 선언이 되어 있기 때문에 재할당 불가능
// 정답: 오류



/*
  정리
  - var: es6 이전에 사용되던 변수 선언 키워드 -> 지양하는 추세
  - let: 변수 선언 키워드
       - 변수 선언 -> 값 할당
       - 변수 중복 선언 불가능
  - const: 상수 선언 키워드
       - 상수: 변하지 않는 값 (ex. 3.14159265359, 'How are you?')
       - 변수 선언과 값을 할당이 동시에
       - 재할당 불가능
 */



// (추가) 식별자 
// : 이름을 붙일 때 사용하는 단어 (변수명, 함수명 등)
// 식별자 규칙
// 1. 키워드 사용 불가능
// 		- 키워드: 특별한 역할을 이미 하고 있는 단어
// 		- ex) const, var, let, void, return, for, while, if, else, ..
// 2. 숫자로 시작 x
// 3. 특수문자: _, $만 허용
// 4. 공백 문자 (space bar) x

// [QUIZ] 다음 중 식별자 불가능한 것은? 
// apple [O]
// 1apple [X]
// let [X]
// $apple [O]
// APPLE [O]
// apple5 [O]
// _ [O]
// $ [O]
// apple good [X]
// _apple [O]
// Apple [O]


// 식별자에 단어 두 개 이상 작성하고 싶은 경우?
// camelCase js 관례
// ex. redApple, isWater
// (참고) snake_case
// ex. red_apple, is_water




// #####################################################################
console.log('--------------------------');

// 자료형
// - 데이터의 종류 (data type)
// 1. 기본형 (primitive)
// - string
// - number
// - boolean
// - null
// - undefined
// 2. 객체 (object)
// - 배열
// - 딕셔너리

// javascript 다른 언어와 달리 인터프리터(해석기)가 알아서 변수 타입을 파악한 후 저장하여 변수의 타입을 따로 작성해 주지 않아도 된다
// var, let, const 3가지 키워드를 이용해 변수를 "선언"한다

// 기본형 (primitive)
// 1. string
//  - 텍스트 정보, 문자열
//  - 따옴표로 감싸주어야 함 (', "")
//  - 숫자, 특수 문자도 따옴표 안에 있으면 문자열
//  - 따옴표 안에 따옴표 주의
//  - ex) "그가 '안녕'이라고 말했다.", "I'm Sean"
var text = '안녕하세요';
var text2 = "Hi";
var gender = '남자';
var address = "서울";

console.log(text); // console.log('안녕하세요!');
console.log(text2);
console.log(gender);
console.log(address);
// console.log() 값 여러 개 찍기
console.log(text, text2); // 공백 넣어서 문자열을 이어줌
console.log(text + text2); // + 문자열 합치기 연산자. 공백 없이 문자열을 이어줌
console.log(text + '저는 홍길동입니다.' + gender + '이고,' + address + '에 삽니다.');
// 템플릿 리터럴 : string 내 변수와 상수를 간결하게 표현
// 백틱 (``)기호와 $, {} 기호 사용
console.log(`${text} 저는 홍길동입니다. 저는 ${gender}이고, ${address}에 삽니다.`);



// 2. number
//  - 숫자 (정수, 실수)
//  - 연산 가능
var num = 100; // 정수
var num2 = 0.12; // 실수

var result = 100 - 2;
console.log(result);

var result = 'apple' - 3;
console.log(result); // NaN : Not a Number (숫자가 아님)
// 숫자로 변환할 수 없는 것을 숫자로 바꾸려고 할 때 NaN



// 3. boolean
//  - true, false 둘 중 하나의 값을 갖는 논리 요소
var isWater = true;
var isApple = false;
console.log(isWater);
console.log(isApple);



// 4. null
//  - 빈 값
//  - null 타입으로 "타입이 존재"하지만 "값이 없음"
//  - 값이 없다는 것을 "의도적으로 명시"할 때 사용
var y = null;
console.log(y);


// 5. undefinded
//  - 값, 타입 모두 없음 (값도 없고, 타입도 지정되어 있지 않은 상태)
var x;
console.log(x);




// typeof() : 자료형 확인하기
console.log('--------------------');

console.log(typeof('문자열')); // string
console.log(typeof(245)); // number
console.log(typeof(true)); // boolean
console.log(typeof(null)); // object 언어적인 문제...
console.log(typeof '문자'); // string



// 형변환
console.log('--------------------');

// 1. ? -> 문자
var str1 = true;
var str2 = 123;
var str3 = null;
// String()
console.log(typeof String(str1)); // string
console.log(typeof String(str2)); // string
console.log(typeof String(str3)); // string
// toString()
console.log(typeof str1.toString()); // string
console.log(typeof str2.toString()); // string



// 2. ? -> 숫자
// parseInt(data, 10) : data를 10진수로 변환
var n1 = true; // boolean
var n2 = false; // boolean
var n3 = 123; // number
var n4 = '123'; // string

console.log(Number(n1)); // 1
console.log(Number(n2)); // 0
console.log(Number(n3)); // 123
console.log(Number(n4)); // 123
console.log(parseInt(n3, 10)); // 123 10진수라는 것을 알려 주면 좋음
console.log(parseInt(n4, 10)); // 123

console.log(typeof Number(n1)); // number
console.log(typeof Number(n2));  // number
console.log(typeof Number(n3)); // number
console.log(typeof Number(n4)); // number
console.log(typeof parseInt(n3)); // number
console.log(typeof parseInt(n4)); // number



// #################################################################################
console.log('-----------------------');

// 연산자
// - 대입: =
// - 산술: +, -, *, /
// - 비교: ==, !=, ===, !===, >, >=, <, <=
// - 논리: !, &&, ||



// 대입 연산자: =
// 좌측에 있는 변수에 우측 값을 할당(저장, 대입)



// 산술 연산자: +, -, *, /
// **: 거듭 제곱
// %: 나머지 연산자
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(2 ** 10); // 2^10
console.log(10 % 4); // 2

