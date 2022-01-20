//Escreva uma funcao que recebe um numero qualquer de numeros como argumentos e retorne a media aritimetica entre eles

function mediaAlunos(notas) {
  n = notas.length

  let soma = notas.reduce(function (soma, i) {
    return soma + i
  })
  return soma / n
}

let sala1 = [25, 75]
let sala2 = [10, 9, 6, 8, 9, 1, 5, 7]
let sala3 = [2, 5, 7, 1, -2]
let sala4 = [10, 10, 10, 10, 9]

console.log(mediaAlunos(sala1))
console.log(mediaAlunos(sala2))
console.log(mediaAlunos(sala3))
console.log(mediaAlunos(sala4))
