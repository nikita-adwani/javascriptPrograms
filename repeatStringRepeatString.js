var readlineSync = require('readline-sync');
var accumulatedStr = "";

function repeatedString() {
    var string = readlineSync.question("Enter the String!! \n");
    console.log(`The Entered string is: ${string}`);
    var number = readlineSync.question("Enter the number to be repeat off: ");
    number = parseInt(number);
    console.log(`The number entered is: ${number}`);
    while (number > 0) {
        accumulatedStr += string;
        number--;
    }
    console.log(accumulatedStr);
}
repeatedString();