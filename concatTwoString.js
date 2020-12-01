var readlineSync = require('readline-sync');
var concatString = (string1, string2) => {
    var minNumber = Math.min(string1.length, string2.length)
    var resultedString = string1.substring(string1.length - minNumber) + string2.substring(string2.length - minNumber);
    console.log("Two Strings are :" + string1 + " and " + string2 + " and the result after concat is: " + resultedString);
}
var str1 = readlineSync.question('Enter the First String:');
console.log("The First String is: " + str1);
var str2 = readlineSync.question('Enter the Second String:');
console.log("The Second String is: " + str2);
concatString(str1, str2);