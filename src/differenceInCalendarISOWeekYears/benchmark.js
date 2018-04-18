// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import differenceInCalendarISOWeekYears from '.'

suite('differenceInCalendarISOWeekYears', function () {
  benchmark('date-fns', function () {
    return differenceInCalendarISOWeekYears(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
