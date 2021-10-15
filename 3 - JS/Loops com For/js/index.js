let nave = prompt('Digite o nome da nave');

let novaNave = '';

let caractere = prompt('Qual letra voce deseja substituir?');

let novoCaractere = prompt('Qual letra voce gostariar de por no lugar de "' + caractere + '"?');

for (let i = 0; i < nave.length; i++) {
    if (nave[i] == caractere) {
        novaNave += novoCaractere;
    } else {
        novaNave += nave[i];
    }
}

alert('O novo nome da nave é: ' + novaNave);