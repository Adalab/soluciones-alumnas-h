const paddingLeft = require('./index');

describe('Padding App', () => {

    test('uses hola, 6 and x to return xxhola', () => {
        expect(paddingLeft('hola', 6, 'x')).toBe('xxhola');
    });

    test('uses hola, 6 and a to return aahola', () => {
        expect(paddingLeft('hola', 6, 'a')).toBe('aahola');
    });

    test('uses ee, 4 and aa to return aaee', () => {
        expect(paddingLeft('ee', 4, 'a')).toBe('aaee');
    });

    test('uses xxxx, 6 and x to return xxxxxx', () => {
        expect(paddingLeft('xxxx', 6, 'x')).toBe('xxxxxx');
    });

    test('uses empty, 6 and x to return xxxxxx', () => {
        expect(paddingLeft('', 6, 'x')).toBe('xxxxxx');
    });

    test('uses hola mi amigo, 6 and x to return hola mi amigo', () => {
        expect(paddingLeft('hola mi amigo', 6, 'x')).toBe('hola mi amigo');
    });

    test('uses xxxx, 0 and x to return xxxx', () => {
        expect(paddingLeft('xxxx', 0, 'x')).toBe('xxxx');
    });

});