var container = document.getElementById("container");
container.style.backgroundColor = "grey";
container.style.width = "1200px";
container.style.margin = "0 auto";



for (i = 1; i <= 30; i++) {
    var button = document.createElement("button");
    container.appendChild(button);
    button.innerText = i;
}