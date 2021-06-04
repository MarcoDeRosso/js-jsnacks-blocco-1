//il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
var result = 0;
for (var i = 0; i < 10; i++) {
    var number = parseInt(prompt("Inserire un numero"));
    result += number;
}
document.getElementById("numero").innerHTML = result;