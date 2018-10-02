// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import monthStringToNumber from '.'

suite('monthStringToNumber', function () {
  benchmark('date-fns', function () {
    return monthStringToNumber(this.monthName)
  })
}, {
  setup: function () {
    this.monthName = 'October'
  }
})
