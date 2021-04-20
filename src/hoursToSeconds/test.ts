// @flow
/* eslint-env mocha */

import assert from 'assert'
import hoursToSeconds from '.'

describe('hoursToSeconds', function() {
  it('converts hours to minutes', function() {
    const result = hoursToSeconds(2);
    assert.deepStrictEqual(result, 7200)
  });
});
