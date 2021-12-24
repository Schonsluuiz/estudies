function average(numbers) {
  let sum = 0

  numbers.forEach((numbers) => {
    sum += numbers
  })

  const avg = sum / numbers.length

  return avg
}

let sala1 = [25, 75]
let sala2 = [10, 9, 6, 8, 9, 1, 5, 7]
let sala3 = [2, 5, 7, 1, -2]
let sala4 = [10, 10, 10, 10, 9]

console.log(average(sala1))
console.log(average(sala2))
console.log(average(sala3))
console.log(average(sala4))
