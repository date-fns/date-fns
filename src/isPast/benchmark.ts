// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isPast from '.'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite(
  'isPast',
  () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
    benchmark('date-fns', function() {
      return isPast(this.date)
    })
  },
  {
    setup: function() {
      this.date = new Date()
    }
  }
)
