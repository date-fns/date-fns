// @flow
/* eslint-env mocha */

import assert from 'assert'
import daysToWeeks from '.'

describe('daysToWeeks', function() {
  it('converts days to weeks', function() {
    const result = daysToWeeks(14);
    assert.deepStrictEqual(result, 2)
  });
});
