var readlineSync = require('readline-sync');

function confirmTheEnd() {
    var string = readlineSync.question("Enter the String!!");
    console.log(`The Entered string is: ${string}`);
    var targetString = readlineSync.question("Enter the target string!!");
    console.log(`The target string entered is: ${targetString}`);
    var sliceStr = string.slice(string.length - targetString.length);
    if (sliceStr === targetString) {
        console.log("Ending of the string matches!!");
    } else {
        console.log("Ending of the string doesn't matches!!");
    }

}
confirmTheEnd();