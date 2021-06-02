// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import startOfYear from '.'
import moment from 'moment'

suite('startOfYear', function () {
  benchmark('date-fns', function () {
    return startOfYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('year')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
