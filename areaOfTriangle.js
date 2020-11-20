//program to get area of triangle.
const side1 = 5;
const side2 = 8;
const side3 = 10;

// calculate the semi-perimeter
const perimeter = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
    perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3)
);

console.log(
    "The area of the triangle is: " +
    areaValue
);