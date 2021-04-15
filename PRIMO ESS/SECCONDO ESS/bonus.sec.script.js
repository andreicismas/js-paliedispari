// chiedere al utente pari o dispari 
var pariDispari = prompt("segli tra pari o dispari")
var numeriValidi = parseInt(pariDispari);
// validazione parole pari o dispari
if (pariDispari !== "pari" && pariDispari !== "dispari") {
    alert("devi inserire....:'pari' o 'dispari'");
} else {
    console.log("il umano ha scritto " + " " + pariDispari)
// variabile i numeri inseriti dal utente
var numeriDaInserire = parseInt(prompt("inserisci numeri da 1-5"));
console.log(numeriDaInserire + " " + "nr utente")

// variabile i numeri random pc
var randomPc = Math.floor(Math.random() * 5 + 1)
console.log(randomPc + " " + "nr random pc")

// totale somma utente pc
var totale = numeriDaInserire + randomPc
// invocazione function
if(dispariPari(totale) === true){
    console.log("hai vinto")

}else{
    console.log("hai perso ")
}

}

// function pari o Dispari
function dispariPari(totale) {
    if (pariDispari == 'pari' && totale % 2 == 0) {
        return true;
    } else if (pariDispari == 'dispari' && totale % 2 != 0) {
        return true
    } else {
        return false
    }
}