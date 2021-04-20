// @flow
/* eslint-env mocha */

import assert from 'assert'
import minutesToMilliseconds from '.'

describe('minutesToMilliseconds', function() {
  it('converts minutes to milliseconds', function() {
    const result = minutesToMilliseconds(2);
    assert.deepStrictEqual(result, 120000)
  });
});
