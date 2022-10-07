function addNode() {
    let div = document.getElementById('div1');
    //요소 생성하기
    //createElement()
    let p = document.createElement('p'); // p 태그 생성 // <p></p>
    p.innerText = '버튼을 눌러 만들어진 p 태그'; // <p>버튼을 눌러 만들어진 p 태그</p>
    p.style.fontWeight = '700';
    p.classList.add('append-p');

    // div.appendChild(p);
    // div.append('1번 추가');
    // div.append(p, '2번 추가');
    div.append(p);
}

function removeNode() {
    let div = document.querySelector('#div1');
    let p = document.querySelector('#div1 > p'); // div 안에 있는 p를 선택

    // div.removeChild(p);
    p.remove();
}

// 노드 생성/추가/삭제
// 1. 노드 생성
// createElement()

// 2. 노드 추가
// appendChild(): 노드 객체만 추가, 한 번에 한 개
// append(): 노드 객체 or 텍스트 추가, 한 번에 여러 개 가능

// 3. 노드 삭제
// 부모노드.removeChild(자식노드) : 부모요소의 자식노드를 삭제
// 노드.remove(): "선택한 요소"를 삭제



// ====================
let ul = document.querySelector('ul');
let li = document.createElement('li'); // <li></li>
li.innerText = '오렌지'; // <li>오렌지</li>

ul.append(li);



// ====================
let container = document.querySelector('.container');
let img = document.createElement('img'); // <img>

img.setAttribute('src', './image/grass.png'); // <img src="./image/grass.png">
img.setAttribute('alt', '잔디'); // <img src="./image/grass.png" alt="잔디">
let title = document.createElement('div'); // <div></div>
title.innerText = '잔디입니다.' // <div>잔디입니다.</div>

container.append(img); // container에 img 추가
container.append(title); // container에 title 추가


// ======================
let text = document.querySelector('.text');
text.innerText = '오늘 정말 어렵네요';
