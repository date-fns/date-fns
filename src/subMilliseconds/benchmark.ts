// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import subMilliseconds from '.'
import moment from 'moment'

suite('subMilliseconds', function () {
  benchmark('date-fns', function () {
    return subMilliseconds(this.date, 800)
  })

  benchmark('Moment.js', function () {
    return this.moment.subtract(800, 'milliseconds')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
