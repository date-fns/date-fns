// @flow
/* eslint-env mocha */
/* global benchmark */

import isToday from '.'

suite(
  'isToday',
  () => {
    benchmark('date-fns', function () {
      return isToday(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
