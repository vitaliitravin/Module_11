
import { getPercents } from "../getPercents.js";

describe ('tests for getPercents function', () => {
    test('should operate correctly with different numbers', () => {
        expect(getPercents(30, 200)).toBe(60);
        expect(getPercents(10, 300)).toBe(30);
        expect(getPercents(80, 1000)).toBe(800);
    });
    test('should return correct values', () => {
        expect(getPercents(30, 200)).toBeGreaterThan(50);
        expect(getPercents(30, 200)).toBeLessThan(200);
    });
    test('function is defined', () => {
        expect(getPercents()).toBeDefined();
        
    });
})