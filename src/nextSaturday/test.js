import assert from 'power-assert'
import nextSaturday from '.'

describe('nextSaturday', function() {
  it('returns the following saturday given the friday before it', function() {
    const notSaturday = new Date(2020, 7 /* Aug */, 21)
    var result = nextSaturday(notSaturday)
    console.log('result', result)
    assert.deepStrictEqual(result, new Date(2020, 7 /* Aug */, 22))
  })
  it('returns the following saturday given the thursday before it', function() {
    const notSaturday = new Date(2020, 7 /* Aug */, 20)
    var result = nextSaturday(notSaturday)
    console.log('result', result)
    assert.deepStrictEqual(result, new Date(2020, 7 /* Aug */, 22))
  })
  it('returns the following saturday given the wednesday before it', function() {
    const notSaturday = new Date(2020, 7 /* Aug */, 19)
    var result = nextSaturday(notSaturday)
    console.log('result', result)
    assert.deepStrictEqual(result, new Date(2020, 7 /* Aug */, 22))
  })
  it('returns the following saturday given the Tuesday before it', function() {
    const notSaturday = new Date(2020, 7 /* Aug */, 18)
    var result = nextSaturday(notSaturday)
    console.log('result', result)
    assert.deepStrictEqual(result, new Date(2020, 7 /* Aug */, 22))
  })
  it('returns the following saturday given the Monday before it', function() {
    const notSaturday = new Date(2020, 7 /* Aug */, 17)
    var result = nextSaturday(notSaturday)
    console.log('result', result)
    assert.deepStrictEqual(result, new Date(2020, 7 /* Aug */, 22))
  })
  it('returns the following saturday given the Sunday before it', function() {
    const notSaturday = new Date(2020, 7 /* Aug */, 16)
    var result = nextSaturday(notSaturday)
    console.log('result', result)
    assert.deepStrictEqual(result, new Date(2020, 7 /* Aug */, 22))
  })
  it('returns the following saturday given the Saturday before it', function() {
    const isSaturday = new Date(2020, 7 /* Aug */, 15)
    var result = nextSaturday(isSaturday)
    console.log('result', result)
    assert.deepStrictEqual(result, new Date(2020, 7 /* Aug */, 22))
  })
})
