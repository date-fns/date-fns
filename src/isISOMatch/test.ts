// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isISOMatch from '.'

const cases: Map<'complete' | 'date' | 'time', Map<string, boolean>> = new Map([
  [
    'complete',
    new Map([
      ['2020-02-08T09', true],
      ['202-02-08T09', false],
      ['2020-02-08T25', true],
      ['2020-02-08T09:30', true],
      ['2020-02-08T09:61', false],
      ['2020-02-08T09:30:26', true],
      ['2020-02-08T09:30:61', false],
      ['2020-02-08T09:30:26.123', true],
      ['2020-02-08 09:30', true],
      ['2020-02-08 09:61', false],
      ['2020-02-08 09:30:26', true],
      ['2020-02-08 09:30:61', false],
      ['2020-02-08 09:30:26.123', true],
      ['2020-W06-5 09', true],
      ['2020-W06-5 61', false],
      ['2020-02-08 09+07:00', true],
      ['2020-02-08 09+25:00', false],
      ['2020-02-08 09-0100', true],
      ['2020-02-08 09-2500', false],
      ['2020-02-08 09Z', true],
      ['2020-02-08 61Z', false],
      ['20200208T0000Z', true],
      ['2020300T0000Z', true],
    ]),
  ],
  [
    'date',
    new Map([
      ['2020-02-08', true],
      ['202-02-08', false],
      ['2020-13-08', false],
      ['2020-02-32', false],
      ['2020-039', true],
      ['2020W06', true],
      ['2020W53', false],
      ['2020-W06-5', true],
      ['2020-W06-8', false],
      ['2020039', true],
      ['20200208', true],
      ['20201308', false],
      ['20200232', false],
      ['2020W065', true],
      ['2020W068', false],
    ]),
  ],
  [
    'time',
    new Map([
      ['08', true],
      ['08:20', true],
      ['25:20', false],
      ['08:61', false],
      ['08:20:28', true],
      ['08:20:61', false],
      ['08:20:28.123', true],
      ['08:20:28+06:45', true],
      ['08:20:28+30:45', false],
      ['0820', true],
      ['2520', false],
      ['0861', false],
      ['082028', true],
      ['082061', false],
      ['082028,123', true],
      ['08+04:00', true],
      ['08+30:00', false],
      ['08-0400', true],
      ['08-3000', false],
      ['08Z', true],
      ['25:20Z', false],
    ]),
  ],
])

describe('isISOMatch', function () {
  for (const [desc, testCase] of cases.entries()) {
    for (const [dateString, expected] of testCase.entries()) {
      it(desc + ': ' + dateString, function () {
        const result = isISOMatch(dateString, { representation: desc })
        assert(result === expected)
      })
    }
  }
})
