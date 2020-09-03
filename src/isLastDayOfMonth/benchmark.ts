// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isLastDayOfMonth from '.'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite('isLastDayOfMonth', function () {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('date-fns', function () {
    return isLastDayOfMonth(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
