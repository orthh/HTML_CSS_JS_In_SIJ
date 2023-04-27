// 화살표 함수 : 함수 표현식 형태, function 키워드 대신 =>

const intro = () => console.log("안녕하세요. 저는 고구마입니다. 🍠");
intro();

// 매개변수 -> 하나일 때, 소괄호 생략 가능(pritter가 넣음 ㅠ)
const lunch = (menu) => console.log(`점심으로는 ${menu} 먹었습니다.🍖`);

lunch("감자");

// 매개변수 + return문
const dinner = (menu) => `저녁으로는 ${menu} 먹을 거에요! 🥩`;

console.log(dinner("고구마"));

// 매개변수 1개 -> () 생략 가능
// 실행문 1개 -> {}, return 생략 가능
