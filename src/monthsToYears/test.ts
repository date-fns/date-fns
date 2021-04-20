// @flow
/* eslint-env mocha */

import assert from 'assert'
import monthsToYears from '.'

describe('monthsToYears', function() {
  it('converts months to year', function() {
    const result = monthsToYears(40);
    assert.deepStrictEqual(result, 3.33)
  });
});
