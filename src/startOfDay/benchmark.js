// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import startOfDay from '.'
import moment from 'moment'

suite('startOfDay', function () {
  benchmark('date-fns', function () {
    return startOfDay(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.startOf('day')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
