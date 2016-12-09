// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var differenceInCalendarMonths = require('./')

suite('differenceInCalendarMonths', function () {
  benchmark('date-fns', function () {
    return differenceInCalendarMonths(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
