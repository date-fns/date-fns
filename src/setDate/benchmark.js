// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import setDate from '.'
import moment from 'moment'

suite('setDate', function () {
  benchmark('date-fns', function () {
    return setDate(this.date, 15)
  })

  benchmark('Moment.js', function () {
    return this.moment.date(15)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
