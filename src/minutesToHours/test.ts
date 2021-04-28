// @flow
/* eslint-env mocha */

import assert from 'assert'
import minuteToHours from '.'

describe('minuteToHours', function() {
  it('converts 50 minutes to hours', function() {
    const result = minuteToHours(50);
    assert.deepStrictEqual(result, 0)
  });
  it('converts 90 minutes to hours', function() {
    const result = minuteToHours(90);
    assert.deepStrictEqual(result, 1)
  });
  it('converts 140 minutes to hours', function() {
    const result = minuteToHours(140);
    assert.deepStrictEqual(result, 2)
  });
  it('converts 310 minutes to hours', function() {
    const result = minuteToHours(310);
    assert.deepStrictEqual(result, 5)
  });
});
