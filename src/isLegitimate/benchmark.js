// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isLegitimate from '.'

suite('isExisting', function () {
  benchmark('date-fns', function () {
    return isLegitimate(this.invalidYear, this.invalidMonth, this.invalidDay)
  })
}, {
  setup: function () {
    this.invalidYear = 2018
    this.invalidMonth = 1
    this.invalidDay = 31
  }
})
