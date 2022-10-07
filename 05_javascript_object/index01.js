/*
자료형
    - 기본형
    - 객체 (object)
        - 배열
        - 객체 리터럴 (객체)
*/

// 1. 배열
const arr1 = ['red', 'orange', 'yellow', 1, 2, 3]; // 배열 생성 방법 1
const arr2 = new Array('red', 'orange', 'yellow', 1, 2, 3); // 배열 생성 방법 2
console.log(arr1);
console.log(typeof arr1); // object
console.log(typeof(arr1)); // object
console.log(arr2);
console.log(typeof arr2); // object
console.log(typeof(arr2)); // object

// 배열 원소(요소) 읽기
// 인덱스: 배열 원소 위치값
// 숫자는 0부터 시작하므로 주의
let str = 'Green';
console.log(str[0])
console.log(arr1[0]); // red
console.log(arr1[5]) // 3


console.log(arr1); // 'red', 'orange', 'yellow', 1, 2, 3
arr1[2] = '따란';
console.log(arr1); // 'red', 'orange', '따란', 1, 2, 3

// arr1에서 숫자 2 -> 100
arr1[4] = 100;
console.log(arr1);

// 원소 추가
arr1[6] = '추가';
console.log(arr1);
arr1[7] = '추추가';
console.log(arr1);

// 동떨어진 인덱스 번호로 원소값 추가; 그 사이에 빈값이 들어감 -> undefined가 들어감
arr1[10] = "얍";
console.log(arr1);
console.log(arr1[8]); // undefined
console.log(arr1[9]); // undefined

// 배열에서 자주 사용되는 속성과 메서드
// 1. length : 배열 길이 = 요소 개수 (속성)
console.log(arr2);
console.log(arr2.length);
console.log(arr1[arr2.length -1]);
// 원소 개수 6 = 배열 길이 6 // 인덱스 번호 = 0 1 2 3 4 5 // 배열에서 마지막 인덱스 번호 = 배열 길이 - 1

// 2. push(x): x를 배열 맨 뒤에 추가
arr2.push(4);
arr2.push(5);
arr2.push(6);
arr2.push(7, 8, 9); // 값 여러 개 추가 가능 // 'red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log(arr2);

// 3. pop(): 맨 뒤 요소를 제거
arr2.pop();
console.log(arr2); // 'red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6, 7, 8
arr2.pop();
console.log(arr2); // 'red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6, 7
arr2.pop();
console.log(arr2); // 'red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6

// 4. unshift(x): 맨 앞에 x를 추가
arr2.unshift('hi');
console.log(arr2); // 'hi', 'red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6
arr2.unshift('a', 'b'); // 값 여러 개 추가 가능
console.log(arr2); //'a', 'b', 'hi', 'red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6

// 5. shift(): 맨 앞 요소를 제거
arr2.shift();
console.log(arr2); // 'b', 'hi', 'red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6
arr2.shift();
console.log(arr2); // 'hi', 'red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6]

// 6. indexOf(x): 배열 원소에 x가 있는지 찾음
console.log(arr2.indexOf('orange')); // 2
console.log(arr2.indexOf('xxxx')); // -1 : 없는 값을 찾으면 -1 반환

// 응용 2차원 배열
const korean = [
    ['가', '나', '다'],
    ['라', '마', '바'],
    ['사', '아', '자']
];
console.log(korean);
console.log(korean[0]); // '가', '나', '다'
console.log(korean[1]); // '라', '마', '바'
console.log(korean[2]); // '사', '아', '자'
console.log(korean[0][0]); // '가'
console.log(korean[1][0]); // '라'
console.log(korean[2][0]); // '사'

// 퀴즈) 아래 배열에서 아이스크림 출력하기
const letters = [
    ['사', '스', '자', '크'],
    ['진', '안', '리', '이'],
    ['가', '수', '림', '나'],
    ['아', '으', '차', '운'],
  ];
console.log(letters[3][0]); // 아
console.log(letters[1][3]); // 이
console.log(letters[0][1]); // 스
console.log(letters[0][3]); // 크
console.log(letters[2][2]); // 림


// 3차원 배열
const nums = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
];
console.log(nums);
console.log(nums[1][0][1]); // 8


// ####################################
// 2. 객체 리터럴, 딕셔너리 (object)
// 배열: 순서가 있음
// 객체: 키-값 형태
// {}를 이용해 생성 {key1: value, key2: value2, key3: value3, ...}

const cat = {
    name: '나돌이',
    age: 1,
    mew : function() {
        return '냐옹';
    },
}
console.log(cat);

// 객체 접근하기
// 1. 점 표기법 (더 많이 사용함!)
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew());
// value 변경하기
cat.age = 3;
console.log(cat);
// key-value 추가하기
cat.gender = 'f';
console.log(cat);

// 2. 대괄호 표기법
console.log(cat['name']);
console.log(cat['gender']);
console.log(cat['mew']());
//value 변경하기
cat['age'] = 5;
console.log(cat);
// key-value 추가하기
cat['weight'] = 5;
console.log(cat);


// value값: boolean, array, number, string, object ...
const dog = {
    name: '새해',
    isShichu: true,
    age: 13,
    sibling: ['Max', 'Lucy', 'Bella'],
};

console.log(dog);
console.log(dog.name);
console.log(dog.isShichu);
console.log(dog.age);
console.log(dog.sibling);
console.log(dog.sibling[0]);
console.log(dog.sibling[1]);
console.log(dog.sibling[2]);

// 객체 타입 확인하기
console.log(typeof dog); // object
console.log(typeof(dog)); // object
