// 1. 이모티콘, 행의 개수 입력 받기

// 2. 이모티콘을 행의 개수에 맞춰
//    피라미드 형태로 출력하는 함수 만들기

let emoji = prompt("이모티콘을 입력하세요.");
let n = Number(prompt("출력할 행의 개수를 입력하세요."));

const printEmoji = (emo, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      document.write(emo);
    }
    document.write("<br/>");
  }
};
printEmoji(emoji, n);
