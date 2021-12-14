let nave = {
  nome: 'Colussus',
  passageiros: 10,
  emMovimento: false,
}

let { nome: nomeNave, passageiros } = nave

//console.log(nomeNave, passageiros)

let carros = ['Gol', 'Golf', 'Polo']

let [gol, golf, polo] = carros

//let gol = carros[0]
//let golf = carros[1]
//let polo = carros[2]

//console.log(gol, polo)

function printCarros([gol, golf, polo]) {
  console.log(gol, polo)
}

printCarros(carros)
