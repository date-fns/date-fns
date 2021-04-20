// @flow
/* eslint-env mocha */

import assert from 'assert'
import secondsToMinutes from '.'

describe('secondsToMinutes', function() {
  it('converts seconds to minutes', function() {
    const result = secondsToMinutes(120);
    assert.deepStrictEqual(result, 2)
  });
});
