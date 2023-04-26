// 배열에 저장된 데이터를 반복문으로 출력하기!

// 1. for문
let nameList = ["김혁", "황정용", "김소희", "정다운", "안영석"];
for (let i = 0; i < nameList.length; i++) {
  console.log(nameList[i]);
}
console.log("----------구분선----------");

// 2. for of 문
let foodList = ["고구마", "감자", "햄버거"];
for (const item of foodList) {
  console.log(item);
}
console.log("----------구분선----------");

// 3. forEach 문
let colorList = new Array("빨강", "파랑", "초록");
colorList.forEach((element, index) => {
  console.log(index, element);
});
