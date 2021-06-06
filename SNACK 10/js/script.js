//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.

var output = document.getElementById("numero");


var result = 0;

// for (var i = 1; i <= 5; i++) {
//     var userNumber = parseInt(prompt("inserire un numero"))
//     result += userNumber;
// }
// output.innerHTML += result + "<br/>";

// var total = 0;
// var x = 1;
// while (x <= 5) {
//     x++;
//     var userNumber = parseInt(prompt("inserire un numero"))
//     total += userNumber;
// }

// output.innerHTML += total;

for (var y = 1; y <= 5; y++) {
    var userNumber = parseInt(prompt("inserire un numero"))
    while (isNaN(userNumber)) {
        alert("Devi inserire un numero")
        var userNumber = parseInt(prompt("inserire un numero"))
    }
    result += userNumber;
}

output.innerHTML += result + "<br/>";