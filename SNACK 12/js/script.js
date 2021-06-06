//Generatore di “nomi cognomi” casuali: 
//prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var output = document.getElementById("numero");

var arreyNomi = ["Luca", "Paolo", "Chiara", "Silvia", "Valerio", "Nicola", "Andrea"];

var arreyCognomi = ["Rossi", "Bianchi", "Fabbri", "Verdi", "Scudo"];

var arreyLista = [];

while (arreyLista.length < 3) {
    randomName = arreyNomi[Math.floor(Math.random() * arreyNomi.length)];
    randomSurname = arreyCognomi[Math.floor(Math.random() * arreyCognomi.length)];
    invitato = randomName + " " + randomSurname;
    if (!arreyLista.includes(invitato)) {
        output.innerHTML += "<li>" + invitato + "</li>";
        arreyLista.push(invitato);
    }
}