// @flow
/* eslint-env mocha */

import assert from 'assert'
import quartersToMonths from '.'

describe('quartersToMonths', function() {
  it('converts quarters to months', function() {
    const result = quartersToMonths(2);
    assert.deepStrictEqual(result, 6)
  });
});
