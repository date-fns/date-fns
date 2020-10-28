import assert from 'assert'
import nextWednesday from '.'

describe('nextWednesday', function() {
  it('returns the following Wednesday given the Friday before it', function() {
    const day = new Date(2020, 7 /* Aug */, 21)
    var result = nextWednesday(day)
    assert.deepStrictEqual(result, new Date(2020, 7 /* Aug */, 26))
  })
  it('returns the following Wednesday given the Thursday before it', function() {
    const day = new Date(2020, 7 /* Aug */, 20)
    var result = nextWednesday(day)
    assert.deepStrictEqual(result, new Date(2020, 7 /* Aug */, 26))
  })
  it('returns the following Wednesday given the Wednesday before it', function() {
    const day = new Date(2020, 7 /* Aug */, 19)
    var result = nextWednesday(day)
    assert.deepStrictEqual(result, new Date(2020, 7 /* Aug */, 26))
  })
  it('returns the following Wednesday given the Tuesday before it', function() {
    const day = new Date(2020, 7 /* Aug */, 18)
    var result = nextWednesday(day)
    assert.deepStrictEqual(result, new Date(2020, 7 /* Aug */, 19))
  })
  it('returns the following Wednesday given the Monday before it', function() {
    const day = new Date(2020, 7 /* Aug */, 17)
    var result = nextWednesday(day)
    assert.deepStrictEqual(result, new Date(2020, 7 /* Aug */, 19))
  })
  it('returns the following Wednesday given the Sunday before it', function() {
    const day = new Date(2020, 7 /* Aug */, 16)
    var result = nextWednesday(day)
    assert.deepStrictEqual(result, new Date(2020, 7 /* Aug */, 19))
  })
  it('returns the following Wednesday given the Saturday before it', function() {
    const day = new Date(2020, 7 /* Aug */, 15)
    var result = nextWednesday(day)
    assert.deepStrictEqual(result, new Date(2020, 7 /* Aug */, 19))
  })
})
