var readlineSync = require('readline-sync');
var str = readlineSync.question("Enter the String to missing letter: ")

function missingLetter() {
    var i, j = 0,
        m = 122;
    if (str) {
        i = str.charCodeAt(0);
        while (i <= m && j < str.length) {
            if (String.fromCharCode(i) !== str.charAt(j)) {
                console.log("The Missing letter is: " + String.fromCharCode(i));
                return;
            }
            i++;
            j++;
        }
    }
    console.log("undefined");
}

missingLetter();