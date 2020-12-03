//Factorise a given Number
var readlineSync = require('readline-sync');

function factorise() {
    var number = readlineSync.question("Enter the Number to be factorise: ");
    number = parseInt(number);
    console.log("The number entered is " + number);
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log("The resulted Factorise of the number is: " + factorial);
}
factorise();