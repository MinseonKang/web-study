// 함수 : 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
//  - 2단계로 이루어짐
//      - 함수 정의(생성) -> 함수 호출


// 함수 정의
/*
    function functionName() {
        //do something
    }
*/
// 함수 호출
/*
    functionName();
*/

function helloWorld() { // 정의
    console.log('hello world!');
}
helloWorld(); // 호출

const helloWorld2 = function() { // 정의
    console.log('hello world!!');
}
helloWorld2(); // 호출

// return 키워드 : 반환값 -> 함수 내부 코드의 "최종 결과값"
// 함수 내부 코드의 최종값을 저장하고 보관하려고 등장한 키워드
function helloWorld3() {
    return "helloword!3" // 문자를 반환
}
 console.log(helloWorld3());
 
 const helloWorld4 = function() {
    return "helloworld!!4"
 }
 console.log(helloWorld4());



 // 다양한 함수 만들기
 // case1. 함수 선언식, 매개변수(인자 1개)
 function hello1(text) { // "안녕?"
    return text; // return "안녕?"
 }
 console.log(hello1("안녕?"));

 // case2. 함수 선언식, 매개변수(인자 2개)
 function hello2(text, name) { // "안녕?", "minseon"
    let result = `${text} 나는 ${name}이야`; // let result = "안녕? 나는 minseon이야"
    return result; // return "안녕? 나는 minseon이야"
 }
 console.log(hello2('안녕??', 'misneon'));

 // case3. 함수 선언식, return 없이 함수에서 바로 console.log() 찍기
 function hello3(text, name) { // "안녕???", "giorno"
    console.log(`${text} 나는 ${name}이야`); // console.log("안녕???" 나는 giorno야);
 }
 hello3("안녕???", "giorno");

 // case4. 함수 표현식, 매개변수(인자 2개)
 const hello4 = function(text, name) { // "안녕????", "L"
    let result2 = `${text} 나는 ${name}이야`; // let result2 = "안녕???? 나는 L이야";
    return result2; // return "안녕???? 나는 L이야";
 }
 console.log(hello4('안녕????', 'L'));

// case5. 함수 표현식, return 없이 바로 console.log() 찍기
const hellow5 = function(text, name) { // "안녕?????", "light"
    console.log(`${text} 나는 ${name}이야`); // console.log("안녕????? 나는 light이야");
}
hellow5("안녕?????", "light");

// 주의!
// - 하나의 js 파일에서 동일한 함수의 이름을 정의하지 않기
// - 항상 함수를 정의하고 나서 호출하기


// =================================
function countNum() {
    let count = 7; // 함수 안에서 변수 선언 + 할당
    console.log('count 값1:' , count); // 7
}

countNum(); // 함수 호출
// console.log('count 값2:' , count); // ReferenceError: count is not defined
// => 함수 안에서 선언한 변수는 함수 안에서만 유효하다. 이것은 지역 변수!
// => 지역 변수는 함수의 body를 벗어나면 접근할 수 없다.

let count2 = 0;
console.log('count 값1:', count2);
function countNum2() {
    count2 = 77;
    console.log('count 값2:', count2);
}
countNum2();
console.log('count 값3:', count2);
// => 만약 함수 안에서 사용되는 변수가 함수 바깥에서도 쓰인다면, "전역 변수"를 활용!

let color = 'red';
console.log(color); // red
function printColor() {
    let color = 'green';
    console.log(color); // green
}
printColor();
console.log(color); // red
// => 지역 변수와 전역 변수의 이름이 동일한 상황, 함수 안에서는 지역 변수를 사용


let animal = 'dog';
function who() {
  let animal = 'cat';
  console.log(animal);  // cat
}
who();
console.log(animal);  // dog




// =================================================
// 문자열 속성과 메서드(내장 함수) : 문자열(String)에서 사용 가능한 편리한 기능

console.log('----------------------------');

//속성
// length: 문자열 길이

var song = "Strawberry Moon";
var song2 = "Strawberry Moon!!";

console.log(song.length); // song 변수의 문자열 길이 (공백도 포함해서 계산함)
console.log(song2.length); // 특수문자도!

// xx.method() 형태
// - toUpperCase() : 모든 문자를 대문자로 변경
// - toLowerCase() : 모든 문자를 소문자로 변경
// - trim() : 양끝 공백 제거
var msg = 'Happy Birthday~';
var userId = '        user123';

console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(userId.length); // 15
console.log(userId.trim());
console.log(userId.trim().length); // 7

// 참고! 연달아서 사용 가능함
var msg2 = "   hello world ! !!      ";
console.log(msg2.trim().toUpperCase()); // msg 2 변수의 양끝 공백 제거 -> 대문자로 변경
var msg3 = "We will We will rock you  !  ";
console.log(msg3.trim().toUpperCase());


// 인덱싱 (indexing) : String에서 한 글자를 선택
// 변수명[위치값]
// 위치값: 숫자 "0"부터 시작. 컴퓨터는 항상 0부터 숫자를 시작한다!
console.log(song) // Strawberry Moon
console.log(song[0]); // S
console.log(song[1]); // t
console.log(song[2]); // r
console.log(typeof(song[2])); // string
console.log(song[0] + song[7]); // "s" + "r"
console.log(song[0].length); // 1
console.log(song[0].toLowerCase()); // s

// 퀴즈) Sonny 단어 만들기
console.log(song[0] + song[12] + song[14] + song[14] + song[9]); // Sonny




// xx.method(arg) 형태
// - indexOf(x) : string에서 x가 나타내는 인덱스(위치값)을 반환, x가 없다면 -1을 반환
// - slice() : startIndex부터 끝까지 문자열을 잘라내어 반환
// - replace() : 교체될 값, 교체되어 들어가는 값. 처음 발견한 값을 교체.
// - replaceAll() : 교체될 값, 교체되어 들어가는 값. 발견한 값을 모두 찾아서 교체.


var fruit = 'applemango';
var msg = 'Wow~ It is so amazing~~~~!!';

console.log(fruit.indexOf('a')); // 0
console.log(fruit.indexOf('l')); // 3
console.log(fruit.indexOf('mango')); // 5
console.log(fruit.indexOf('x')) // -1

console.log(fruit.slice(5)); // mango
console.log(fruit.slice(-1));
console.log(fruit.slice(-3)); // ngo 인덱스 번호는 음수도 가능(거꾸로!)


console.log(msg.replace('Wow', 'Hey')); // Hey~ It is so amazing~~~~!!
console.log(msg.replaceAll('a', 'A')); // Wow~ It is so AmAzing~~~~!!


// 퀴즈1) 2022.9.26 -> 2022-9-26
// 퀴즈2) 2022.9.26 -> 22-9-26
let date = '2022.9.26';
console.log(date.replaceAll('.', '-'));
let date2 = date.replaceAll('.', '-').replaceAll('20', '');
console.log(date2);
// 다른 답
// console.log(date.replaceAll('.', '-'));
// console.log(date.replaceAll('.', '-').slice(2));

