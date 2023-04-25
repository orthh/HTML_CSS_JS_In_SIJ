let num1 = "100";
let num2 = 200;
let sum = num1 + num2;

console.log(num1 + "과" + num2 + "의 합 >> " + (Number(num1) + num2));

// Template Literals(템플릿 리터럴)
// : 표현식/문자열 삽입, 여러 줄 문자열 등 다양한 기능을 제공
// -> 벡틱(`) 기호 사용

console.log(`${num1}과${num2}의 합 >> ${Number(num1) + num2}`);
console.log(`안녕하세요
반갑습니다`);