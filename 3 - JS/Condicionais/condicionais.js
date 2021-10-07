let vel = 110

if (vel < 40) {
    console.log('Velocidade baixa')
} else if (vel <= 100) {
    console.log('Cuidado! Entrando em velociade de risco')
} else {
    console.log('Velocidade de Risco')
}

(vel > 100) ? console.log('Velocidade mair que 100'): console.log('Velocidade menor que 100')