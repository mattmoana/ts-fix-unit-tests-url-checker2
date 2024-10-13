import { calculatePasswordStrength } from '../src/calculatePasswordStrength';

describe('Password Strength Calculation', () => {

    test('should return "Very Weak" for short passwords', () => {
        expect(calculatePasswordStrength('abc1211')).toBe('Very Weak')
    });

    test('should return "Weak" for passwords lacking variety', () => {
        expect(calculatePasswordStrength('abcdefgh123')).toBe('Weak')
    });

    test('should return "Moderate" for passwords meeting some requirements', () => {
        expect(calculatePasswordStrength('ABCD12345322')).toBe('Moderate')
    });

    test('should return "Strong" for passwords meeting most or all requirements', () => {
        expect(calculatePasswordStrength('A1bc!2defG')).toBe('Strong')
    });
});
