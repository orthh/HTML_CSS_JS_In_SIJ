const spanVal = document.querySelector("span");

// 증가
const increase = () => {
  spanVal.innerText++;
};

// 감소
const decrease = () => {
  spanVal.innerText > 0 && spanVal.innerText--;
};

// 초기화
const reset = () => {
  spanVal.innerText = 0;
};
