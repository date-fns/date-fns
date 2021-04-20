// @flow
/* eslint-env mocha */

import assert from 'assert'
import monthsToQuarters from '.'

describe('monthsToQuarters', function() {
  it('converts months to quarters', function() {
    const result = monthsToQuarters(6);
    assert.deepStrictEqual(result, 2)
  });
});
