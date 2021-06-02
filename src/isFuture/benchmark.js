// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isFuture from '.'

suite(
  'isFuture',
  () => {
    benchmark('date-fns', function() {
      return isFuture(this.date)
    })
  },
  {
    setup: function() {
      this.date = new Date()
    }
  }
)
