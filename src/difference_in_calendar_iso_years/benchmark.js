// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import differenceInCalendarISOYears from '.'

suite('differenceInCalendarISOYears', function () {
  benchmark('date-fns', function () {
    return differenceInCalendarISOYears(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
