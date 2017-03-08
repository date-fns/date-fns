// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import endOfHour from '.'
import moment from 'moment'

suite('endOfHour', function () {
  benchmark('date-fns', function () {
    return endOfHour(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('hour')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
