let gastos = [195, 108, 100, 150, 21, 25, 47]

function saldo(gastos) {
  let salario = 2580

  let somaGastos = 0

  for (var i = 0; i < gastos.length; i++) {
    somaGastos += gastos[i]
  }

  saldo = salario - somaGastos

  return saldo
}

console.log(saldo(gastos))
