var readLineSync = require('readline-sync');

function stringMutation() {
    let string1 = readLineSync.question("Enter the first string: ");
    let string2 = readLineSync.question("Enter the second string: ");
    let array1 = string1.toLowerCase().split("");
    let array2 = string2.toLowerCase().split("");
    let count = 0;
    for (i = 0; i <= array2.length; i++) {
        if (array1.indexOf(array2[i]) > -1) {
            count++;
        }
    }
    if (count == array2.length) {
        console.log("Every element of string 2 are present in string 1");
    } else {
        console.log("some elements of string 2 is not present in string 1");
    }
}
stringMutation();