// @flow
/* eslint-env mocha */

import assert from 'assert'
import millisecondsToHours from '.'

describe('millisecondsToHours', function() {
  it('converts milliseconds to hours', function() {
    const result = millisecondsToHours(7200000);
    assert.deepStrictEqual(result, 2)
  });
});
