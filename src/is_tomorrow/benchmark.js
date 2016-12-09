// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isTomorrow = require('./')

suite('isTomorrow', function () {
  benchmark('date-fns', function () {
    return isTomorrow(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
