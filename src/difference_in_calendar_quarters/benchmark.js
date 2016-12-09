// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var differenceInCalendarQuarters = require('./')

suite('differenceInCalendarQuarters', function () {
  benchmark('date-fns', function () {
    return differenceInCalendarQuarters(this.dateA, this.dateB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
  }
})
