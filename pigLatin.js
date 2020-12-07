var readLineSync = require('readline-sync')

function piglatin() {
    var word = readLineSync.question("Enter the word: ");
    word = word.toLowerCase();
    if ('aeiou'.includes(word[0])) {
        let newWord = word + 'way';
        console.log("The " + word + " begins with the word so the new word is: " + newWord);
    } else {
        let newWord = Array.from(word);
        for (var i = 0; i < newWord.length; i++) {
            if ('aeiou'.includes(newWord[i])) {
                newWord = newWord.join('');
                console.log(`${word} doesn't begin with vowel so the new word is:${newWord}ay.`)
                return;
            } else {
                newWord.push(newWord.shift([i]));
                i--;
            }

        }
    }
}
piglatin();