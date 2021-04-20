// @flow
/* eslint-env mocha */

import assert from 'assert'
import millisecondsToSeconds from '.'

describe('millisecondsToSeconds', function() {
  it('converts milliseconds to seconds', function() {
    const result = millisecondsToSeconds(3000);
    assert.deepStrictEqual(result, 3)
  });
});
