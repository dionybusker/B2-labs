var days = [
    "maandag",
    "dinsdag",
    "woensdag",
    "donderdag",
    "vrijdag",
    "zaterdag",
    "zondag"
];

document.getElementById("dagen").innerHTML = days;

// The slice() method returns the selected elements in an array, as a new array object. (w3schools)
// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument. (w3schools)
// Note: The original array will not be changed. (w3schools)
document.getElementById("werkdagen").innerHTML = days.slice(0, 5);
document.getElementById("weekend").innerHTML = days.slice(5, 7);

// The reverse() method reverses the order of the elements in an array. (w3schools)
// Note: this method will change the original array. (w3schools)
document.getElementById("dagen-omgekeerd").innerHTML = days.reverse();
document.getElementById("werkdagen-omgekeerd").innerHTML = days.slice(2, 7);
document.getElementById("weekend-omgekeerd").innerHTML = days.slice(0, 2);