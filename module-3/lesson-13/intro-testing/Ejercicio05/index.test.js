const fizzbuzz = require('./index');

describe('Fizzbuzz', () => {

    test('return fizz if number is a multiple of 3', () => {
        expect(fizzbuzz(6)).toBe('fizz');
    });

    test('return buzz if number is a multiple of 5', () => {
        expect(fizzbuzz(10)).toBe('buzz');
    });

    test('return fizzbuzz if number is a multiple of 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    });

    test('return number if number is not a multiple of 3 nor 5', () => {
        expect(fizzbuzz(7)).toBe(7);
    });

});