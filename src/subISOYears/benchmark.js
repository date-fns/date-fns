// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import subISOYears from '.'

suite('subISOYears', function () {
  benchmark('date-fns', function () {
    return subISOYears(this.date, 7)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
