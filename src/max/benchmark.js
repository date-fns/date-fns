// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import max from '.'
import moment from 'moment'

suite('max', function () {
  benchmark('date-fns', function () {
    return max(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return moment.max(this.momentA, this.momentB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
