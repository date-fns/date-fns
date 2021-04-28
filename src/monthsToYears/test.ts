// @flow
/* eslint-env mocha */

import assert from 'assert'
import monthsToYears from '.'

describe('monthsToYears', function() {
  it('converts 10 months to year', function() {
    const result = monthsToYears(10);
    assert.deepStrictEqual(result, 0)
  });
  it('converts 15 months to year', function() {
    const result = monthsToYears(15);
    assert.deepStrictEqual(result, 1)
  });
  it('converts  40 months to year', function() {
    const result = monthsToYears(40);
    assert.deepStrictEqual(result, 3)
  });
  it('converts 65 months to year', function() {
    const result = monthsToYears(65);
    assert.deepStrictEqual(result, 5)
  });
});
