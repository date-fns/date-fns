// @flow
/* eslint-env mocha */
/* global benchmark */

import getWeekOfMonth from '.'

suite(
  'getWeekOfMonth',
  function () {
    benchmark('date-fns', function () {
      return getWeekOfMonth(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
