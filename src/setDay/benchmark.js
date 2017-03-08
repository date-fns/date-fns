// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import setDay from '.'
import moment from 'moment'

suite('setDay', function () {
  benchmark('date-fns', function () {
    return setDay(this.date, 3)
  })

  benchmark('Moment.js', function () {
    return this.moment.day(3)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
