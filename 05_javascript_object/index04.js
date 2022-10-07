// document 요소 다루기 (읽고 쓰기)

// 1. HTML 요소 내용(content)을 읽고 쓰기
let div1 = document.getElementById('div1');
console.log(div1);
let div2 = document.getElementById('div2');

// innerHTML 속성 : 요소 안의 "코드"를 가져오거나 수정
// => 입력된 문자열을 HTML 형식으로!
// 읽기: 요소.innerHTML
// 쓰기: 요소.innerHTML = 수정하려는 태그;
console.log(div1.innerHTML); // 읽기
div1.innerHTML = '여기는 <b>첫 번째</b> 태그입니다. &hearts;'; // 쓰기
console.log(div2.innerHTML); // 읽기
div2.innerHTML = '너무너무 <strong>졸려요</strong>'; // 쓰기

// innerText 속성 : 요소 안의 "텍스트"를 가져오거나 수정
// => 입력된 문자열을 그대로!!
// 읽기: 요소.innerText
// 쓰기: 요소.innerText = 수정하려는 텍스트;
console.log(div1.innerText); // 읽기
div1.innerText = '여기는 <b>첫 번째</b> 태그입니다. &hearts;'; // 쓰기
div1.innerText = '안녕하세요!!'; // 쓰기
console.log(div2.innerText); // 읽기
div2.innerText = '나는 더 이상 안 졸리다'; // 쓰기

// textContent 속성 : innerText와 마찬가지로 텍스트 정보를 표시
// IE9 이전 버전에서는 사용 불가능
console.log(div1.textContent); // 읽기
div1.textContent = '안녕하세요2222!!!!!'; // 쓰기


// ====================================
// 2. 속성 접근
// 요소.속성명
let beach = document.getElementById('beach');
console.log(beach.id); // beach
console.log(beach.src); // 이미지 경로
console.log(beach.width); // 200
console.log(beach.alt); // beach

let google = document.getElementById('google');
console.log(google);
console.log(google.href);
console.log(google.target);
// getAttribute() : 속성값 가져오기
// setAttribute() : 속성값 설정하기
console.log(google.getAttribute('href'));
google.setAttribute('href', 'https://naver.com');
google.innerText = 'Naver';


// (연습)
// 이미지 요소
// - 이미지 바꾸기
// - width/height 변경
let beach2 = document.getElementById('beach2');
beach2.setAttribute('src', './image/beach3.jpg'); // beach3 이미지로 경로 변경
beach2.setAttribute('width', '300');
beach2.setAttribute('height', '100');


// ============================================
// 3. 스타일(css) 제어 : JS로 css 설정 가능!
// 3-1. HTML inline 방식
let h1 = document.querySelector('h1');
console.log(h1);
console.log(h1.style);
console.log(h1.style.fontSize); // camel case로 접근

// h1.style.color = 'limegreen';
// console.log(h1.style.color);
// h1.style.backgroundColor = 'skyblue';
// console.log(h1.style.backgroundColor);
// h1.style.border = '4px solid brown';
// h1.style.textShadow = '2px 2px 10px #f005'

let lis = document.querySelectorAll('li');
console.log(lis);
// 반복문을 이용해서 여러 요소 스타일을 한번에 설정
// for (let i = 0; i < lis.length; i++) {
//     console.log(lis[i]);
//     lis[i].style.color = 'rgb(0, 100, 200)';
//     lis[i].style.fontSize = '20px';
//     lis[i].style.backgroundColor = '#ddd';
// }

// for ... of 반복문
// for (let 반복변수 of 배열) {}
const mylists = ['a', 'b', 'c', 'd'];
for (let list of mylists) {
    console.log(list);
}

// for (let li of lis) {
//     console.log(li);
//     li.style.color = 'rgb(0, 100, 200)';
//     li.style.fontSize = '30px';
//     li.style.backgroundColor = 'skyblue';
//     li.style.textAlign = 'center';
//     li.style.margin = '10px';
//     li.style.width = '100px';
//     li.style.padding = '10px';
//     li.style.fontStyle = 'italic';
//     li.style.borderRadius = '100px';
// }


// 3-2. 클래스 제어 방식
// classList 속성
// - add(클래스명) : 클래스 추가
// - remove(클래스명) : 클래스 삭제
// - toggle(클래스명) : 클래스 있으면 제거, 없으면 추가
// - contains(클래스명) : 해당 클래스가 있는지 boolean 값으로 반환 (true/false)

//add()
console.log(h1);
h1.classList.add('h1'); // h1이라는 클래스를 추가해줌. 그러면 style 태그 안에 있는 h1 클래스가 붙는다
console.log(h1.classList);
// lis에 저장되어 있는 각각 li 요소에 접근해 .list-style 클래스 붙여 주기
for (let li of lis) {
    li.classList.add('list-style');
}
// for (let i = 0; i < lis.length; i++) {
//     lis[i].classList.add('list-style');
// }

// remove()
console.log(h1.classList); // 삭제 전
h1.classList.remove('title');
console.log(h1.classList); // 삭제 후

// toggle()
h1.classList.toggle('happy'); // 없어서 추가됨
h1.classList.toggle('happy'); // 있어서 제거됨

// contains()
console.log(h1.classList.contains('h1')); // true
console.log(h1.classList.contains('lucky')); // false


// ======================================
// 계층 이동
// 부모, 자식, 형제
const apple = document.querySelector('li');
const fruits = document.querySelector('ul');
console.log(apple); // 사과
console.log(fruits);

// 1. 부모 노드 찾기
// 직속 부모는 하나
console.log(apple.parentElement); // ul#fruits
console.log(apple.parentElement.parentElement); // body

// 2. 자식 노드 찾기
// 자식 요소는 여러 개 나올 수 있다
console.log(fruits.children); // li*4
console.log(fruits.children[0]); // 0번 자식 요소
console.log(fruits.children[1]); // 1번 자식 요소
console.log(fruits.children[2]); // 2번 자식 요소
console.log(fruits.children.parentElement); // 부모 -> 자식 -> 부모

// 3. 형제 노드 찾기
const lists = document.querySelectorAll('li');
console.log(lists); // li*4 배열 형태로 가져옴
const listOrange = lists[2]; // = document.querySelectorAll('li')[2]
console.log(listOrange);
console.log(listOrange.previousElementSibling); // 오렌지 위에 있는 키위
console.log(listOrange.nextElementSibling); // 오렌지 아래에 있는 수박

// 연습
const numbers = document.querySelector('ol');
const three = document.querySelectorAll('ol > li')[2]; // = numbers.children[2]
const number3 = document.querySelector('ol > ol'); // = numbers.children[3]
const num3two = document.querySelectorAll('ol > ol > li')[1]; // = numbers.children[3].children[1];

console.log(number3.parentElement); // ol#numbers
console.log(three.parentElement); // ol#numbers
console.log(num3two.parentElement); // ol#number-3
console.log(numbers.children); // li*3 ol#number-3 li
console.log(three.previousElementSibling); // two
console.log(num3two.nextElementSibling); // three-three