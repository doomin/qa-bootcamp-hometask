import {getRectanglePerimeter, getRectangleArea, getRectangleInfo, validateInput, validateParameters} from '../js/rectangle';

test('getRectanglePerimeter should return correct rectangle parameter', () => {
    expect(getRectanglePerimeter(2,2)).toBe(8);
    expect(getRectanglePerimeter(5,3)).toBe(16);
});

test('getRectangleArea should return correct rectangle area', () => {
    expect(getRectangleArea(2,2)).toBe(4);
});

test('getRectangleInfo should return correct rectangle info', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    getRectangleInfo(2,2);
    expect(consoleSpy).toHaveBeenCalledWith(`The perimeter of a rectangle is 8 and the area is 4`);
});

test('validateInput should throw type error for non numeric input', () => {
    expect(() => validateInput('input')).toThrow(TypeError);
    expect(() => validateInput('input')).toThrow("Input is NaN");

});

test('validateInput should throw error for less than 0 input', () => {
    expect(() => validateInput(-1)).toThrow(TypeError);
    expect(() => validateInput(-1)).toThrow("Input not greater than 0");   
});

test('validateInput should throw error for input equals 0', () => {
    expect(() => validateInput(0)).toThrow(TypeError);
    expect(() => validateInput(0)).toThrow("Input not greater than 0");   
});

test('validateInput should return true numeric input', () => {
    expect(validateInput(1)).toBeTruthy();
    expect(validateInput(500)).toBeTruthy();
    expect(validateInput(5.4)).toBeTruthy();
});

test('validateParameters should throw error or NaN param', () => {
    expect(() => validateParameters(-1, 4)).toThrow(TypeError); 
    expect(() => validateParameters(-1, -4)).toThrow(TypeError); 
    expect(() => validateParameters(0, 4)).toThrow(TypeError);  
    expect(() => validateParameters(2, 'asd')).toThrow(TypeError);
});