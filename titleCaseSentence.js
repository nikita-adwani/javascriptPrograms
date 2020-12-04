//titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.

var readlineSync = require('readline-sync');

function titleCase() {
    var sentence = readlineSync.question("Enter the sentence: ");
    console.log("Sentence is:- " + sentence);
    sentence = sentence.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
}
titleCase();