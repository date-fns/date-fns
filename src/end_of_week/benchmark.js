// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfWeek = require('./')
var moment = require('moment')

suite('endOfWeek', function () {
  benchmark('date-fns', function () {
    return endOfWeek(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('week')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
