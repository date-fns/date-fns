// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfISOYear = require('./')

suite('endOfISOYear', function () {
  benchmark('date-fns', function () {
    return endOfISOYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
