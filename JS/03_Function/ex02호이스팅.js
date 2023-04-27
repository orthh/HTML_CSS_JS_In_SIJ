// 호이스팅 : 선언문이 코드의 선두로 끌어올려진 것처럼 동작하는 현상

// 소스코드 처리 과정 : 평가 -> 실행
// 평가 : 모든 선언문(변수, 함수 등) 등록
// 실행(런타임)

// 변수 호이스팅 -> var
console.log(lunchMenu); // undefined
// undefined -> 선언O, 할당X
var lunchMenu = "고구마";
console.log(lunchMenu); // 고구마
// console.log(dinnerMenu); error
let dinnerMenu = "감자";
console.log(dinnerMenu); // 감자

// 함수 호이스팅 -> function (함수 선언식)
hoisting("위"); // 나옴
function hoisting(val) {
  console.log(val, "함수 선언문");
}
hoisting("아래");

// 함수 표현식 -> 호이스팅X
// hoisting2("아래"); 에러
const hoisting2 = function (val) {
  console.log(val, "함수 표현식");
};
hoisting2("아래");
