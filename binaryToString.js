var readLineSync = require('readline-sync');
var convertString = [];
(function binaryToString() {
    var binaryNumber = readLineSync.question("Enter the binary number in 0 and 1 form: ");
    binaryNumber = binaryNumber.split(" ");
    for (let i = 0; i < binaryNumber.length; i++) {
        convertString.push(String.fromCharCode(parseInt(binaryNumber[i], 2)));
    }

    console.log("The conversion of binary to string looks like: ")
    console.log(convertString.join(""));
})
();