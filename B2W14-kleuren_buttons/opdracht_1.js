var container = document.getElementById("container");
container.style.backgroundColor = "grey";
container.style.width = "1150px";
container.style.margin = "0 auto";


for (i = 1; i <= 30; i++) {
    var button = document.createElement("button");
    container.appendChild(button);
    button.innerText = i;
    button.style.border = "none";
    button.style.width = "200px";
    button.style.height = "100px";
    button.style.margin = "15px";
    button.style.fontSize = "75px";
    button.style.backgroundColor = "green";

    button.id = "changeColor";

    button.onclick = function() {
        this.style.backgroundColor = "red";
    }

    // button.setAttribute("id", `${i}`);

    // button.setAttribute("onclick", "changeColor(false)");

    // (function changeColor(clicked) {
    //     if (clicked == true) {
    //         button.style.backgroundColor = "red";
    //     }
    // }).call(this, i)
}

// function changeColor(clicked) {
//     if (clicked == true) {
//         button.style.backgroundColor = "red";
//     }
// }