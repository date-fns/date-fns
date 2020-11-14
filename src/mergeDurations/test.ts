/* eslint-env mocha */

import assert from 'power-assert'
import mergeDurations, { Duration } from '.';

describe('mergeDurations', function() {
  it('throws TypeError exception if the first argument is `undefined', function () {
    assert.throws(mergeDurations.bind(null), TypeError)
  })

  it('merge empty zero durations into empty duration', function() {
    const result = mergeDurations([]);

    assert.deepEqual(result, {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  })

  it('merge empty durations into empty duration', function() {
    const left: Duration = {};
    const right: Duration = {};
    const result = mergeDurations([left, right]);

    assert.deepEqual(result, {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  })

  it('merge empty duration and dirty duration', function() {
    const left: Duration = {
      years: 1,
      months: 3,
      weeks: 3,
      days: 2,
    };

    const right: Duration = {};
    const result = mergeDurations([left, right]);

    assert.deepEqual(result, {
      years: 1,
      months: 3,
      weeks: 3,
      days: 2,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  })

  it('merge array of single duration', function() {
    const left: Duration = {
      years: 1,
      months: 3,
      weeks: 3,
      days: 2,
    };

    const result = mergeDurations([left]);

    assert.deepEqual(result, {
      years: 1,
      months: 3,
      weeks: 3,
      days: 2,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  })

  it('merge empty dirty durations', function() {
    const left: Duration = {
      years: 1,
      months: 3,
      weeks: 1,
      days: 2,
    };

    const right: Duration = {
      years: 1,
      months: 3,
      weeks: 1,
      days: 2,
      hours: 0,
      minutes: 0,
      seconds: 0,

    };
    const result = mergeDurations([left, right]);

    assert.deepEqual(result, {
      years: 2,
      months: 6,
      weeks: 2,
      days: 4,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  })

  it('merge empty dirty durations with overflows', function() {
    const left: Duration = {
      years: 1,
      months: 14,
      weeks: 5,
      days: 45,
      hours: 26,
      minutes: 66,
      seconds: 66,
    };

    const right: Duration = {
      years: 1,
      months: 14,
      weeks: 5,
      days: 45,
      hours: 26,
      minutes: 66,
      seconds: 66,

    };
    const result = mergeDurations([left, right]);

    assert.deepEqual(result, {
      years: 4,    // 2 + 2 = 4 (lol)
      months: 9,   // 5 + 14 + 14 = 33  | 33 % 12 = 9   | floor(33 / 12) = 2
      weeks: 3,    // 13 + 5 + 5 = 23   | 23 % 4 = 3    | floor(23 / 4) = 5
      days: 1,     // 2 + 45 + 45 = 92  | 92 % 7 = 1    | floor(92 / 7) = 13
      hours: 6,    // 2 + 26 + 26 = 54  | 54 % 24 = 6   | floor(54 / 24) = 2
      minutes: 14, // 2 + 66 + 66 = 134 | 134 % 60 = 14 | floor(134 / 60) = 2
      seconds: 12, // 66 + 66 = 132     | 132 % 60 = 12 | floor(132 / 60) = 2
    });
  })

  it('merge array of multiple durations', function() {
    const first: Duration = {
      years: 1,
      months: 3,
      weeks: 3,
      days: 2,
    };

    const seconds: Duration = {
      years: 1,
      months: 3,
      weeks: 3,
      days: 2,
    };

    const third: Duration = {
      years: 1,
      months: 3,
      weeks: 3,
      days: 2,
    };

    const fourth: Duration = {
      years: 1,
      months: 3,
      weeks: 3,
      days: 2,
    };

    const result = mergeDurations([first, seconds, third, fourth]);

    assert.deepEqual(result, {
      years: 5,
      months: 3,
      weeks: 1,
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  })
})
