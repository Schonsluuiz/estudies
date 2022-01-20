import funcionarios from './funcionarios.js';
import {filtraFuncionariosIdade, retornaNomesFuncionarios, imprimeNomesFuncionarios} from './trataDadosFuncionarios.js';

let fundionariosIdade = filtraFuncionariosIdade(funcionarios);
let nomesFuncionarios = retornaNomesFuncionarios(fundionariosIdade);
imprimeNomesFuncionarios(nomesFuncionarios);