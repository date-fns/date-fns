// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import subMinutes from '.'
import moment from 'moment'

suite('subMinutes', function () {
  benchmark('date-fns', function () {
    return subMinutes(this.date, 25)
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(25, 'minutes')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
