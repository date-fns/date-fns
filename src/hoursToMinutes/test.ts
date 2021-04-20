// @flow
/* eslint-env mocha */

import assert from 'assert'
import hoursToMinutes from '.'

describe('hoursToMinutes', function() {
  it('converts hours to minutes', function() {
    const result = hoursToMinutes(2);
    assert.deepStrictEqual(result, 120)
  });
});
