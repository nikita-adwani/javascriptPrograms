var readlineSync = require('readline-sync');

function lastDigit() {
    var num1 = readlineSync.question('Enter the First Number: ');
    num1 = parseInt(num1);
    console.log('First Number is ' + (num1));

    var num2 = readlineSync.question('Enter the Second Number: ');
    num2 = parseInt(num2);
    console.log('Second Number is ' + (num2));

    var num3 = readlineSync.question('Enter the Third Number: ');
    num3 = parseInt(num3);
    console.log('Third Number is ' + (num3));
    console.log("The Numbers are: " + num1 + " , " + num2 + " , " + num3 + " , ")
    if ((num1 > 0 && num2 > 0) && num3 > 0) {
        if ((num1 % 10 == num2 % 10) && (num2 % 10 == num3 % 10) && (num3 % 10 == num1 % 10)) {
            console.log("the Last Digit Of Numbers are Same!!")
        } else {
            console.log("Last Digit of Number Are not Same!!");
        }
    }
}
lastDigit();