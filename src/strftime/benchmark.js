// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var strftime = require('./')

suite('strftime', function () {
  benchmark('date-fns', function () {
    return strftime(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
