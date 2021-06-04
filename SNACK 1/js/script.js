//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.
var firstNumber = prompt("Inserire un numero");
var secondNumber = prompt("Inserire un altro numero");

var numberResult = parseInt(firstNumber);
var secondNumberResult = parseInt(secondNumber);

if (numberResult > secondNumberResult) {
    document.getElementById("numero").innerHTML = numberResult;
} else if (numberResult < secondNumberResult) {
    document.getElementById("numero").innerHTML = secondNumberResult;
} else {
    document.getElementById("numero").innerHTML = "PARI";
}