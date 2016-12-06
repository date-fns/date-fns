// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisQuarter = require('./')

suite('isThisQuarter', function () {
  benchmark('date-fns', function () {
    return isThisQuarter(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
