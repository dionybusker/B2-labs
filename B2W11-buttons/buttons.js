// var img = document.createElement("img");

// img.src = "images/1.jpg";

// var button1 = document.getElementById("button1").innerHTML;
// var button2 = document.getElementById("button2").innerHTML;
// var button3 = document.getElementById("button3").innerHTML;

function changeImage(number) {
    if (number == 1) {
        document.getElementById("image").src = "images/bg1.jpg";
        document.getElementById("small-image").src = "images/1.jpg";
        document.getElementById("num1").innerHTML =+ 1;
    } else if (number == 2) {
        document.getElementById("image").src = "images/bg2.jpg";
        document.getElementById("small-image").src = "images/2.jpg";
        document.getElementById("num2").innerHTML =+ 1;
    } else if (number == 3) {
        document.getElementById("image").src = "images/bg3.jpg";
        document.getElementById("small-image").src = "images/3.jpg";
        document.getElementById("num3").innerHTML =+ 1;
    }
}