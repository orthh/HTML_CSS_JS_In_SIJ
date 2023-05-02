// span 요소 가져오기
// (1) getElement~
let getSpan1 = document.getElementById("spanTag");
console.log(getSpan1);
let getSpan2 = document.getElementsByTagName("span")[0];
console.log(getSpan2);
// (2) querySelector~
// (2-1) 태그 선택자
let getSpan3 = document.querySelector("span");
console.log(getSpan3);
const clickBtn = () => {
  getSpan3.style.color = "tomato";
  // (2-2) 아이디 선택자
  document.querySelector("#spanTag").style.fontSize = "25px";
  getSpan2.style.fontWeight = "900";
};
