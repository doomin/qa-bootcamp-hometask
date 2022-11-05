export function getRectanglePerimeter(length, width) {
    validateParameters(length, width);
    return 2 * (length + width);
}

export function getRectangleArea(length, width) {
    validateParameters(length, width);
    return length * width;
}

export function getRectangleInfo(length, width) {
    validateParameters(length, width);
    const area = getRectangleArea(length, width);
    const perimeter = getRectanglePerimeter(length, width);
    return console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`);
}

export function validateInput(inputValue) {
    if(isNaN(inputValue)) throw new TypeError("Input is NaN");
    if(inputValue <= 0) throw new TypeError("Input not greater than 0");
    return true;
}

export function validateParameters(...args) {
    args.forEach(element => validateInput(element));
}

export default {getRectanglePerimeter, getRectangleArea, getRectangleInfo, validateInput, validateParameters};