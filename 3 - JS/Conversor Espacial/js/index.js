let distanceLightYears = prompt('Digite a distância em Anos-Luz')

let choseOption = prompt('Escolha como gostaria de converter a distância\n1 - Parsec (pc)\n2 - Unidade Astronômica (AU)\n3 - Quilômetros (km)')

let choseUnity
let convertedDistance

switch (choseOption) {
    case '1':
        choseUnity = 'Parsec'
        convertedDistance = distanceLightYears * 0.306601
        break
    case '2':
        choseUnity = 'Unidade Astronômica'
        convertedDistance = distanceLightYears * 63241.1
        break
    case '3':
        choseUnity = 'Quilometros'
        convertedDistance = distanceLightYears * (9.5 * Math.pow(10, 12))
    default:
        console.log('Escolha invalida')
}

alert('Distancia em Anos-Luz: ' + distanceLightYears + '\n' + choseUnity + ': ' + convertedDistance)