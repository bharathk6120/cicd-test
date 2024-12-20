const { add, sub, mul, div } = require(".");

describe('ALU operation', () => {
    it('Should return sum of 2 values', () => {
        expect(add(1, 2)).toBe(3);
    });

    it('Should return difference of 2 values', () => {
        expect(sub(1, 2)).toBe(-1);
    });

    it('Should return multiplication of 2 values', () => {
        expect(mul(1, 2)).toBe(2);
    });

    it('Should return division of 2 values', () => {
        expect(div(1, 2)).toBe(0.5);
    });
});