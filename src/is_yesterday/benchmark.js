// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isYesterday = require('./')

suite('isYesterday', function () {
  benchmark('date-fns', function () {
    return isYesterday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
