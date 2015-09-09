var compareDesc = require('../compare_desc')

describe('compareDesc', function() {
  it('returns 0 if passed dates are equal', function() {
    var result = compareDesc(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === 0)
  })

  it('returns 1 if first date before second one', function() {
    var result = compareDesc(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === 1)
  })

  it('returns -1 if first date after second one', function() {
    var result = compareDesc(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === -1)
  })

  it('sorts dates array in reverse chronological order when passed as argument to Array.prototype.sort()', function() {
    var unsortedArray = [
      new Date(1995, 6 /* Jul */, 2),
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    ]

    var sortedArray = [
      new Date(1995, 6 /* Jul */, 2),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    ]

    var result = unsortedArray.sort(compareDesc)

    assert.deepEqual(result, sortedArray)
  })

  it('allows to pass string', function() {
    var result = compareDesc(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1989, 6 /* Jul */, 10).toISOString()
    )
    assert(result === 1)
  })

  it('allows to pass timestamp', function() {
    var result = compareDesc(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1989, 6 /* Jul */, 10).getTime()
    )
    assert(result === 1)
  })
})

