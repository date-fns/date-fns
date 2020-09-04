// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import set from '.'
import moment from 'moment'

suite(
  'set',
  function() {
    benchmark('date-fns', function() {
      return set(this.date, { year: 2014, month: 8 })
    })

    benchmark('Moment.js', function() {
      return this.moment.set({ year: 2014, month: 3 })
    })
  },
  {
    setup: function() {
      this.date = new Date(2013, 7)
      this.moment = moment()
    }
  }
)
