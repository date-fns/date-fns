// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisSecond = require('./')

suite('isThisSecond', function () {
  benchmark('date-fns', function () {
    return isThisSecond(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
