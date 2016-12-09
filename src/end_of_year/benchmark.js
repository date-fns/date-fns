// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfYear = require('./')
var moment = require('moment')

suite('endOfYear', function () {
  benchmark('date-fns', function () {
    return endOfYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('year')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
