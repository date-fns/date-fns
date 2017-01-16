// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var strftime = require('./')

describe('format', function () {
  beforeEach(function () {
    this._date = new Date(2014, 4 /* May */, 4, 9, 9, 9, 900)

    var offset = this._date.getTimezoneOffset()
    var absoluteOffset = Math.abs(offset)
    var hours = Math.floor(absoluteOffset / 60)
    var minutes = absoluteOffset % 60

    if(hours < 10)
      hours = '0' + hours
    if(minutes < 10)
      minutes = '0' + minutes

    var sign = offset > 0 ? '-' : '+'

    this._timestamp = this._date.getTime().toString()
    this._timezone = sign + hours + ':' + minutes
  })

  it('uses the default format', function () {
    assert(strftime(this._date) === '2014-05-04T09:09:09.900' + this._timezone)
  })

  it('accepts a string', function () {
    assert(strftime(this._date, '%Y-%m-%d') === '2014-05-04')
  })

  it('accepts a timestamp', function () {
    assert(strftime(this._date, '%Y-%m-%d') === '2014-05-04')
  })

  it('correctly uses arguments', function () {
    assert(strftime(this._date, '%a --- %A --- %b --- %B') === 'Sun --- Sunday --- May --- May')
    assert(strftime(this._date, '%d --- %D --- %e --- %F') === '04 --- 05/04/2014 --- 4 --- 2014-05-04')
    assert(strftime(this._date, '%g --- %h --- %H --- %I') === '18 --- May --- 09 --- 09')
    assert(strftime(this._date, '%j --- %k --- %L --- %l') === '124 --- 9 --- 900 --- 9')
    assert(strftime(this._date, '%m --- %M --- %p --- %P') === '05 --- 09 --- AM --- am')
    assert(strftime(this._date, '%r --- %R --- %s --- %S') === '09:09:09 AM --- 09:05 --- ' + this._timestamp + ' --- 09')
    assert(strftime(this._date, '%T --- %u --- %V --- %w') === '09:09:09 --- 7 --- 18 --- 0')
    assert(strftime(this._date, '%W --- %y --- %Y --- %z --- %Z') === '18 --- 14 --- 2014 --- ' + this._timezone.replace(':', '') + ' --- ' + this._timezone)
    assert(strftime(this._date, '%123 %%') === '%123 %%')
  })
})
