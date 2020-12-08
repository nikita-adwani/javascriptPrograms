var readLineSync = require('readline-sync');
var sum = 0;
(function sumOfPrimeNumber() {
    let startingNumber = readLineSync.question("Enter the starting number: ");
    startingNumber = parseInt(startingNumber);
    let endingNumber = readLineSync.question("Enter the last number: ");
    endingNumber = parseInt(endingNumber);
    for (let i = startingNumber; i < endingNumber; i++) {
        let flag = 0;
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        if (i > 1 && flag == 0) {
            sum = sum + i;
        }
    }
    console.log("Sum of prime number is:")
    console.log(sum);
    if (startingNumber > endingNumber) {

        console.log("Opps!! Enter startimg number smaller then ending number");
    }

})
();