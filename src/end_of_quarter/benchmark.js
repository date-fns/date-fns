// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfQuarter = require('./')
var moment = require('moment')

suite('endOfQuarter', function () {
  benchmark('date-fns', function () {
    return endOfQuarter(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('quarter')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
