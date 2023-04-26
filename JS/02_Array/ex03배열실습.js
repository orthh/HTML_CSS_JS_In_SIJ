let arr = [23, 54, 78, 13, 44];

let max = arr[0];
arr.forEach((elem) => {
  if (max < elem) max = elem;
});
alert("최대값>> " + max);
// alert("최대값>> " + Math.max(...arr));
