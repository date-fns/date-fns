// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var distanceInWordsStrict = require('./')
var moment = require('moment')

suite('distanceInWordsStrict', function () {
  benchmark('date-fns', function () {
    return distanceInWordsStrict(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.from(this.momentB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
