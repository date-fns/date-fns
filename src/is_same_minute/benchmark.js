// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isSameMinute from '.'
import moment from 'moment'

suite('isSameMinute', function () {
  benchmark('date-fns', function () {
    return isSameMinute(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'minute')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
