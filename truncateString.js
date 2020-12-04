var readlineSync = require('readline-sync');

function truncateString() {
    var string = readlineSync.question("Enter the string \n");
    console.log(string);
    var number = readlineSync.question("Enter the number till where you want the string to be displayed: ");
    number = parseInt(number);
    if (string.length > number) {
        var str = string.slice(0, number) + "...";
        console.log(str);
    } else {
        console.log(`Oops!! you entered the number greater than string length!!
        ${string}`);
    }
}
truncateString();