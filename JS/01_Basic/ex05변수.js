var a = 1;
var a = 2;  // 재선언 가능
console.log(a); // 2
a = 3; // 재할당 가능
console.log(a); // 3

let b = 1;
// let b = 2;  error : 재선언 금지
b = 2; // 재할당 가능
console.log(b); // 2

const c = 1;
// const c = 2; : error 재선언 금지
// c = 2; error : 재할당 금지, 여기서는 에러 안뜨지만 실행할 때 에러
// console.log(c);