//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo

var output = document.getElementById("numero");

var userNumber = parseInt(prompt("inserisci un numero"));

if (0 === userNumber % 2) {
    output.innerHTML = userNumber;
} else {
    output.innerHTML = userNumber + 1;

}