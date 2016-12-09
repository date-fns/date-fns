// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isFriday = require('./')

suite('isFriday', function () {
  benchmark('date-fns', function () {
    return isFriday(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
