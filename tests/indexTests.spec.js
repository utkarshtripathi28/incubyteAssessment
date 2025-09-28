const { test, expect } = require('@playwright/test');
const { add } = require('../stringCalculator');

test.describe('String Calculator TDD Kata', () => {

  test('should return 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number itself for single number', () => {
    expect(add("1")).toBe(1);
  });

  test('should return sum of two comma-separated numbers', () => {
    expect(add("1,5")).toBe(6);
  });

  test('should handle newlines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('should support custom delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('should throw error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow('Negative numbers not allowed: -2');
  });

  test('should throw error for multiple negative numbers', () => {
    expect(() => add("1,-2,-3")).toThrow('Negative numbers not allowed: -2, -3');
  });

});
