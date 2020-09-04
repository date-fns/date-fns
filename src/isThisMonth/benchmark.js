// @flow
/* eslint-env mocha */

/* global suite, benchmark */

import isThisMonth from '.'

suite(
  'isThisMonth',
  () => {
    benchmark('date-fns', function() {
      return isThisMonth(this.date)
    })
  },
  {
    setup: function() {
      this.date = new Date()
    }
  }
)
