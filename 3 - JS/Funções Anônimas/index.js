console.log(doubleSpeed(50)) //errro

console.log(speedUp(60, 10))

let doubleSpeed = function (velocity) {
    return velocity * 2;
}

function speedUp(velocity, acceleration) {
    return velocity + acceleration;
}