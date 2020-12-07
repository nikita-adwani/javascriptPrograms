var readLineSync = require('readline-sync');

function spinalCase() {
    let sentence = readLineSync.question("Enter the sentence:");
    let newString = ' ';
    var arr = sentence.split('');
    for (var i = 0; i < arr.length; i++) {
        if (i >= 0) {
            if (arr[i] >= 'A' && arr[i] <= 'Z') {
                if (arr[i - 1] >= 'a' && arr[i - 1] <= 'z') {
                    newString += '-';
                    newString += arr[i].toLowerCase();
                    continue;
                }
            } else if (arr[i] === ' ' || arr[i] === '_') {
                newString += '-';
                continue;
            }
        }
        newString += arr[i].toLowerCase();
    }
    console.log(newString);
}
spinalCase();