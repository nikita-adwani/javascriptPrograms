var readlineSync = require('readline-sync');
var longestWord = 0;

function longestString() {
    var string = readlineSync.question("Enter the String!!");
    console.log(string);
    var splitStr = string.split(' ');
    for (i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > longestWord) {
            longestWord = splitStr[i].length;
        }
    }
    console.log(`Count of longest number of word in a string is:${longestWord}`);

}
longestString();