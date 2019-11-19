var arrayEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayTwee = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// arrayEen + " + " + arrayTwee + " = " + arrayEen

function optellen(arrayEen, arrayTwee) {

    // var sum = document.getElementById("optellen").innerHTML = `${arrayEen[0]} + ${arrayTwee[0]} = `;

    for (var i = 0; i < arrayEen.length; i++) {
        sum = `${arrayEen[i]} + ${arrayTwee[i]} = `;
    }


    for (var i = 0; i < arrayEen.length; i++) {
        arrayEen[i] += arrayTwee[i];
    }

    document.getElementById("optellen").innerHTML = sum + arrayEen;
}

optellen(arrayEen, arrayTwee);