var subWeeks = require('../sub_weeks')

describe('subWeeks', function() {
  it('subtracts number of passed days', function() {
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1), 4)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 4))
  })

  it('accepts string', function() {
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1).toISOString(), 2)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 18))
  })

  it('accepts timestamp', function() {
    var result = subWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1)
    assert.deepEqual(result, new Date(2014, 7 /* Aug */, 25))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    subWeeks(date, 2)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})

