var readLineSync = require("readline-sync");
(function convertHtmlEntities() {
    let sentence = readLineSync.question("Enter the sentence:");
    let temp = sentence.split("");
    for (let i = 0; i < temp.length; i++) {
        switch (temp[i]) {
            case "<":
                temp[i] = "&lt;";
                break;
            case "&":
                temp[i] = "&amp;";
                break;
            case ">":
                temp[i] = "&gt;";
                break;
            case '"':
                temp[i] = "&quot;";
                break;
            case "'":
                temp[i] = "&apos;";
        }
    }
    temp = temp.join('');
    console.log("The entered sentence is changed to");
    console.log(temp);
})
();