/* eslint-env mocha */

var assert = require('power-assert')
var format = require('./')

describe('format', function () {
  it('multiple formatters can be chained', function () {
    var result = format('P1Y2M', 'YY MM')
    assert.equal(result, '01 02')
  })

  it('existing tokens are not replaced when wrapped in []', function () {
    var result = format('P1Y2M', '[YY] MM')
    assert.equal(result, 'YY 02')
  })

  describe('Y', function () {
    it('P responds 0', function () {
      var result = format('P', 'Y')
      assert.equal(result, '0')
    })

    it('P1Y responds 1', function () {
      var result = format('P1Y', 'Y')
      assert.equal(result, '1')
    })

    it('P12Y responds 12', function () {
      var result = format('P12Y', 'Y')
      assert.equal(result, '12')
    })
  })

  describe('YY', function () {
    it('P responds 00', function () {
      var result = format('P', 'YY')
      assert.equal(result, '00')
    })

    it('P1Y responds 01', function () {
      var result = format('P1Y', 'YY')
      assert.equal(result, '01')
    })

    it('P10Y responds 10', function () {
      var result = format('P10Y', 'YY')
      assert.equal(result, '10')
    })
  })

  describe('M', function () {
    it('P responds 0', function () {
      var result = format('P', 'M')
      assert.equal(result, '0')
    })

    it('P1M responds 1', function () {
      var result = format('P1M', 'M')
      assert.equal(result, '1')
    })

    it('P10M responds 10', function () {
      var result = format('P10M', 'M')
      assert.equal(result, '10')
    })
  })

  describe('MM', function () {
    it('P responds 00', function () {
      var result = format('P', 'MM')
      assert.equal(result, '00')
    })

    it('P1M responds 01', function () {
      var result = format('P1M', 'MM')
      assert.equal(result, '01')
    })

    it('P10M responds 10', function () {
      var result = format('P10M', 'MM')
      assert.equal(result, '10')
    })
  })

  describe('W', function () {
    it('P responds 0', function () {
      var result = format('P', 'W')
      assert.equal(result, '0')
    })

    it('P1W responds 1', function () {
      var result = format('P1W', 'W')
      assert.equal(result, '1')
    })

    it('P10W responds 10', function () {
      var result = format('P10W', 'W')
      assert.equal(result, '10')
    })
  })

  describe('WW', function () {
    it('P responds 00', function () {
      var result = format('P', 'WW')
      assert.equal(result, '00')
    })

    it('P1W responds 01', function () {
      var result = format('P1W', 'WW')
      assert.equal(result, '01')
    })

    it('P10W responds 10', function () {
      var result = format('P10W', 'WW')
      assert.equal(result, '10')
    })
  })

  describe('D', function () {
    it('P responds 0', function () {
      var result = format('P', 'D')
      assert.equal(result, '0')
    })

    it('P1D responds 1', function () {
      var result = format('P1D', 'D')
      assert.equal(result, '1')
    })

    it('P10D responds 10', function () {
      var result = format('P10D', 'D')
      assert.equal(result, '10')
    })
  })

  describe('DD', function () {
    it('P responds 0', function () {
      var result = format('P', 'DD')
      assert.equal(result, '00')
    })

    it('P1D responds 1', function () {
      var result = format('P1D', 'DD')
      assert.equal(result, '01')
    })

    it('P10D responds 10', function () {
      var result = format('P10D', 'DD')
      assert.equal(result, '10')
    })
  })

  describe('H', function () {
    it('P responds 0', function () {
      var result = format('P', 'H')
      assert.equal(result, '0')
    })

    it('PT1H responds 1', function () {
      var result = format('PT1H', 'H')
      assert.equal(result, '1')
    })

    it('PT10H responds 10', function () {
      var result = format('PT10H', 'H')
      assert.equal(result, '10')
    })
  })

  describe('HH', function () {
    it('P responds 0', function () {
      var result = format('P', 'HH')
      assert.equal(result, '00')
    })

    it('PT1H responds 1', function () {
      var result = format('PT1H', 'HH')
      assert.equal(result, '01')
    })

    it('PT10H responds 10', function () {
      var result = format('PT10H', 'HH')
      assert.equal(result, '10')
    })
  })

  describe('m', function () {
    it('P responds 0', function () {
      var result = format('P', 'm')
      assert.equal(result, '0')
    })

    it('PT1M responds 1', function () {
      var result = format('PT1M', 'm')
      assert.equal(result, '1')
    })

    it('PT10M responds 10', function () {
      var result = format('PT10M', 'm')
      assert.equal(result, '10')
    })
  })

  describe('mm', function () {
    it('P responds 0', function () {
      var result = format('P', 'mm')
      assert.equal(result, '00')
    })

    it('PT1M responds 1', function () {
      var result = format('PT1M', 'mm')
      assert.equal(result, '01')
    })

    it('PT10M responds 10', function () {
      var result = format('PT10M', 'mm')
      assert.equal(result, '10')
    })
  })

  describe('s', function () {
    it('P responds 0', function () {
      var result = format('P', 's')
      assert.equal(result, '0')
    })

    it('PT1S responds 1', function () {
      var result = format('PT1S', 's')
      assert.equal(result, '1')
    })

    it('PT10S responds 10', function () {
      var result = format('PT10S', 's')
      assert.equal(result, '10')
    })
  })

  describe('ss', function () {
    it('P responds 0', function () {
      var result = format('P', 'ss')
      assert.equal(result, '00')
    })

    it('PT1S responds 1', function () {
      var result = format('PT1S', 'ss')
      assert.equal(result, '01')
    })

    it('PT10S responds 10', function () {
      var result = format('PT10S', 'ss')
      assert.equal(result, '10')
    })
  })
})

