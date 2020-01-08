var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "grey";
    body.style.fontFamily = "Calibri";

var gridContainer = document.createElement("div");
    gridContainer.setAttribute("id", "grid-container");
    gridContainer.style.backgroundColor = "#F7D258";
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateAreas = " 'word inputWord .' 'letter inputLetter .' 'check check .' ";
    gridContainer.style.gridTemplateRows = "minmax(50px, auto)";
    gridContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
    gridContainer.style.width = "500px";
    gridContainer.style.height = "auto";
    gridContainer.style.margin = "0 auto";
    gridContainer.style.padding = "20px";

    body.appendChild(gridContainer);

var word = document.createElement("p");
    word.setAttribute("class", "word");
    word.textContent = "Word";
    word.style.gridArea = "word";

    gridContainer.appendChild(word);

var letter = document.createElement("p");
    letter.setAttribute("class", "letter");
    letter.textContent = "Check letter";
    letter.style.gridArea = "letter";

    gridContainer.appendChild(letter);

var inputWord = document.createElement("input");
    inputWord.setAttribute("class", "input-word");
    inputWord.setAttribute("type", "text");
    inputWord.style.gridArea = "inputWord";
    inputWord.style.height = "25px";
    inputWord.style.margin = "10px 0";

    gridContainer.appendChild(inputWord);

var inputLetter = document.createElement("input");
    inputLetter.setAttribute("class", "input-letter");
    inputLetter.setAttribute("type", "text");
    inputLetter.style.gridArea = "inputLetter";
    inputLetter.style.height = "25px";
    inputLetter.style.margin = "10px 0";

    gridContainer.appendChild(inputLetter);

var buttonCheck = document.createElement("button");
    buttonCheck.setAttribute("class", "check");
    buttonCheck.textContent = "CHECK";
    buttonCheck.style.gridArea = "check";
    buttonCheck.style.width = "100px";
    buttonCheck.style.height = "30px";
    buttonCheck.style.position = "relative";
    buttonCheck.style.left = "200px";
    buttonCheck.style.margin = "10px 0";

    gridContainer.appendChild(buttonCheck);

// var empty = document.createElement("aside");
//     empty.setAttribute("class", "empty");
//     empty.style.gridArea = "empty";

//     gridContainer.appendChild(empty);

var gridLetters = document.createElement("div");
    gridLetters.setAttribute("id", "grid-letters");
    gridLetters.style.backgroundColor = "#FFFFFF";
    gridLetters.style.display = "grid";
    gridLetters.style.gridTemplateAreas = " 'letter letter letter letter letter' ";
    gridLetters.style.gridTemplateAreas.gridTemplateRows = "minmax(50px, auto)";
    gridLetters.style.gridTemplateColumns = "repeat(5, 1fr)";
    gridLetters.style.width = "500px";
    gridLetters.style.height = "auto";
    gridLetters.style.margin = "0 auto";
    gridLetters.style.padding = "0 20px";

    body.appendChild(gridLetters);

for (var i = 1; i <= 5; i++) {
    var letterBox = document.createElement("p");
        letterBox.innerText = i;
        letterBox.style.width = "50px";
        letterBox.style.textAlign = "center";
        letterBox.style.border = "1px solid black";
        letterBox.style.fontSize = "45px";
        letterBox.style.margin = "20px auto";

        gridLetters.appendChild(letterBox);
}