// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfDay = require('./')
var moment = require('moment')

suite('endOfDay', function () {
  benchmark('date-fns', function () {
    return endOfDay(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('day')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
