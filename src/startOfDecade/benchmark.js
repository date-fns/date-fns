// @flow
/* eslint-env mocha */
/* global benchmark */

import startOfDecade from '.'

suite(
  'startOfDecade',
  function () {
    benchmark('date-fns', function () {
      return startOfDecade(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
