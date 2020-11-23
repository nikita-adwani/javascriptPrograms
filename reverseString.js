var readlineSync = require('readline-sync');

// Wait for user's response.

function string_reverse() {
    var str = readlineSync.question('Enter the String:');
    console.log("The Entered String is: " + str);
    var reverseString = str.split("").reverse().join("");
    console.log("The reverse String is :" + reverseString);
}
string_reverse();