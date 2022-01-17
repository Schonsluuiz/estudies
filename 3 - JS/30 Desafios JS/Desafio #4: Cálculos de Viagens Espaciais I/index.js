let num = 3514

function value(num) {
  let numString = num + ''
  let uni = numString.split('')
  let res = ''
  for (i = 0; i < numString.length; i++) {
    uni[i] = uni[i] * uni[i]
    res = res + (uni[i] + '')
  }

  return res
}

console.log(value(num))
