// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisISOYear = require('./')

suite('isThisISOYear', function () {
  benchmark('date-fns', function () {
    return isThisISOYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
