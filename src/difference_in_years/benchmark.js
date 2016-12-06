// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var differenceInYears = require('./')
var moment = require('moment')

suite('differenceInYears', function () {
  benchmark('date-fns', function () {
    return differenceInYears(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.diff(this.momentB, 'year')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
