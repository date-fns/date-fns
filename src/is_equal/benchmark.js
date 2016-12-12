// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isEqual = require('./')
var moment = require('moment')

suite('isEqual', function () {
  benchmark('date-fns', function () {
    return isEqual(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
