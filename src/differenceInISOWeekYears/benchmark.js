// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import differenceInISOWeekYears from '.'

suite('differenceInISOWeekYears', function () {
  benchmark('date-fns', function () {
    return differenceInISOWeekYears(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
