var readLineSync = require('readline-sync');
(function caesarsCipherShiftBy13() {
    let cipher = "";
    const alphabets = [...
        "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ];
    let string = readLineSync.question("Enter the string:");
    string = string.toUpperCase();
    for (let i = 0; i < string.length; i++) {
        if (/\w/.test(string[i])) {
            cipher += alphabets[alphabets.indexOf(string[i]) + 13];
        } else {
            cipher += string[i];
        }
    }
    console.log(`The caesars cipher of ${string} looks like: `);
    console.log(cipher);
})
()