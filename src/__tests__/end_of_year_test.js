var endOfYear = require('../end_of_year')

describe('endOfMonth', function() {
  it('returns date with time setted to 23:59:59.999 and date setted to last day of year', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfYear(date)
    assert.deepEqual(result, 
      new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('accepts string', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = endOfYear(date)
    assert.deepEqual(result, 
      new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = endOfYear(date)
    assert.deepEqual(result, 
      new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfYear(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})

