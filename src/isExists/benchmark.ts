// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isExists from '.'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'suite'. Do you need to install t... Remove this comment to see the full error message
suite(
  'isExisting',
  function() {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'benchmark'.
    benchmark('date-fns', function() {
      return isExists(this.invalidYear, this.invalidMonth, this.invalidDay)
    })
  },
  {
    setup: function() {
      this.invalidYear = 2018
      this.invalidMonth = 1
      this.invalidDay = 31
    }
  }
)
