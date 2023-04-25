// 1. 사용자로부터 키와 몸무게를 입력받는다.
// 2. 적정 몸무게 및 사용자 몸무게의 차이를 구한다.
// 3. 조건에 따라 결과(초과/미달/정상)를 구한다.
// 4. 결과값들을 형태에 맞춰서 HTML문서내에 출력해준다.
let height = Number(prompt("키를 입력하세요."));
let weight = Number(prompt("몸무게를 입력하세요."));
let normal = (height - 100) * 0.9;
// 절대값 구하기 : Math.abs(data)
let gap = weight - normal;
let abs_gap = Math.abs(gap);

let result = "";
if(gap > 0){
    result = "초과한";
}else if(gap < 0){
    result = "미달인";
}else{
    result = "정상인"
}

document.write(`
    신장 : ${height}cm <br/>
    몸무게 : ${weight}kg<br/>
    적정몸무게 : (${height} - 100) * 0.9 = ${normal}kg <br/>
    결과 : 적정 체중은 ${normal}kg이며, 현재 적정 체중에서 ${abs_gap}kg ${result} 것을 알수 있습니다.
`);

