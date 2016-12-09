// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var differenceInMonths = require('./')
var moment = require('moment')

suite('differenceInMonths', function () {
  benchmark('date-fns', function () {
    return differenceInMonths(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.diff(this.momentB, 'month')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
