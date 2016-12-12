// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var differenceInCalendarDays = require('./')

suite('differenceInCalendarDays', function () {
  benchmark('date-fns', function () {
    return differenceInCalendarDays(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
