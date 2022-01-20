function acelelar(velocidade, printer) {
    let acelelaracao = 15;

    while (velocidade < 250) {
        printer(velocidade);
        velocidade += acelelaracao;
    }
    alert('Nave na velocidade maxima')
}

let velococidadeDaNave = 0;

acelelar(velococidadeDaNave, function (velocidade) {
    console.log('Velocidade atual: ' + velocidade)
})