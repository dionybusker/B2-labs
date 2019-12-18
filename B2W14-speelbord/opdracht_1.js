var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "grey";
    body.style.fontFamily = "Calibri";

var gridContainer = document.createElement("div");
    gridContainer.setAttribute("id", "grid-container");
    gridContainer.style.backgroundColor = "#F7D258";
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateAreas = " 'word inputWord empty' 'letter inputLetter empty' 'check check empty' ";
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
    buttonCheck.textContent += "CHECK";
    buttonCheck.style.gridArea = "check";
    buttonCheck.style.width = "100px";
    buttonCheck.style.height = "30px";
    buttonCheck.style.position = "relative";
    buttonCheck.style.left = "200px";
    buttonCheck.style.margin = "10px 0";

    gridContainer.appendChild(buttonCheck);

var empty = document.createElement("aside");
    empty.setAttribute("class", "empty");
    empty.style.gridArea = "empty";
    gridContainer.appendChild(empty);
