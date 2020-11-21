//Start the string with capital letter..
var readlineSync = require('readline-sync');

// Wait for user's response.
var string = readlineSync.question('Enter the City:');
console.log('City is: ' + string);
if (string.length >= 3) {
    var city = string.substring(0, 3);
    if ((city == "New") || (city == "new")) {
        console.log("The " + string + " starts with new.");
    } else if ((city == "Los") || (city == "los")) {
        console.log("The " + string + " starts with los.");
    } else {
        console.log("The " + string + " neither starts with new nor los.");
    }
} else {
    console.log("The length of String is less than 3.");
}