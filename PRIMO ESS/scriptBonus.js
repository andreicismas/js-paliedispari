// chiedi al utente una parola
var indexUtente = prompt("inserisci una parola")

// variabili esterne array
var parolaNormale = [];
var parolaGirata = [];

// output function invocazione
if (palidromaFunction(indexUtente) == true) {
    console.log(indexUtente + " " + "e palidroma")
} else {
    console.log(indexUtente + " " + "non e  e palidroma")
}

// creazione function palidroma
function palidromaFunction(indexUtente) {
// push parola girata
    for (var i = indexUtente.length - 1; i = 0; i--) {
        parolaGirata.push = indexUtente[i];

    }
// push parola normale 
    for (var i = 0; i < indexUtente.length; i++) {
        parolaNormale.push = indexUtente[i];

    }
// controlo le parole
    for (var i = 0; i < parolaNormale.length; i++) {

        if (parolaNormale[i] == parolaGirata[i]) {
            return true
        } else {
            return false
        }
    }

}


