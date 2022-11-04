import {getRectanglePerimeter, getRectangleArea, getRectangleInfo} from '../js/rectangle';

test('Should return rectangle parameter as 8', () => {
    expect(getRectanglePerimeter(2,2)).toBe(8);
});

test('Should return rectangle area as 4', () => {
    expect(getRectangleArea(2,2)).toBe(4);
});

test('Should return correct rectangle info', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    getRectangleInfo(2,2);
    expect(consoleSpy).toHaveBeenCalledWith(`The perimeter of a rectangle is 8 and the area is 4`);
});