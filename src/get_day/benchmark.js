// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getDay from '.'
import moment from 'moment'

suite('getDay', function () {
  benchmark('date-fns', function () {
    return getDay(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.day()
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
