var readLineSync = require('readline-sync');
var mainArray = [];

function reduceArray() {
    let mainArrayLimit = readLineSync.question("Enter the main-array limit: ");
    mainArrayLimit = parseInt(mainArrayLimit);
    for (i = 0; i < mainArrayLimit; i++) {
        let subArrayLimit = readLineSync.question("Enter the sub-array limit: ");
        subArrayLimit = parseInt(subArrayLimit);
        var array = [];
        for (j = 0; j < subArrayLimit; j++) {
            let subArrayElements = readLineSync.question("Enter the elements of sub-array: ");
            array[j] = subArrayElements;
        }
        mainArray[i] = array;
    }
    var reducedArray = mainArray.reduce(function(a, b) {
        return a.concat(b);
    })
    console.log("The main-array looks like: ")
    console.log(mainArray);
    console.log("The flattered array looks like: ")
    console.log(reducedArray);
}
reduceArray();