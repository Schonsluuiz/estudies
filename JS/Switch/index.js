let velocity = 80

switch (velocity * 2) {
    case 100:
        console.log('Sua velocidade é 100km/s')
        break
    case 160:
        console.log('Sua velocidade é 160 km/s')
        break
    default:
        console.log('Sua velocidade não foi identificada')
}

let spaceship = 'Elemental'

switch (spaceship) {
    case 'Golias':
        console.log('Nave mais resistente')
        break
    case 'Elemental':
        console.log('Nave ')
        break
    case 'Raptor':
        console.log('Nave mais rapida')
        break
    case 'Enterprise':
        console.log('Nave da Frota Estrelar')
        break
    case 'Elemental':
        console.log('Nave com melhor armamento')
    default:
        console.log('Nave comum')
}

let teste = 90

switch (teste) {
    case 80:
    case 90:
    case 100:
        console.log('teste1')
        break
    case 110:
        console.log('teste2')
        break
    default:
        console.log('teste3')
}