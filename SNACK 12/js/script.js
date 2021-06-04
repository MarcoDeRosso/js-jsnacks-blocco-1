//Generatore di “nomi cognomi” casuali: 
//prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var output = document.getElementById("numero");

var arreyNomi = ["Luca", "Paolo", "Chiara", "Silvia", "Valerio", "Nicola", "Andrea"];

var arreyCognomi = ["Rossi", "Bianchi", "Fabbri", "Verdi", "Scudo"]

var result = " ";

for (var i = 1; i <= 3; i++) {
    result += "<li>" + arreyNomi[Math.floor(Math.random() * arreyNomi.length)] + " " + arreyCognomi[Math.floor(Math.random() * arreyCognomi.length)] + "</li>";
}

output.innerHTML = result + "<br/>";