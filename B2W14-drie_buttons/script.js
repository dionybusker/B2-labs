var bg = document.getElementsByClassName("bgc");
bg[0].style.backgroundColor = "grey"; // document.getElementsByClassname geeft een array terug

var container = document.getElementById("container");
container.style.backgroundColor = "white";
container.style.width = "700px";
container.style.margin = "0 auto";

var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");

container.appendChild(button1);
container.appendChild(button2);
container.appendChild(button3);

button1.setAttribute("onclick", "changeColor('green')");
button2.setAttribute("onclick", "changeColor('red')");
button3.setAttribute("onclick", "changeColor('blue')");

// tekst in de buttons
button1.innerText = "Button 1"; // groen
button2.innerText = "Button 2"; // rood
button3.innerText = "Button 3"; // blauw

// tekst grootte in de buttons
button1.style.fontSize = "20px";
button2.style.fontSize = "20px";
button3.style.fontSize = "20px";

// achtergrondkleur van de buttons
button1.style.backgroundColor = "green";
button2.style.backgroundColor = "red";
button3.style.backgroundColor = "blue";

// tekst kleur in de buttons
button1.style.color = "white";
button2.style.color = "white";
button3.style.color = "white";

// geen border om de buttons
button1.style.border = "none";
button2.style.border = "none";
button3.style.border = "none";

// width en height van de buttons, voor het gemak eenmalig een variabele voor width en height aangemaakt
var width = "200px";
var height = "75px";
button1.style.width = width;
button1.style.height = height;
button2.style.width = width;
button2.style.height = height;
button3.style.width = width;
button3.style.height = height;

// margin van de buttons
button1.style.margin = "30px 2px 30px 30px";
button2.style.margin = "30px 2px 30px 2px";
button3.style.margin = "30px 30px 30px 2px";

// hier verandert de kleur van de buttons
function changeColor(color) {
    if (color == "green") {
        bg[0].style.backgroundColor = color;
    } else if (color == "red") {
        bg[0].style.backgroundColor = color;
    } else if (color == "blue") {
        bg[0].style.backgroundColor = color;
    }
}