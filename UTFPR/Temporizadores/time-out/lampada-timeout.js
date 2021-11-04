document.querySelector("body>img").onclick = function () {
    this.src = "img/lampadaAcessa.jpg";
    setTimeout(desliga, 5000);
}

function desliga (){
    document.querySelector("body>img").src = "img/lampadaApagada.jpg";
}