import {getRectanglePerimeter} from '../js/rectangle';

test('Should return rectangle parameter as 8', () => {
    expect(getRectanglePerimeter(2,2)).toBe(8);
});