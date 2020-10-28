import assert from 'power-assert'
import nextThursday from '.'
describe('nextThursday', function() {
  it('returns the following Thursday given the Friday before it', function() {
    const notThursday = new Date(2020, 11 /* Dec */, 25)
    var result = nextThursday(notThursday)
    assert.deepStrictEqual(result, new Date(2020, 11 /* Dec */, 31))
  })
  it('returns the following Thursday given the Thursday before it', function() {
    const isThursday = new Date(2020, 11 /* Dec */, 24)
    var result = nextThursday(isThursday)
    assert.deepStrictEqual(result, new Date(2020, 11 /* Dec */, 31))
  })
  it('returns the following Thursday given the Wednesday before it', function() {
    const notThursday = new Date(2020, 11 /* Dec */, 30)
    var result = nextThursday(notThursday)
    assert.deepStrictEqual(result, new Date(2020, 11 /* Dec */, 31))
  })
  it('returns the following Thursday given the Tuesday before it', function() {
    const notThursday = new Date(2020, 11 /* Dec */, 29)
    var result = nextThursday(notThursday)
    assert.deepStrictEqual(result, new Date(2020, 11 /* Dec */, 31))
  })
  it('returns the following Thursday given the Monday before it', function() {
    const notThursday = new Date(2020, 11 /* Dec */, 28)
    var result = nextThursday(notThursday)
    assert.deepStrictEqual(result, new Date(2020, 11 /* Dec */, 31))
  })
  it('returns the following Thursday given the Sunday before it', function() {
    const notThursday = new Date(2020, 11 /* Dec */, 27)
    var result = nextThursday(notThursday)
    assert.deepStrictEqual(result, new Date(2020, 11 /* Dec */, 31))
  })
  it('returns the following Thursday given the Saturday before it', function() {
    const notThursday = new Date(2020, 11 /* Dec */, 26)
    var result = nextThursday(notThursday)
    assert.deepStrictEqual(result, new Date(2020, 11 /* Dec */, 31))
  })
})
