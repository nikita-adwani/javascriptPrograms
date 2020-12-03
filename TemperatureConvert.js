//program to convert temperature
var readlineSync = require('readline-sync');
const freezingPtOfWater = 32;
const startPtOfScale = 100;
const endPtOfScale = 180;

function temperature() {
    var usersChoice = readlineSync.question("Enter the the choice:\n" + "1.Convert fahrenheit to celsius \n" + "2.Convert Celsius to fahrenheit.");
    usersChoice = parseInt(usersChoice);
    if (usersChoice === 1) {
        console.log("Convert temperature Fahrenheit to celsius");
        var temperature = readlineSync.question("Enter temperature in fahrenheit: ");
        var celsius = (temperature - freezingPtOfWater) * (startPtOfScale / endPtOfScale);
        console.log("Tempertaure in celsius:" + celsius);
    } else if (usersChoice === 2) {
        console.log("Convert temperature celsius to fahrenheit");
        var temperature1 = readlineSync.question("Enter temperature in celsius: ");
        var fahrenheit = temperature1 * (endPtOfScale / startPtOfScale) + freezingPtOfWater;
        console.log("Temperature in fahrenheit is: " + fahrenheit);
    } else {
        console.log("Hy!! Please enter the right choice..")
    }
}
temperature();