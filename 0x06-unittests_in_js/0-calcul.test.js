const assert = require('assert');
const calculateNumber = require('./0-calcul.js');


describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle floating point numbers', () => {
    assert.strictEqual(calculateNumber(2.3, 1.8), 4);
  });

  it('should handle mixed integer and float', () => {
    assert.strictEqual(calculateNumber(5, 2.7), 8);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
  });

  it('should round numbers correctly', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('should handle zero correctly', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 1.6), 2);
  });

  it('should handle large numbers', () => {
    assert.strictEqual(calculateNumber(10000000.4, 10000000.4), 20000000);
  });
});
