// @flow
/* eslint-env mocha */

/* global benchmark */

import isThisMonth from '.'

suite(
  'isThisMonth',
  () => {
    benchmark('date-fns', function () {
      return isThisMonth(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
