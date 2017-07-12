// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isSameQuarter from '.'
import moment from 'moment'

suite('isSameQuarter', function () {
  benchmark('date-fns', function () {
    return isSameQuarter(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.isSame(this.momentB, 'quarter')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
