// @flow
/* eslint-env mocha */
/* global benchmark */

import isWeekend from '.'

suite(
  'isWeekend',
  function () {
    benchmark('date-fns', function () {
      return isWeekend(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
