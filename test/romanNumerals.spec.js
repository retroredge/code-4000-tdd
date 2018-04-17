const assert = require('chai').assert;
const romanNumerals = require('../application/romanNumerals');

describe('Roman numerals tests', () => {

    it('converts 1, 2, 3', () => {
        assert.strictEqual(romanNumerals.convert(1), 'I');
        assert.strictEqual(romanNumerals.convert(2), 'II');
        assert.strictEqual(romanNumerals.convert(3), 'III');
    });

    it('converts 4', () => {
        assert.strictEqual(romanNumerals.convert(4), 'IV');
        assert.strictEqual(romanNumerals.convert(14), 'XIV');
    });

    it('converts 5, 6, 7, 8', () => {
        assert.strictEqual(romanNumerals.convert(5), 'V');
        assert.strictEqual(romanNumerals.convert(6), 'VI');
        assert.strictEqual(romanNumerals.convert(7), 'VII');
        assert.strictEqual(romanNumerals.convert(8), 'VIII');
    });

    it('converts 9', () => {
        assert.strictEqual(romanNumerals.convert(9), 'IX');
        assert.strictEqual(romanNumerals.convert(19), 'XIX');
    });

    it('converts 10, 11, 12, 13', () => {
        assert.strictEqual(romanNumerals.convert(10), 'X');
        assert.strictEqual(romanNumerals.convert(11), 'XI');
        assert.strictEqual(romanNumerals.convert(12), 'XII');
        assert.strictEqual(romanNumerals.convert(13), 'XIII');
    })

    it('converts 15, 16, 17, 19', () => {
        assert.strictEqual(romanNumerals.convert(15), 'XV');
        assert.strictEqual(romanNumerals.convert(16), 'XVI');
        assert.strictEqual(romanNumerals.convert(17), 'XVII');
        assert.strictEqual(romanNumerals.convert(18), 'XVIII');
    })

});
