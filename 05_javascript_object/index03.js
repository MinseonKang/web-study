// document 객체
// 속성

console.log(document.documentElement); // html 태그를 반환
console.log(document.head); // head 태그를 반환
console.log(document.body); // body 태그글 반환

console.log(document.URL); // 웹페이지 전체 url을 반환
console.log(document.domain); // 웹페이지 url에서 도메인을 반환
// url > domain

// html 요소 선택하는 방법
// - dom 요소 선택하기 (DOM API)

// 노드 객체 가져오기
// 1. getElementById(아이디명): 아이디 이름으로 요소 찾기
// id는 유일하므로 속도가 가장 빠름!
console.log(document.getElementById('first'));
console.log(document.getElementById('second'));
console.log(document.getElementById('third'));
console.log(document.getElementById('fourth'));
console.log(document.getElementById('fifth'));
console.log("================")
// 2. getElementsByClassName(클래스명): 클래스 이름으로 요소 찾기
console.log(document.getElementsByClassName('korean'));
console.log(document.getElementsByClassName('bunsik'));
console.log(document.getElementsByClassName('dessert'));
console.log(document.getElementsByClassName('korean')[0]);
console.log("================")
// 3. getElementsByTagName(태그명): 태그 이름으로 요소 찾기 
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('h2'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByTagName('li')[2]);
console.log("================")
// 4. getElementsByName(name속성값)
console.log(document.getElementsByName('userid'));
console.log(document.getElementsByName('userid')[0]);
console.log(document.getElementsByName('userid')[0].value);
console.log("================")


// "css 선택자"를 이용해 노드 객체 가져오기
// 5. querySelector(css 선택자) : 일치하는 첫 번째 요소를 가져옴
console.log(document.querySelector('.korean'));
console.log(document.querySelector('.bunsik'));
console.log(document.querySelector('.dessert'));
console.log(document.querySelector('input[name="userid"]'));

// 6. querySelectorAll(css 선택자): 일치하는 "모든 요소"를 배열로 가져옴
console.log(document.querySelectorAll('.korean'));
console.log(document.querySelectorAll('.bunsik'));
console.log(document.querySelectorAll('.dessert'));
console.log(document.querySelectorAll('.korean')[0]);

console.log(document.querySelectorAll('.lunch-list #third'));
console.log(document.querySelectorAll('#third'));

