//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

var firstWord = prompt("Inserire una parola");
var secondWord = prompt("Inserire un'altra parola");

var firstResult = firstWord.length;
var secondResult = secondWord.length;

if (firstResult > secondWord) {
    document.getElementById("numero").innerHTML = firstWord;
} else if (firstResult < secondResult) {
    document.getElementById("numero").innerHTML = secondWord;
}