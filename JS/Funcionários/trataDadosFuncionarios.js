function verificaFuncionariosIdade(funcionario) {
    return (funcionario.idade > 30);
}

function filtraFuncionariosIdade(funcionarios)
{
    let funcionariosFiltro = funcionarios.map(verificaFuncionariosIdade);

    return funcionariosFiltro;
}

function retornaNomesFuncionarios(funcionarios)
{
    let nomes = funcionarios.filter(funcionario => funcionario.nome);
    return nomes;
}

function imprimeNomesFuncionarios ( arrayNomes )
{
    arrayNomes.forEach(nome => {
        console.log(nome);
    });
}

export {filtraFuncionariosIdade, retornaNomesFuncionarios, imprimeNomesFuncionarios};