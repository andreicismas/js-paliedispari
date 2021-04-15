var pariDispari = prompt("segli tra pari o dispari")
var numeriValidi=parseInt(pariDispari);

if (pariDispari !== "pari" && pariDispari !== "dispari"){
    alert("devi inserire....:'pari' o 'dispari'");
}else{
    console.log(pariDispari)
}

var numeriDaInserire =prompt("inserisci numeri da 1-5");

if(numeriDaInserire > 5 || numeriDaInserire < 1){
    alert("inserisci numeri!")
}else {
    console.log(numeriDaInserire)
}

function mateFunction()

