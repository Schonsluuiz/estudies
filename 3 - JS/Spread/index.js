function speedUp(velocity, acceleration) {
    return velocity + acceleration
}

let operationVelocity = [15, 5]

let newVelocity = speedUp(...operationVelocity)

console.log(newVelocity);