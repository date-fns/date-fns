// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import setYear from '.'
import moment from 'moment'

suite('setYear', function () {
  benchmark('date-fns', function () {
    return setYear(this.date, 2014)
  })

  benchmark('Moment.js', function () {
    return this.moment.year(2014)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
