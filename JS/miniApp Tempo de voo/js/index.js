let departureDateEntry = prompt('Digite a data de partida (formata DD/MM/YYYY)')

let departureDate = moment(departureDateEntry, 'DD/MM/YYYY')

let today = moment()

let dateDiff = today - departureDate

let choseOption = prompt('Escolha como gostaria de exibir o tempo de partida\n1 - Segundos\n 2- Minutos\n3 - Horas\n 4 - Dias')

if (choseOption == '1') {
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert('Tempo de vôo: ' + secondsOfDeparture + ' segundos')
} else if (choseOption == '2') {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert('Tempo de vôo: ' + minutesOfDeparture + ' minutos')
} else if (choseOption == '3') {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 60 / 60)
    alert('Tempo de voo: ' + hoursOfDeparture + ' horas')
} else if (choseOption == '4') {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 60 / 60 / 24)
    alert('Tempo de voo: ' + daysOfDeparture + ' dias')
} else {
    alert('Opção inválida')
}