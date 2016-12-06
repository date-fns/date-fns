// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var differenceInCalendarISOYears = require('./')

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
