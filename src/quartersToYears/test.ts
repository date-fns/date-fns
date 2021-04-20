// @flow
/* eslint-env mocha */

import assert from 'assert'
import quartersToYears from '.'

describe('quartersToYears', function() {
  it('converts quarters to years', function() {
    const result = quartersToYears(4);
    assert.deepStrictEqual(result, 1)
  });
});
