let num = "3.14";
console.log(typeof num); // string

// 1. 문자 -> 실수 : parseFloat()
num = parseFloat(num);
console.log(typeof num); // number
console.log("문자 -> 실수" , num); // 3.14

// 2. 문자 -> 정수 : parseInt()
num = parseInt(num);
console.log(typeof num); // number
console.log("문자 -> 정수" ,num); // 3

// 3. 문자 -> 숫자 : Number()
let num2 = "5";
console.log('문자 -> 숫자', Number(num)); // 3
console.log('문자 -> 숫자', Number(num2)); // 5

// 4. 숫자 -> 문자 : String(data), data.toString()
let num3 = 100;
console.log(typeof num3); // number
console.log(typeof String(num3)); // string
console.log("숫자 -> 문자 ", String(num3)); // 100
console.log(typeof num3.toString()); // string