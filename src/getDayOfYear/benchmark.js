// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getDayOfYear from '.'
import moment from 'moment'

suite('getDayOfYear', function () {
  benchmark('date-fns', function () {
    return getDayOfYear(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.dayOfYear()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
