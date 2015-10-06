var assert = require('power-assert')
var isValid = require('../is_valid')

describe('isValid', function() {
  it('returns true if given date is valid', function() {
    var result = isValid(new Date())
    assert(result === true)
  })

  it('returns false if given date is invalid', function() {
    var result = isValid(new Date(''))
    assert(result === false)
  })

  it('throws exception if argument is not a date', function() {
    var block = isValid.bind(null, '')
    assert.throws(block, TypeError, '[object String] is not a date')
  })
})

