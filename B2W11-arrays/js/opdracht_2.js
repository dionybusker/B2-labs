var names = [];

var newName = prompt("Hoeveel namen wilt u in de array stoppen? (Minimaal 3)");


// names.push()


while (names == newName) {
    names.push(newName);
    document.getElementById("namen").innerHTML = names;
}