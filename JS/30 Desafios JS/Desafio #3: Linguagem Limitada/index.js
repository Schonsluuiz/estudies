//Escreva uma função que recebe um array e retorne um novo array com todas as posições invertidas do original sem altera-lo. Não utilize os metodos do objeto array do javascript (reverse, map, forEach, etc)

function inverter(arr) {
  var res = []
  for (var i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
    res[i] = arr[j]
  }
  return res
}

let arr1 = [1, 2, 3, 4]
let arr2 = ['Oh', 'Hi', 'Mark']
let arr3 = ['Schons', 'Antonio', 'Luiz']
