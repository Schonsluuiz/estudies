
function retornaAtividadeDia(){
    let data = new Date();
    let diaSemana = data.getDay();
    let atividades = ['Ver TB', 'Estudar', 'Desenhar', 'Jogar futebol', 'Jogar basquete', 'Correr', 'Jogar Xbox'];

    return atividades[diaSemana];
}

export default retornaAtividadeDia;