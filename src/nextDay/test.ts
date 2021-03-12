// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextDay from '.'

describe('nextDay', function () {
  it('returns the following Monday given various dates before the same', function () {
    assert.deepStrictEqual(
      nextDay(new Date(2020, 2 /* Mar */, 20), 1),
      new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextDay(new Date(2020, 2 /* Mar */, 19), 1),
      new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextDay(new Date(2020, 2 /* Mar */, 18), 1),
      new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextDay(new Date(2020, 2 /* Mar */, 17), 1),
      new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextDay(new Date(2020, 2 /* Mar */, 16), 1),
      new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextDay(new Date(2020, 2 /* Mar */, 22), 1),
      new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextDay(new Date(2020, 4 /* May */, 2), 1),
      new Date(2020, 4 /* May */, 4)
    )
  })

  it('returns the following Tuesday given the Saturday before it', function () {
    assert.deepStrictEqual(
      nextDay(new Date(2020, 4 /* May */, 2), 2),
      new Date(2020, 4 /* May */, 5)
    )
  })

  it('returns the following Wednesday given the Saturday before it', function () {
    assert.deepStrictEqual(
      nextDay(new Date(2020, 4 /* May */, 2), 3),
      new Date(2020, 4 /* May */, 6)
    )
  })

  it('returns the following Thursday given the Saturday before it', function () {
    assert.deepStrictEqual(
      nextDay(new Date(2020, 4 /* May */, 2), 4),
      new Date(2020, 4 /* May */, 7)
    )
  })

  it('returns the following Friday given the Saturday before it', function () {
    assert.deepStrictEqual(
      nextDay(new Date(2020, 4 /* May */, 2), 5),
      new Date(2020, 4 /* May */, 8)
    )
  })

  it('returns the following Saturday given the Saturday before it', function () {
    assert.deepStrictEqual(
      nextDay(new Date(2020, 4 /* May */, 2), 6),
      new Date(2020, 4 /* May */, 9)
    )
  })

  it('returns next Sunday given the day is Sunday', function () {
    assert.deepStrictEqual(
      nextDay(new Date(2020, 2 /* Mar */, 22), 0),
      new Date(2020, 2 /* Mar */, 29)
    )
  })
})
