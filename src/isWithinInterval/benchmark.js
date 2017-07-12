// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isWithinInterval from '.'
import moment from 'moment'

suite('isWithinInterval', function () {
  benchmark('date-fns', function () {
    return isWithinInterval(this.dateA, {start: this.dateB, end: this.dateC})
  })

  benchmark('Moment.js', function () {
    return this.momentA.isBetween(this.momentB, this.momentC)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() - 604800000)
    this.momentB = this.momentA.clone().subtract(7, 'days')
    this.dateC = new Date(this.dateA.getTime() + 604800000)
    this.momentC = this.momentA.clone().add(7, 'days')
  }
})
