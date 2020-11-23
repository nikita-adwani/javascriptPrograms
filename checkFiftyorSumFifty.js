var readlineSync = require('readline-sync');

// Wait for user's response.
var num1 = readlineSync.question('Enter the First Number:');
num1 = parseInt(num1);
console.log('First Number is ' + (num1));
var num2 = readlineSync.question('Enter the Second Number:');
num2 = parseInt(num2);
console.log('Second Number is ' + (num2));
var sum = num1 + num2;
console.log("The sum of two number is: " + sum);
if ((num1 == 50 || num2 == 50) || sum == 50) {
    console.log("Conditions Matches")
} else {
    console.log("Condition Doesnot Matches")
}