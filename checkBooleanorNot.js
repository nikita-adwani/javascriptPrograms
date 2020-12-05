function checkBoolean(value) {
    if (typeof value === "boolean") {
        console.log("The datatype of entered " + value + " is boolean.");
    } else {
        console.log("The datatype of entered " + value + " is not boolean.")
    }
}
checkBoolean("false");
checkBoolean(false);