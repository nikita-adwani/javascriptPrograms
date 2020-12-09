var readLineSync = require('readline-sync');
var arrayOfObject = [];
var filterArrayOfObj = {};
(function matchTheKey() {
    var arrayLimit = readLineSync.question("Enter the array limit: ");
    arrayLimit = parseInt(arrayLimit);
    for (i = 0; i < arrayLimit; i++) {
        let keyLimit = readLineSync.question("Enter the key limit: ")
        keyLimit = parseInt(keyLimit);
        let obj = {};
        for (var j = 0; j < keyLimit; j++) {
            let keyOfObj = readLineSync.question("Enter the key: ");
            var valueOfObj = readLineSync.question("Enter the value: ");
            obj[keyOfObj] = valueOfObj;
        }
        arrayOfObject.push(obj);
    }
    var filterLimit = readLineSync.question("Enter the filter limit:");
    for (var a = 0; a < filterLimit; a++) {
        var filterKey = readLineSync.question("Enter the key that u want to filter: ");
        var filterValue = readLineSync.question("Enter the value that u want to filter: ");
        filterArrayOfObj[filterKey] = filterValue;
        var keysArray = [];
        for (let k = 0; k < arrayOfObject.length; k++) {
            keysArray.push(Object.keys(arrayOfObject[k]));
        }
        var filterArrayKey = Object.keys(filterArrayOfObj);
        var resultingObj = arrayOfObject.filter(function(obj) {
            for (var m = 0; m < filterArrayKey.length; m++) {
                if (!obj.hasOwnProperty(filterArrayKey[m]) || obj[filterArrayKey[m]] !==
                    filterArrayOfObj[filterArrayKey[m]]) {
                    return false;
                }
            }
            return true;
        });
        console.log("Array of obj looks like: ");
        console.log(arrayOfObject);
        console.log("Filter key inserted: ");
        console.log(filterArrayOfObj);
        console.log("Resulting object looks like: ");
        console.log(resultingObj);
    }
})
();