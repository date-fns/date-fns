// @flow
/* eslint-env mocha */

import assert from 'assert'
import yearsToMonths from '.'

describe('yearsToMonths', function() {
  it('converts years to months', function() {
    const result = yearsToMonths(2);
    assert.deepStrictEqual(result, 24)
  });
});
