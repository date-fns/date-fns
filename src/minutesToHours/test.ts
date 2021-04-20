// @flow
/* eslint-env mocha */

import assert from 'assert'
import minuteToHours from '.'

describe('minuteToHours', function() {
  it('converts minutes to hours', function() {
    const result = minuteToHours(140);
    assert.deepStrictEqual(result, 2.33)
  });
});
