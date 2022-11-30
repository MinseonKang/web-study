// 클래스
// - 객체를 생성하는 템플릿
// 클래스: 붕어빵 틀, 객체: 붕어빵

class Cat {
  // 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  meow() {
    return "야옹!";
  }

  eat() {
    return "밥 먹자!";
  }
}

let navi = new Cat("나비", 2);
let nyang = new Cat("냥이", 3);
console.log(navi.name);
console.log(navi.age);
console.log(navi.meow());
console.log(navi.eat());

console.log(nyang.name);
console.log(nyang.age);
console.log(nyang.meow());
console.log(nyang.eat());

// 연습
class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  study() {
    return "공부하자!";
  }
}

let minji = new Person("민지", "여");
let minku = new Person("민규", "남");
console.log(minji);
console.log(minji.name);
console.log(minji.gender);
console.log(minji.study());
console.log(minku);
console.log(minku.name);
console.log(minku.gender);
console.log(minku.study());
