function chunks(num) {
    str = 'chunk-'
    return str.repeat(num) + 'chunk'
}

entrada = 5

valorEntrada = entrada - 1

console.log (chunks(valorEntrada))