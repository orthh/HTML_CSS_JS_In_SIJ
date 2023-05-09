const lis = document.querySelectorAll("ul > li");

const colors = ["red", "green", "blue", "gray"];

// 이동
const move = () => {
  for (let i = 0; i < lis.length; i++) {
    let width = lis[i].clientWidth;
    lis[i].style.marginLeft = width * (i % colors.length) + "px";
  }
};

// border-radius처리
const round = () => {
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.borderTopRightRadius = "50%";
    lis[i].style.borderBottomLeftRadius = "50%";
  }
};
