// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisMinute = require('./')

suite('isThisMinute', function () {
  benchmark('date-fns', function () {
    return isThisMinute(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
