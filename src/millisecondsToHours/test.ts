// @flow
/* eslint-env mocha */

import assert from 'assert'
import millisecondsToHours from '.'

describe('millisecondsToHours', function() {
  it('converts 3500000 milliseconds to hours', function() {
    const result = millisecondsToHours(3500000);
    assert.deepStrictEqual(result, 0)
  });

  it('converts 7000000 milliseconds to hours', function() {
    const result = millisecondsToHours(7000000);
    assert.deepStrictEqual(result, 1)
  });

  it('converts 7600000 milliseconds to hours', function() {
    const result = millisecondsToHours(7600000);
    assert.deepStrictEqual(result, 2)
  });

  it('converts 18000000 milliseconds to hours', function() {
    const result = millisecondsToHours(18000000);
    assert.deepStrictEqual(result, 5)
  });
});
