let num = 3514;

function value(num) {
  let numString = num.toString();
  let uni = numString.split("");
  let res = "";
  for (i = 0; i < numString.length; i++) {
    uni[i] = uni[i] * uni[i];
    res += uni[i] + "";
  }

  return parseInt(res);
}

console.log(value(num));
