//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.

var List = [];


var output = document.getElementById("numero");

for (var i = 1; i <= 6; i++) {
    var numeroList = parseInt(prompt("Inserire NUMERO"));

    if (numeroList % 2 !== 0)
        List.push(numeroList)
}

console.log(list);