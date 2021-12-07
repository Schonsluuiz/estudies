import itensCarrinho from './dadosCarrinhos.js';
import somarValor from './calculaValorCompra.js';

const valorAPagar = itensCarrinho.filter(somarValor, 0);

console.log(valorAPagar);