var readLineSync = require('readline-sync')

function sumTheRange() {
    var sum = 0
    var startingValue = readLineSync.question("Enter the starting value of range: ");
    startingValue = parseInt(startingValue);
    var endingValue = readLineSync.question("Enter the ending value of range: ");
    endingValue = parseInt(endingValue);
    if (endingValue > startingValue) {
        for (i = startingValue; i <= endingValue; i++) {
            sum += i;
        }
        console.log("The sum of Range entered is: " + sum);
    } else {
        console.log("OOppss!! Enter the ending value greater than Starting value");
    }
}
sumTheRange();