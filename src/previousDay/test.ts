/* eslint-env mocha */

import assert from 'assert'
import previousDay from '.'

describe('previousDay', () => {
  it('returns the previous Monday given various dates after the same', () => {
    assert.deepStrictEqual(
      previousDay(new Date(2021, 5 /* Jun */, 18), 1),
      new Date(2021, 5 /* Jun */, 14)
    )

    assert.deepStrictEqual(
      previousDay(new Date(2021, 5 /* Jun */, 17), 1),
      new Date(2021, 5 /* Jun */, 14)
    )

    assert.deepStrictEqual(
      previousDay(new Date(2021, 5 /* Jun */, 14), 1),
      new Date(2021, 5 /* Jun */, 7)
    )

    assert.deepStrictEqual(
      previousDay(new Date(2021, 5 /* Jun */, 9), 1),
      new Date(2021, 5 /* Jun */, 7)
    )

    assert.deepStrictEqual(
      previousDay(new Date(2021, 5 /* Jun */, 8), 1),
      new Date(2021, 5 /* Jun */, 7)
    )

    assert.deepStrictEqual(
      previousDay(new Date(2021, 5 /* Jun */, 7), 1),
      new Date(2021, 4 /* May */, 31)
    )
  })

  it('returns the previous Tuesday given the Saturday after it', () => {
    assert.deepStrictEqual(
      previousDay(new Date(2021, 5 /* Jun */, 26), 2),
      new Date(2021, 5 /* Jun */, 22)
    )
  })

  it('returns the previous Wednesday given the Saturday after it', () => {
    assert.deepStrictEqual(
      previousDay(new Date(2021, 5 /* Jun */, 26), 3),
      new Date(2021, 5 /* Jun */, 23)
    )
  })

  it('returns the previous Thursday given the Saturday after it', () => {
    assert.deepStrictEqual(
      previousDay(new Date(2021, 5 /* Jun */, 26), 4),
      new Date(2021, 5 /* Jun */, 24)
    )
  })

  it('returns the previous Friday given the Saturday after it', () => {
    assert.deepStrictEqual(
      previousDay(new Date(2021, 5 /* Jun */, 26), 5),
      new Date(2021, 5 /* Jun */, 25)
    )
  })

  it('returns the previous Saturday given the Saturday after it', () => {
    assert.deepStrictEqual(
      previousDay(new Date(2021, 5 /* Jun */, 26), 6),
      new Date(2021, 5 /* Jun */, 19)
    )
  })

  it('returns the previous Sunday given the day is Sunday', () => {
    assert.deepStrictEqual(
      previousDay(new Date(2021, 5 /* Jun */, 27), 0),
      new Date(2021, 5 /* Jun */, 20)
    )
  })
})
