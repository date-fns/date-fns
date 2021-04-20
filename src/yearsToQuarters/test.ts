// @flow
/* eslint-env mocha */

import assert from 'assert'
import yearsToQuarters from '.'

describe('yearsToQuarters', function() {
  it('converts years to quarters', function() {
    const result = yearsToQuarters(2);
    assert.deepStrictEqual(result, 8)
  });
});
