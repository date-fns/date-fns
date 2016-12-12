// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfSecond = require('./')
var moment = require('moment')

suite('endOfSecond', function () {
  benchmark('date-fns', function () {
    return endOfSecond(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('second')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
