class Team {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let inter = new Team ("Internacional", 119);

//console.log(inter);

class TeamsLA {
    constructor(name, nationality = "Brasileiro"){
        this.name = name;
        this.nationality = nationality;
    }
}

let bocaJuniors = new TeamsLA ("Boca Juniors", "Argentino");
let palmeiras = new TeamsLA ("Palmeiras");

console.log(bocaJuniors);
console.log(palmeiras);
