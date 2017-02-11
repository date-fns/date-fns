// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import startOfISOWeek from '.'
import moment from 'moment'

suite('startOfISOWeek', function () {
  benchmark('date-fns', function () {
    return startOfISOWeek(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('isoWeek')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
