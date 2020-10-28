import assert from 'power-assert'
import nextFriday from '.'
describe('nextFriday', function() {
  it('returns the following Friday given the Friday before it', function() {
    const isFriday = new Date(2021, 0 /* Jan */, 1)
    var result = nextFriday(isFriday)
    assert.deepStrictEqual(result, new Date(2021, 0 /* Jan */, 8))
  })
  it('returns the following Friday given the Thursday before it', function() {
    const notFriday = new Date(2020, 11 /* Dec */, 31)
    var result = nextFriday(notFriday)
    assert.deepStrictEqual(result, new Date(2021, 0 /* Jan */, 1))
  })
  it('returns the following Friday given the Wednesday before it', function() {
    const notFriday = new Date(2020, 11 /* Dec */, 30)
    var result = nextFriday(notFriday)
    assert.deepStrictEqual(result, new Date(2021, 0 /* Jan */, 1))
  })
  it('returns the following Friday given the Tuesday before it', function() {
    const notFriday = new Date(2020, 11 /* Dec */, 29)
    var result = nextFriday(notFriday)
    assert.deepStrictEqual(result, new Date(2021, 0 /* Jan */, 1))
  })
  it('returns the following Friday given the Monday before it', function() {
    const notFriday = new Date(2020, 11 /* Dec */, 28)
    var result = nextFriday(notFriday)
    assert.deepStrictEqual(result, new Date(2021, 0 /* Jan */, 1))
  })
  it('returns the following Friday given the Sunday before it', function() {
    const notFriday = new Date(2020, 11 /* Dec */, 27)
    var result = nextFriday(notFriday)
    assert.deepStrictEqual(result, new Date(2021, 0 /* Jan */, 1))
  })
  it('returns the following Friday given the Saturday before it', function() {
    const notFriday = new Date(2020, 11 /* Dec */, 31)
    var result = nextFriday(notFriday)
    assert.deepStrictEqual(result, new Date(2021, 0 /* Jan */, 1))
  })
})
