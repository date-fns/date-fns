// @flow
/* eslint-env mocha */

import assert from 'assert'
import millisecondsToMinutes from '.'

describe('millisecondsToMinutes', function() {
  it('converts milliseconds to minutes', function() {
    const result = millisecondsToMinutes(120000);
    assert.deepStrictEqual(result, 2)
  });
});
