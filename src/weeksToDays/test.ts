// @flow
/* eslint-env mocha */

import assert from 'assert'
import weeksToDays from '.'

describe('weeksToDays', function() {
  it('converts weeks to days', function() {
    const result = weeksToDays(2);
    assert.deepStrictEqual(result, 14)
  });
});
