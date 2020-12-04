var readlineSync = require('readline-sync');

function checkArray() {
    var arrayLimit = readlineSync.question("Enter the limit of the array: ");
    arrayLimit = parseInt(arrayLimit);
    var array = [];
    if (arrayLimit > 0) {
        for (var i = 0; i < arrayLimit; i++) {
            var arrayElements = readlineSync.question("Enter the elements of array: ");
            arrayElements = parseInt(arrayElements);
            array.push(arrayElements);
        }
        console.log(array);
        for (var j = 0; j < arrayLimit; j++) {
            if (array[j] % 2 === 0) {
                console.log("First Number Passing the Test is: " + array[j]);
                return;
            }
        }

        console.log("OPPS!! No Number passes the text...")


    }
}
checkArray();