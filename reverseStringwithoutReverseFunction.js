var readlineSync = require('readline-sync');
var reverseStr = "";

function reverseString() {
    var str = readlineSync.question('Enter the String:');
    console.log("The Entered String is: " + str);
    for (i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    console.log("The reverse String is :" + reverseStr);
}
reverseString();