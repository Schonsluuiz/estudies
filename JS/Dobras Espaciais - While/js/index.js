let warpCount = 0;
let choseOption = '';

let spaceship = prompt('Digite o nome da nave?');

choseOption = prompt('Deseja entrar em dobra espacial?\n1 - Sim\n2 - Não');

while (choseOption == '1') {
    warpCount++;
    choseOption = prompt('Deseja realizar a proxima dobra?\n1 - Sim\n2 - Não')
}

alert('Nave: ' + spaceship + '\nQuantidade de dobras: ' + warpCount);