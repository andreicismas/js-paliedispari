// chiediamo all utente da inserire una parola
var parolaInserita = prompt("inserisci una parola")



// validiamo che il utente non srive numeri
var parolaInNumero = parseInt(parolaInserita);

// condizioni prompt
if (Number.isNaN(parolaInNumero)) {
  console.log(parolaInserita)

} else {
  alert("i numeri non sono validi")
}

// variabile /function
var loGirata = controloParolePalindroma(parolaInserita);

// condizioni function
if (parolaInserita == loGirata) {
  console.log("la parola"+" "+ parolaInserita.toLowerCase()+" "+"  e palidroma");
}
else {
  console.log("la parola"+" "+ parolaInserita.toLowerCase()+" "+"  NON e palidroma");
}

// function parola girata
function controloParolePalindroma(controlo) {
  var controloParola = "";
  for (var i = controlo.length - 1; i >= 0; i--) {
    controloParola += controlo[i];
  }
  return controloParola;
}

// sono impazito e lo vogliio scrivere "var i = controlo.length"=OK ...LO AVEVO SCRITTO  "var i = controlo.lengHT" CI HO MESSO 3 ORE A CAPIRE XCHE NON ANDAVA BENE IL RISULTATO IN CONSOLE