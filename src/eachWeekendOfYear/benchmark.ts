/* eslint-env mocha */
/* global suite, benchmark */

import eachWeekendOfYear from '.'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite('eachWeekendOfYear', function () {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('date-fns', function () {
    return eachWeekendOfYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date(2022, 7, 12)
  }
})
