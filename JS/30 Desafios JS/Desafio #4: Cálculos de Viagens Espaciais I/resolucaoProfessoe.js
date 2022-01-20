function squareDigits(num){  const str = num.toString()
  let result = ""

  for (let i = 0; i < str.length; i++) {
    result += Math.pow(+str[i], 2).toString()
  }

  return Number(result)
}
