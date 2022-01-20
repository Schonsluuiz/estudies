
import jogos from './dadosJogos.js';
import verificaEstudio from './filtraEstudio.js';

let jogosObsidian = jogos.filter(verificaEstudio);

jogosObsidian.forEach(jogo => {
    console.log(jogo.jogo);
});