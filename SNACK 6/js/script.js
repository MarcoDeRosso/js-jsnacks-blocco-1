//Stampa il cubo dei primi N numeri,
//dove N è un numero indicato dall’utente attraverso un prompt.

var numeroList = parseInt(prompt("Inserire NUMERO"));
var output = document.getElementById("numero");
for (var i = 0; i <= numeroList; i++) {
    output.innerHTML += Math.pow(i, 3) + "</br>";
}

console.log(list);