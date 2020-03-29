// @flow
/* eslint-env mocha */

/* global suite, benchmark */

import isThisSecond from '.'

suite(
  'isThisSecond',
  () => {
    benchmark('date-fns', function() {
      return isThisSecond(this.date)
    })
  },
  {
    setup: function() {
      this.date = new Date()
    }
  }
)
