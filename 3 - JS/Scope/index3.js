function setPlayerDetails() {
    let goals = 35;
    if (goals == 35) {
        goals = 40;
        var playerName = 'Ronaldo'
        let playerPosition = 'Striker'
    }

    console.log(goals)
    console.log(playerName)
    console.log(playerPosition) //error because let and {}
}

setPlayerDetails()