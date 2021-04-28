// @flow
/* eslint-env mocha */

import assert from 'assert'
import secondsToMinutes from '.'

describe('secondsToMinutes', function() {
  it('converts 50 seconds to minutes', function() {
    const result = secondsToMinutes(50);
    assert.deepStrictEqual(result, 0)
  });
  it('converts 70 seconds to minutes', function() {
    const result = secondsToMinutes(70);
    assert.deepStrictEqual(result, 1)
  });
  it('converts 190 seconds to minutes', function() {
    const result = secondsToMinutes(190);
    assert.deepStrictEqual(result, 3)
  });
  it('converts 310 seconds to minutes', function() {
    const result = secondsToMinutes(310);
    assert.deepStrictEqual(result, 5)
  });
});
