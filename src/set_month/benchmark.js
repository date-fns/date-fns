// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var setMonth = require('./')
var moment = require('moment')

suite('setMonth', function () {
  benchmark('date-fns', function () {
    return setMonth(this.date, 6)
  })

  benchmark('Moment.js', function () {
    return this.moment.month(6)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
