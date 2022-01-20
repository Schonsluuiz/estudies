class Player {
    constructor (name, age, position){
        this.name = name
        this.age = age
        this.position = position
    }
}
   
class Team {
    constructor(name, country, playerName, playerAge, playerPosition){
        this.name = name
        this.country = country
        this.player = new Player(playerName, playerAge, playerPosition)
    }
}

let team = new Team("Internacional", "Brasil", "D'Alessandro", 40,"Midfield")

console.log(team)