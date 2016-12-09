// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var differenceInQuarters = require('./')
var moment = require('moment')

suite('differenceInQuarters', function () {
  benchmark('date-fns', function () {
    return differenceInQuarters(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.diff(this.momentB, 'quarter')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
