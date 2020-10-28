import assert from 'power-assert'
import nextSunday from '.'
describe('nextSunday', function() {
  it('returns the following Sunday given the Friday before it', function() {
    const notSunday = new Date(2020, 11 /* Dec */, 25)
    var result = nextSunday(notSunday)
    assert.deepStrictEqual(result, new Date(2020, 11 /* Dec */, 27))
  })
  it('returns the following Sunday given the Thursday before it', function() {
    const notSunday = new Date(2020, 11 /* Dec */, 24)
    var result = nextSunday(notSunday)
    assert.deepStrictEqual(result, new Date(2020, 11 /* Dec */, 27))
  })
  it('returns the following Sunday given the Wednesday before it', function() {
    const notSunday = new Date(2020, 11 /* Dec */, 30)
    var result = nextSunday(notSunday)
    assert.deepStrictEqual(result, new Date(2021, 0 /* Jan */, 3))
  })
  it('returns the following Sunday given the Tuesday before it', function() {
    const notSunday = new Date(2020, 11 /* Dec */, 29)
    var result = nextSunday(notSunday)
    assert.deepStrictEqual(result, new Date(2021, 0 /* Jan */, 3))
  })
  it('returns the following Sunday given the Monday before it', function() {
    const notSunday = new Date(2020, 11 /* Dec */, 28)
    var result = nextSunday(notSunday)
    assert.deepStrictEqual(result, new Date(2021, 0 /* Jan */, 3))
  })
  it('returns the following Sunday given the Sunday before it', function() {
    const isSunday = new Date(2020, 11 /* Dec */, 27)
    var result = nextSunday(isSunday)
    assert.deepStrictEqual(result, new Date(2021, 0 /* Jan */, 3))
  })
  it('returns the following Sunday given the Saturday before it', function() {
    const notSunday = new Date(2020, 11 /* Dec */, 26)
    var result = nextSunday(notSunday)
    assert.deepStrictEqual(result, new Date(2020, 11 /* Dec */, 27))
  })
})
