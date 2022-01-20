class Gun {
    constructor(name){
        this.name = name;
        this.shotsLeft = 5;
    }

    shoot(){
        if(this.shotsLeft > 0){
            console.log("Bang!")
            this.shotsLeft -= 1;
        } else{
            throw new Error(this.name + " esta sem municao")
        }
        
    }

    reload(){
        this.shotsLeft = 5;
    }
}

let glock = new Gun("Glock")

try{
    glock.shoot();
    glock.shoot();
    glock.shoot();
    glock.shoot();
    glock.shoot();
    glock.shoot(); 
}catch(e) {
    console.log (e.message);
    glock.reload();
} finally{
    console.log("Bons tiros!");
}

console.log(glock);