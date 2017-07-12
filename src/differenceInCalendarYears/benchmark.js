// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import differenceInCalendarYears from '.'

suite('differenceInCalendarYears', function () {
  benchmark('date-fns', function () {
    return differenceInCalendarYears(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
