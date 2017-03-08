// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import addISOYears from '.'

suite('addISOYears', function () {
  benchmark('date-fns', function () {
    return addISOYears(this.date, 7)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
