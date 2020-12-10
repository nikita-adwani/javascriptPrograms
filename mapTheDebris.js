var readLineSync = require('readline-sync');

function mapDebris() {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var newArr = [];
    var array = [];
    var arrayLimit = readLineSync.question("ENter the limit of array: ");
    arrayLimit = parseInt(arrayLimit);
    for (i = 0; i < arrayLimit; i++) {
        var keyLimit = readLineSync.question("Enter the key limit: ");
        keyLimit = parseInt(keyLimit);
        let obj = {};
        for (var j = 0; j < keyLimit; j++) {
            let keyOfObj = readLineSync.question("Enter the key: ");
            var valueOfObj = readLineSync.question("Enter the value: ");
            if (!isNaN(valueOfObj)) {
                valueOfObj = parseInt(valueOfObj);
            }
            keyOfObj.toLowerCase();
            obj[keyOfObj] = valueOfObj;
        }
        array.push(obj);

        for (var elem in array) {
            //Rounding off the orbital period value
            var orbitalPer = Math.round(
                2 * Math.PI * Math.sqrt(Math.pow(array[elem].avgAlt + earthRadius, 3) / GM)
            );
            //Adding new object with orbitalPeriod property
            newArr.push({ name: array[elem].name, orbitalPeriod: orbitalPer });
        }


        console.log(array);
        console.log(newArr);

    }
}
mapDebris();