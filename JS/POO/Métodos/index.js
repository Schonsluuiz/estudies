class Cars {
    constructor(name){
        this.name = name;
        this.velocity = 0;
    }

    speedUp(acceleration){
        this.velocity += acceleration;
    }
}

let golf = new Cars("Golf");

console.log(golf);

golf.speedUp(10);
golf.speedUp(50);

console.log(golf)