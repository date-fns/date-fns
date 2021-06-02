// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import differenceInCalendarISOWeeks from '.'

suite('differenceInCalendarISOWeeks', function () {
  benchmark('date-fns', function () {
    return differenceInCalendarISOWeeks(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
