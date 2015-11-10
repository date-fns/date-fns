var assert = require('power-assert')
var isValidDateValues = require('./')

describe('isValidDateValues', function() {
  it('returns true if all given values are valid', function() {
    var result = isValidDateValues(2014, 6 /* Jul */)
    assert(result === true)
  })

  it('returns true if all given values are valid, including optional arguments', function() {
    var result = isValidDateValues(2014, 6 /* Jul */, 2, 6, 30, 15, 500)
    assert(result === true)
  })

  describe('Date constructor restrictions', function() {
    it('returns true if given values are acceptable by Date constructor and valid', function() {
      var result = isValidDateValues('2014', '6' /* Jul */, '2', '6', '30', '15', '500')
      assert(result === true)
    })

    it('returns false if given values are not acceptable by Date constructor', function() {
      var result = isValidDateValues(2014, 6 /* Jul */, 'abc')
      assert(result === false)
    })

    it('returns false if there are no given values', function() {
      var result = isValidDateValues()
      assert(result === false)
    })

    it('returns false if only year is given', function() {
      var result = isValidDateValues(2014)
      assert(result === false)
    })

    it('supports two digit year format', function() {
      var result = isValidDateValues(95, 6 /* Jul */, 2, 6, 30, 15, 500)
      assert(result === true)
    })
  })

  describe('value boundaries restrictions', function() {
    it('returns false if year is invalid', function() {
      var result = isValidDateValues(10e5, 6 /* Jul */)
      assert(result === false)
    })

    it('returns false if month is invalid', function() {
      var result = isValidDateValues(2014, 12)
      assert(result === false)
    })

    it('returns false if day of month is invalid', function() {
      var result = isValidDateValues(2014, 1 /* Feb */, 29)
      assert(result === false)
    })

    it('returns false if hours are invalid', function() {
      var result = isValidDateValues(2014, 6 /* Jul */, 2, 24)
      assert(result === false)
    })

    it('returns false if minutes are invalid', function() {
      var result = isValidDateValues(2014, 6 /* Jul */, 2, 6, 60)
      assert(result === false)
    })

    it('returns false if seconds are invalid', function() {
      var result = isValidDateValues(2014, 6 /* Jul */, 2, 6, 30, 70)
      assert(result === false)
    })

    it('returns false if milliseconds are invalid', function() {
      var result = isValidDateValues(2014, 6 /* Jul */, 2, 6, 30, 15, 1000)
      assert(result === false)
    })
  })
})

