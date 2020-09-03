// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import eachWeekendOfInterval from '.'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite('eachWeekendOfInterval', function () {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
  benchmark('date-fns', function () {
    return eachWeekendOfInterval({start: this.dateStart, end: this.dateEnd})
  })
}, {
  setup: function () {
    this.dateStart = new Date(2022, 0, 1)
    this.dateEnd = new Date(2022, 11, 31)
  }
})
