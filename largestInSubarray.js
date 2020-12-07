var readlineSync = require('readline-sync');

function largestInSubarray() {
    let mainArray = [];
    var arrayLimit = readlineSync.question("Enter the limit of the array: ")
    arrayLimit = parseInt(arrayLimit);
    for (var i = 0; i < arrayLimit; i++) {
        var subArrayLimit = readlineSync.question("Enter the limit of sub-array: ");
        subArrayLimit = parseInt(subArrayLimit);
        let array = [];
        for (var j = 0; j < subArrayLimit; j++) {
            var subArrayElement = readlineSync.question("Enter the elements of sub-array: ");
            subArrayElement = parseInt(subArrayElement);
            array[j] = subArrayElement;
        }
        mainArray[i] = array;
    }
    var largestArray = [];
    for (var k = 0; k < mainArray.length; k++) {
        var largestSubArray = mainArray[k][0];
        for (var s = 1; s < mainArray[k].length; s++) {
            if (mainArray[k][s] > largestSubArray) {
                largestSubArray = mainArray[k][s];
            }
        }
        largestArray[k] = largestSubArray;

    }
    console.log("The main array looks like: ")
    console.log(mainArray);
    console.log("The elements largest in sub-array looks like: ")
    console.log(largestArray);
}
largestInSubarray();