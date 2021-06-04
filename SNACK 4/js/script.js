//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var nameList = ["Franco", "Beppe", "Stefania", "Sara"];

var nameLogIn = prompt("Inserire la proprio Nome");

var check = false;

var output = document.getElementById("numero");

for (var i = 0; i < nameList.length; i++) {
    if (nameList[i] === nameLogIn)
        check = true;
}

if (check) {
    output.innerHTML += "Nome presente in lista, Benvenuto/a: " + nameLogIn;
} else {
    alert("Nome non presente nel nostro Database");
}