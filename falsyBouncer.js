var readlineSync = require('readline-sync');

function falsyBouncer() {
    let array = [];
    var arrayLimit = readlineSync.question("Enter the limit of array: ");
    arrayLimit = parseInt(arrayLimit);
    for (i = 0; i < arrayLimit; i++) {
        var arrayElements = readlineSync.question("Enter the elements of array: ");
        array.push(arrayElements);
    }
    console.log("Elements enter: ");
    console.log(array);
    var filter = array.filter(function(n) {
        return n !== undefined && n !== null && n !== false && n !== 0 && n !== "" && !isNaN(n);
    });
    console.log("The array looks like after removing falsy values: ")
    console.log(filter);

}
falsyBouncer();