//value neares to 100
var readlineSync = require('readline-sync');

// Wait for user's response.
var num1 = readlineSync.question('Enter the First Number: ');
num1 = parseInt(num1);
console.log('First Number is ' + (num1));
var num2 = readlineSync.question('Enter the Second Number: ');
num2 = parseInt(num2);
console.log('Second Number is ' + (num2));
if (num1 != num2) {
    var num3 = Math.abs(100 - num1);
    var num4 = Math.abs(100 - num2);
    if (num3 < num4) {
        console.log(num1 + " is nearest to 100!");
    } else if (num4 < num3) {
        console.log(num2 + " is nearest to 100!")
    } else {
        console.log("Both the number have same difference!!!")
    }
} else {
    console.log("Both the number are same !!!");
}