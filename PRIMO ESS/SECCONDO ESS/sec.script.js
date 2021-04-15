//variabile utente decide pari o dispari 
var pariDispari = prompt("segli tra pari o dispari")
var numeriValidi = parseInt(pariDispari);

// condizioni prompt utente
if (pariDispari !== "pari" && pariDispari !== "dispari") {
    alert("devi inserire....:'pari' o 'dispari'");
} else {
    console.log("il umano ha scritto " + " " + pariDispari)

    // variabile i numeri inseriti dal utente
    var numeriDaInserire = parseInt(prompt("inserisci numeri da 1-5"));


    // condizioni per validare i numeri 
    if (numeriDaInserire > 5 || numeriDaInserire < 1) {
        alert("solo numeri da 1-5!")
    } else {
        console.log(numeriDaInserire)
    }
    // function math per numeri random
    function getRandomInt(numMax) {
        return Math.floor(Math.random(5) * numMax) + 1;
    }

    // risultato  addizione umano e random 
    var risultato = numeriDaInserire + getRandomInt(5)
    console.log(risultato)


    //  condizione chi vince
    if (risultato % 2) {
        console.log("il pari vince")

    } else {
        console.log("dispari vince")
    }
}

