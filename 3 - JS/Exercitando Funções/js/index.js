let nomeNave = prompt('Digite o nome da nave: ');
let velocidadeNave = 0;
let escolhaUsuario;

function menu() {
    let opcao;

    while (opcao != '1' && opcao != '2' && opcao != '3' && opcao != '4') {
        opcao = prompt('O que deseja fazer? \n' +
            '1-Acelerar a nave em 5km/s\n' +
            '2-Desacelerar em 5km/s\n' +
            '3-Imprimir dados de bordo\n' +
            '4-Sair'
        )
    }
    return opcao;
}

function acelerar(velocidadeNave) {
    let novaVelocidade = velocidadeNave + 5;
    return novaVelocidade;
}

function desacelerar(velocidadeNave) {
    let novaVelocidade = velocidadeNave - 5;
    if (novaVelocidade < 0) {
        novaVelocidade = 0;
    }
    return novaVelocidade;
}

function dados(nomeNave, novaVelocidade) {
    alert('Nome da nave: ' + nomeNave + '\nVelocidade: ' + velocidadeNave + 'kms/s')
}

do {
    escolhaUsuario = menu()
    switch (escolhaUsuario) {
        case '1':
            velocidadeNave = acelerar(velocidadeNave);
            break;
        case '2':
            velocidadeNave = desacelerar(velocidadeNave);
            break;
        case '3':
            dados(nomeNave, velocidadeNave);
            break;
        default:
            alert('Encerrando programa de bordo.')
    }
} while (escolhaUsuario != '4')