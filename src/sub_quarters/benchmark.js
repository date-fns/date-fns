// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var subQuarters = require('./')
var moment = require('moment')

suite('subQuarters', function () {
  benchmark('date-fns', function () {
    return subQuarters(this.date, 1)
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(1, 'quarters')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
