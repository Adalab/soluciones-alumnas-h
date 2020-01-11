const sum = require('./index');

describe('Sum App', () => {

    test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    });

    test('adds 2 + -1 to equal 1', () => {
        expect(sum(2, -1)).toBe(1);
    });

    test('adds 1.2 + 2.1 to equal 3.3', () => {
        expect(sum(1.2, 2.1)).toBe(3.3);
    });

});