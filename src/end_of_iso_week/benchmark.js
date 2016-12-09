// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfISOWeek = require('./')
var moment = require('moment')

suite('endOfISOWeek', function () {
  benchmark('date-fns', function () {
    return endOfISOWeek(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('isoWeek')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
