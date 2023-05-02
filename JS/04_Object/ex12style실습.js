const lis = document.querySelectorAll("#container > li");

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

let cnt = 0;
lis.forEach((element) => {
  element.style.backgroundColor = colors[cnt++ % colors.length];
});

const move = () => {
  let width = lis[0].clientWidth;
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.marginLeft = width * (i % colors.length) + "px";
  }
};
const round = () => {
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.borderTopRightRadius = "50%";
    lis[i].style.borderBottomLeftRadius = "50%";
  }
};
const reset = () => {
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.borderRadius = "0px";
  }
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.marginLeft = "0px";
  }
};
