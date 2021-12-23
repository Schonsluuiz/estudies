//Escreva uma funcao que recebe um numero qualquer de numeroscomo argumentos e retorne a media aritimetica entre eles

function mediaAlunos(notas) {
  n = notas.length

  let soma = notas.reduce(function (soma, i) {
    return soma + i
  })
  return soma / n
}

let sala1 = [25, 75]

console.log(mediaAlunos(sala1))
