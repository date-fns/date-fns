// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import getDaysInYear from '.'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite('getDaysInYear', function () {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('date-fns', function () {
    return getDaysInYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
