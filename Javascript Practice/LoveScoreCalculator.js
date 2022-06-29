// Random love-score bmiCalculator

// Determine random number
var n = Math.random();
var n = n * 99;

// Format name inputs to Capitalized
function capitalize(word) {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}

name1 = prompt("Enter a name.");
name2 = prompt("Enter a name.");

name1 = capitalize(name1);
name2 = capitalize(name2);

loveScore = Math.floor(n) + 1; // gen random number between 1-100


// Return love-score Prediction

// lovescore 75-100
if (loveScore > 75){
    alert("Compatibility of " + name1 + " and " + name2 + " is "+ loveScore + "%! True Love"); // alert love score.
}
// lovescore 50-75
if (loveScore < 76 && loveScore > 50) {
    alert("Compatibility of " + name1 + " and " + name2 + " is "+ loveScore + "%! Meant to be!"); // alert love score.
}
// lovescore 25-50
if (loveScore < 51 && loveScore > 25) {
    alert("Compatibility of " + name1 + " and " + name2 + " is "+ loveScore + "%! Budding romance."); // alert love score.
}
// lovescore 0-15
if (loveScore < 26 && loveScore > 0) {
    alert("Compatibility of " + name1 + " and " + name2 + " is "+ loveScore + "%! Bad Romance!"); // alert love score.
}
