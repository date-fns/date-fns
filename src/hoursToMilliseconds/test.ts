// @flow
/* eslint-env mocha */

import assert from 'assert'
import hoursToMilliseconds from '.'

describe('hoursToMilliseconds', function() {
  it('converts hours to milliseconds', function() {
    const result = hoursToMilliseconds(2);
    assert.deepStrictEqual(result, 7200000)
  });
});
