// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import add from '.'
import moment from 'moment'

suite(
  'add',
  function() {
    benchmark('date-fns', function() {
      return add(this.date, { hours: 5, minutes: 10 })
    })

    benchmark('Moment.js', function() {
      return this.moment.add({ hours: 5, minutes: 10 }, 'seconds')
    })
  },
  {
    setup: function() {
      this.date = new Date()
      this.moment = moment()
    }
  }
)
