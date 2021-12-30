//Escreva uma funcao que recebe um numero e retorna uma quantidade de "chunks" separados por um traco '-', sem utilizar estrutura de repeticao

function chunks(num) {
  str = 'chunk-'
  return str.repeat(num) + 'chunk'
}

entrada = 5

valorEntrada = entrada - 1

console.log(chunks(valorEntrada))
