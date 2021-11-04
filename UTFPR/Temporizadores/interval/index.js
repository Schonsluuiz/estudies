var counter = 0;

function toggle(c){
    var imgName = document.querySelector("body>img").src;
    if (imgName.indexOf("acessa") > 0){
        document.querySelector("body>img").src = "img/lampadaApagada.jpg";
    } else {
        document.querySelector("body>img").src = "img/lampadaAcessa.jpg";
    }

    counter++;
    console.log(counter);
    if(counter >= 10){
        clearInterval(chave);
        document.querySelector("body>img").src = "img/lampadaQuebrada.jpg";
    }
}

chave = setInterval (toggle, 2000);