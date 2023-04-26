// 1. '원하는 색상을 입력하세요' 라는 입력창 만들기
// 2. 빨강 -> red / 초록 -> green / 파랑 -> blue
// 그 외에는 -> 잘못 입력하셨습니다. (알림 팝업창)
// 배경색 바꾸는 코드 -> ex02따라하기.html 참고!

let inputColor = prompt("원하는 색상을 입력하세요");
let body = document.querySelector("body");
let result = "";
switch (inputColor) {
  case "빨강":
    result = "red";
    break;
  case "초록":
    result = "green";
    break;
  case "파랑":
    result = "blue";
    break;
  default:
    alert("잘못 입력하셨습니다.");
    break;
}
body.style.backgroundColor = result;
