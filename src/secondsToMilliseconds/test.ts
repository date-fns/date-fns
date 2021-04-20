// @flow
/* eslint-env mocha */

import assert from 'assert'
import secondsToMilliseconds from '.'

describe('secondsToMilliseconds', function() {
  it('converts seconds to milliseconds', function() {
    const result = secondsToMilliseconds(2);
    assert.deepStrictEqual(result, 2000)
  });
});
