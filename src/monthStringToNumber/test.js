// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import monthStringToNumber from '.'

describe('mapMonthToNumeric', function () {
  it('accepts a string', function () {
    var result = monthStringToNumber('October')
    assert.deepEqual(result, '10')
  })

  it('correctly maps all full-text to their respective numeric values', function () {
    var january = monthStringToNumber('january')
    var february = monthStringToNumber('february')
    var march = monthStringToNumber('march')
    var april = monthStringToNumber('april')
    var may = monthStringToNumber('may')
    var june = monthStringToNumber('june')
    var july = monthStringToNumber('july')
    var august = monthStringToNumber('august')
    var september = monthStringToNumber('september')
    var october = monthStringToNumber('october')
    var november = monthStringToNumber('november')
    var december = monthStringToNumber('december')

    assert.deepEqual(january, '01')
    assert.deepEqual(february, '02')
    assert.deepEqual(march, '03')
    assert.deepEqual(april, '04')
    assert.deepEqual(may, '05')
    assert.deepEqual(june, '06')
    assert.deepEqual(july, '07')
    assert.deepEqual(august, '08')
    assert.deepEqual(september, '09')
    assert.deepEqual(october, '10')
    assert.deepEqual(november, '11')
    assert.deepEqual(december, '12')
  })

  it('correctly maps all short-text to their respective numeric values', function () {
    var january = monthStringToNumber('jan')
    var february = monthStringToNumber('feb')
    var march = monthStringToNumber('mar')
    var april = monthStringToNumber('apr')
    var may = monthStringToNumber('may')
    var june = monthStringToNumber('jun')
    var july = monthStringToNumber('jul')
    var august = monthStringToNumber('aug')
    var september1 = monthStringToNumber('sep')
    var september2 = monthStringToNumber('sept')
    var october = monthStringToNumber('oct')
    var november = monthStringToNumber('nov')
    var december = monthStringToNumber('dec')

    assert.deepEqual(january, '01')
    assert.deepEqual(february, '02')
    assert.deepEqual(march, '03')
    assert.deepEqual(april, '04')
    assert.deepEqual(may, '05')
    assert.deepEqual(june, '06')
    assert.deepEqual(july, '07')
    assert.deepEqual(august, '08')
    assert.deepEqual(september1, '09')
    assert.deepEqual(september2, '09')
    assert.deepEqual(october, '10')
    assert.deepEqual(november, '11')
    assert.deepEqual(december, '12')
  })

  it('correctly strip all periods on short-text that includes in, and maps the result to their respective numeric values', function () {
    var january = monthStringToNumber('jan.')
    var february = monthStringToNumber('feb.')
    var march = monthStringToNumber('mar.')
    var april = monthStringToNumber('apr.')
    var june = monthStringToNumber('jun.')
    var july = monthStringToNumber('jul.')
    var august = monthStringToNumber('aug.')
    var september1 = monthStringToNumber('sep.')
    var september2 = monthStringToNumber('sept.')
    var october = monthStringToNumber('oct.')
    var november = monthStringToNumber('nov.')
    var december = monthStringToNumber('dec.')

    assert.deepEqual(january, '01')
    assert.deepEqual(february, '02')
    assert.deepEqual(march, '03')
    assert.deepEqual(april, '04')
    assert.deepEqual(june, '06')
    assert.deepEqual(july, '07')
    assert.deepEqual(august, '08')
    assert.deepEqual(september1, '09')
    assert.deepEqual(september2, '09')
    assert.deepEqual(october, '10')
    assert.deepEqual(november, '11')
    assert.deepEqual(december, '12')
  })

  it('generates the same value regardless of capitalization', function () {
    var result1 = monthStringToNumber('jAnUary')
    var result2 = monthStringToNumber('January')
    assert.deepEqual(result1, result2)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(monthStringToNumber.bind(null), TypeError)
  })

  it('throws TypeError if passed a non-string', function () {
    assert.throws(monthStringToNumber.bind(new Date()), TypeError)
  })

  it('throws TypeError if passed a non-month string', function () {
    assert.throws(monthStringToNumber.bind('Friday'), TypeError)
  })
})
