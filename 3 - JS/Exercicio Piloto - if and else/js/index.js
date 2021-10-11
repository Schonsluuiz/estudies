let pilotName = prompt('Qual o nome do piloto?')

let velocity = 0

let newVelocity = prompt('Qual velocidade gostaria de acelerar a nave?')

let confirmVelocity = confirm('Confirmar velociade de ' + newVelocity + 'km/s ?')

if (confirmVelocity) {
    velocity = newVelocity
}

if (velocity <= 0) {
    alert('Nave esta parada. Considere partir e aumentar a velocidade')
} else if (velocity < 40) {
    alert('Voce esta devagar. Podemos aumentar mais')
} else if (velocity < 80) {
    alert('Parece uma boa velocidade para manter')
} else if (velocity < 100) {
    alert('Velocidade alta. Considere diminuir')
} else {
    alert('Velocidade perigosa. Controle automatico forcado')
}

alert('Piloto: ' + pilotName + '\nVelocidade: ' + velocity + 'km/s')