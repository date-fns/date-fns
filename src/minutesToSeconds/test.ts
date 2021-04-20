// @flow
/* eslint-env mocha */

import assert from 'assert'
import minutesToSeconds from '.'

describe('minutesToSeconds', function() {
  it('converts minutes to seconds', function() {
    const result = minutesToSeconds(2);
    assert.deepStrictEqual(result, 120)
  });
});
