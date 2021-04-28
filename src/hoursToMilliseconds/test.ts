// @flow
/* eslint-env mocha */

import assert from 'assert'
import hoursToMilliseconds from '.'

describe('hoursToMilliseconds', function() {

  it('converts 1 hour to milliseconds', function() {
    const result = hoursToMilliseconds(1);
    assert.deepStrictEqual(result, 3600000)
  });

  it('converts 2 hours to milliseconds', function() {
    const result = hoursToMilliseconds(2);
    assert.deepStrictEqual(result, 7200000)
  });

  it('converts 5 hours to milliseconds', function() {
    const result = hoursToMilliseconds(5);
    assert.deepStrictEqual(result, 18000000)
  });
});
