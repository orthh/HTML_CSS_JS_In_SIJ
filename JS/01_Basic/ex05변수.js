
// 재선언 : 같은 변수 이름으로 다시 변수를 선언하는 것
// 재할당 : 선언된 변수에 다시 값을 할당하는것
// var : 재선언O, 재할당O
var a = 1;
var a = 2;  // 재선언 가능
console.log("var 최초 선언",a); // 2
a = 3; // 재할당 가능
console.log(a); // 3

// let : 재선언X, 재할당O
let b = 1;
// let b = 2;  error : 재선언 금지
b = 2; // 재할당 가능
console.log(b); // 2

// const : 재선언X, 재할당X
const c = 1;
// const c = 2; : error 재선언 금지
// c = 2; error : 재할당 금지, 여기서는 에러 안뜨지만 실행할 때 에러
// console.log(c);