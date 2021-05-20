// @flow
/* eslint-env mocha */
/* global benchmark */

import isTuesday from '.'

suite(
  'isTuesday',
  function () {
    benchmark('date-fns', function () {
      return isTuesday(this.date)
    })
  },
  {
    setup: function () {
      this.date = new Date()
    },
  }
)
