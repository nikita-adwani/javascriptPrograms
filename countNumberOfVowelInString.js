var readlineSync = require('readline-sync');

function countTheNumberOfVowel() {
    var str = readlineSync.question('Enter the String:');
    console.log("The Entered String is: " + str);
    str = str.toUpperCase();
    var newString = Array.from(str);
    const countVowel = newString.filter(ele => 'AEIOU'.includes(ele)).length;
    console.log("Number of Vowel in " + str + " is " + countVowel);

}
countTheNumberOfVowel();