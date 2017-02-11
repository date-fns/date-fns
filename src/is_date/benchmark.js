// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isDate from '.'
import moment from 'moment'

suite('isDate', function () {
  benchmark('date-fns', function () {
    return isDate(this.string)
  })

  benchmark('Moment.js', function () {
    return moment.isDate(this.string)
  })
}, {
  setup: function () {
    this.string = '123'
  }
})
