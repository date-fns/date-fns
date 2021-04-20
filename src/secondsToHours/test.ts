// @flow
/* eslint-env mocha */

import assert from 'assert'
import secondsToHours from '.'

describe('secondsToHours', function() {
  it('converts seconds to hours', function() {
    const result = secondsToHours(7200);
    assert.deepStrictEqual(result, 2)
  });
});
