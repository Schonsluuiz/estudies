let nameTeamHome = prompt('Digite o nome do time da casa: ');
let scoreHome = 0;

let nameTeamVisit = prompt('Digite o nome do time visitante: ');
let scoreVisit = 0;

let time = 0;

let escolhaUsuario;

function menu() {
    let opcao;

    while (opcao != '1' && opcao != '2' && opcao != '3' && opcao != '4' && opcao != '5') {
        opcao = prompt('O que deseja fazer? \n' +
            '1-Marcar gol para o ' + nameTeamHome + '? \n' +
            '2-Marcar gol para o ' + nameTeamVisit + '? \n' +
            '3-Passar o tempo\n' +
            '4-Dados da partida\n' +
            '5-Terminar a partida\n'
        )

    }
    return opcao;
}

function goalHome(goalsHome) {
    let newScoreHome = scoreHome + 1;
    return newScoreHome;
}

function goalVisit(goalsVisit) {
    let newScoreVisit = scoreVisit + 1;
    return newScoreVisit;
}

function spendTime(time) {
    let newTime = time + 5;
    if (newTime >= 90) {
        newTime = 90;
    }
    return newTime;
}

function dados(nameTeamHome, goalsHome, nameTeamVisit, goalsVisit) {
    alert(nameTeamHome + ' - ' + newScoreHome + '\n' + nameTeamVisit + ' - ' + newScoreVisit + '\nTempo de jogo: ' + time + 'minutos')
}



do {
    escolhaUsuario = menu()
    switch (escolhaUsuario) {
        case '1':
            goalsHome = goalHome(goalsHome);
            break;
        case '2':
            goalsVisit = goalVisit(goalsVisit);
            break;
        case '3':
            time = spendTime(time)
            break;
        case '4':
            dados(nameTeamHome, goalsHome, nameTeamVisit, goalsVisit);
            break;
        default:
            dados(nameTeamHome, goalsHome, nameTeamVisit, goalsVisit)
            alert('Encerrando partida.')
    }
} while (escolhaUsuario != '5')