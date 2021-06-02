// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import setISODay from '.'
import moment from 'moment'

suite('setISODay', function () {
  benchmark('date-fns', function () {
    return setISODay(this.date, 5)
  })

  benchmark('Moment.js', function () {
    return this.moment.isoWeekday(5)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
