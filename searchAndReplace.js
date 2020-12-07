var readLineSync = require('readline-sync')

function searchAndReplce() {
    var sentence = readLineSync.question("Enter the sentence: ");
    var replacedword = readLineSync.question("Enter the word to replaced to: ");
    var replaceWord = readLineSync.question("Enter the new word for replacement: ");
    var newSentence = sentence.replace(replacedword, replaceWord);
    console.log(newSentence);
}
searchAndReplce();