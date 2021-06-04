//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.
//(bonus: controllate che il numero sia realmente di 4 cifre altrimenti restituite un alert)
var output = document.getElementById("numero");

var userNumber = prompt("Inserire un numero di 4 cifre")

var inputLen = userNumber.length; //quantità di caratteri
var result = 0;

// if (inputLen !== 4) {
//     alert("Ehi! Devi inserire un numero di 4 cifre")
// } else if (isNaN(userNumber)) { //dentro la stringa verifica se c'è un numero o meno
//     alert("Ehi! L'input deve essere obbligatoriamente un numero")
// } else {


//     for (var i = 0; i < inputLen; i++) { // i naviga dentro alla stringa che è vista come un array e si somma fino a che non raggiunge 4 cifre
//         result += parseInt(userNumber[i]);
//     }
// }

while ((inputLen !== 4) || (isNaN(userNumber))) {
    alert("Ehi! Devi inserire un numero di 4 cifre")
    var userNumber = prompt("Inserire un numero di 4 cifre")

}
for (var i = 0; i < inputLen; i++) { // i naviga dentro alla stringa che è vista come un array e si somma fino a che non raggiunge 4 cifre
    result += parseInt(userNumber[i]);
}



output.innerHTML = result;