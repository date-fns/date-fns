// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import endOfDay from '.'
import moment from 'moment'

suite('endOfDay', function () {
  benchmark('date-fns', function () {
    return endOfDay(this.date)
  })

  benchmark('Moment.js', function () {
    return this.moment.endOf('day')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
