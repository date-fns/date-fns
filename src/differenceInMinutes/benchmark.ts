// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import differenceInMinutes from '.'
import moment from 'moment'

suite('differenceInMinutes', function () {
  benchmark('date-fns', function () {
    return differenceInMinutes(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.diff(this.momentB, 'minute')
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
