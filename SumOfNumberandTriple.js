var readlineSync = require('readline-sync');

// Wait for user's response.
var num1 = readlineSync.question('Enter the First Number:');
num1 = parseInt(num1);
console.log('First Number is ' + (num1));
var num2 = readlineSync.question('Enter the Second Number: ');
num2 = parseInt(num2);
console.log('Second Number is ' + num2);
if (num1 == num2) {
    console.log((num1 + num2) * 3);
} else {
    console.log(parseInt(num1 + num2));
}