var readLineSync = require('readline-sync');
(function checkStringPalindrome() {
    let string = readLineSync.question("Enter the string:");
    let newstring = string.split(" ").join('');
    newstring = newstring.toLowerCase();
    const stringLength = newstring.length;
    for (let i = 0; i < stringLength / 2; i++) {
        if (newstring[i] !== newstring[stringLength - 1 - i]) {
            console.log(`Entered ${string} is not a palindrome.`);
            return
        }
    }
    console.log(`Entered ${string} is a palindrome.`)
})
();