// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getDate from '.'
import moment from 'moment'

suite('getDate', function () {
  benchmark('date-fns', function () {
    return getDate(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.date()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
