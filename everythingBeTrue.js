var readLineSync = require('readline-sync');
var array = [];
var count = 0;

function everythingTrue() {
    var arrayLimit = readLineSync.question("Enter the array limit: ");
    arrayLimit = parseInt(arrayLimit);
    for (var i = 0; i < arrayLimit; i++) {
        var keyLimit = readLineSync.question("Enter the key limit: ");
        keyLimit = parseInt(keyLimit);
        let obj = {};
        for (var j = 0; j < keyLimit; j++) {
            let keyOfObj = readLineSync.question("Enter the key: ");
            var valueOfObj = readLineSync.question("Enter the value: ");
            obj[keyOfObj] = valueOfObj;
        }
        array.push(obj);
    }
    var checkKey = readLineSync.question("Enter the key value that u want to check: ");
    array.every(function(element) {
        result = element.hasOwnProperty(checkKey) && Boolean(element[checkKey]);
        console.log(Boolean(result));
    });


}
everythingTrue();