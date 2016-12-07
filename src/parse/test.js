// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import parse from '.'

describe('parse', function () {
  var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

  describe('years', function () {
    it('YY', function () {
      var result = parse('16', 'YY', baseDate)
      assert.deepEqual(result, new Date(1916, 0 /* Jan */, 1))
    })

    it('YYYY', function () {
      var result = parse('2014', 'YYYY', baseDate)
      assert.deepEqual(result, new Date(2014, 0 /* Jan */, 1))
    })

    it('years less than 100', function () {
      var result = parse('0001', 'YYYY', baseDate)
      var expectedResult = new Date(1, 0 /* Jan */, 1)
      expectedResult.setFullYear(1)
      assert.deepEqual(result, expectedResult)
    })
  })

  describe('ISO week-numbering years', function () {
    it('GG', function () {
      var result = parse('50', 'GG', baseDate)
      assert.deepEqual(result, new Date(1950, 0 /* Jan */, 2))
    })

    it('GGGG', function () {
      var result = parse('2008', 'GGGG', baseDate)
      assert.deepEqual(result, new Date(2007, 11 /* Dec */, 31))
    })
  })

  describe('quarters', function () {
    it('Q', function () {
      var result = parse('1995 3', 'YYYY Q', baseDate)
      assert.deepEqual(result, new Date(1995, 6 /* Jul */, 1))
    })

    it('Qo', function () {
      var result = parse('2000 2nd', 'YYYY Qo', baseDate)
      assert.deepEqual(result, new Date(2000, 3 /* Apr */, 1))
    })

    it('returns a correct quarter', function () {
      var result = []
      for (var i = 1; i <= 4; i++) {
        result.push(parse('2014 ' + i, 'YYYY Q', baseDate))
      }
      var expectedResult = [
        new Date(2014, 0 /* Jan */, 1),
        new Date(2014, 3 /* Apr */, 1),
        new Date(2014, 6 /* Jul */, 1),
        new Date(2014, 9 /* Oct */, 1)
      ]
      assert.deepEqual(result, expectedResult)
    })
  })

  describe('months', function () {
    it('M', function () {
      var result = parse('1995 7', 'YYYY M', baseDate)
      assert.deepEqual(result, new Date(1995, 6 /* Jul */, 1))
    })

    it('Mo', function () {
      var result = parse('2014 12th', 'YYYY Mo', baseDate)
      assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1))
    })

    it('MM', function () {
      var result = parse('2014 02', 'YYYY MM', baseDate)
      assert.deepEqual(result, new Date(2014, 1 /* Feb */, 1))
    })

    it('MMM', function () {
      var result = parse('2016 Nov', 'YYYY MMM', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 1))
    })

    it('MMMM', function () {
      var result = parse('2016 December', 'YYYY MMMM', baseDate)
      assert.deepEqual(result, new Date(2016, 11 /* Dec */, 1))
    })
  })

  describe('ISO weeks', function () {
    it('W', function () {
      var result = parse('2016 4', 'GGGG W', baseDate)
      assert.deepEqual(result, new Date(2016, 0 /* Jan */, 25))
    })

    it('Wo', function () {
      var result = parse('2016 3rd', 'GGGG Wo', baseDate)
      assert.deepEqual(result, new Date(2016, 0 /* Jan */, 18))
    })

    it('WW', function () {
      var result = parse('2016 09', 'GGGG WW', baseDate)
      assert.deepEqual(result, new Date(2016, 1 /* Feb */, 29))
    })
  })

  describe('days of a week', function () {
    it('d', function () {
      var result = parse('2016 4 0', 'GGGG W d', baseDate)
      assert.deepEqual(result, new Date(2016, 0 /* Jan */, 24))
    })

    it('do', function () {
      var result = parse('2016 4 0th', 'GGGG W do', baseDate)
      assert.deepEqual(result, new Date(2016, 0 /* Jan */, 24))
    })

    it('dd', function () {
      var result = parse('2016 4 Mo', 'GGGG W dd', baseDate)
      assert.deepEqual(result, new Date(2016, 0 /* Jan */, 25))
    })

    it('ddd', function () {
      var result = parse('2016 4 Wed', 'GGGG W ddd', baseDate)
      assert.deepEqual(result, new Date(2016, 0 /* Jan */, 27))
    })

    it('dddd', function () {
      var result = parse('2016 4 Friday', 'GGGG W dddd', baseDate)
      assert.deepEqual(result, new Date(2016, 0 /* Jan */, 29))
    })
  })

  describe('days of an ISO week', function () {
    it('E', function () {
      var result = parse('2016 4 7', 'GGGG W E', baseDate)
      assert.deepEqual(result, new Date(2016, 0 /* Jan */, 31))
    })
  })

  describe('days of a month', function () {
    it('D', function () {
      var result = parse('11/2/2016', 'M/D/YYYY', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 2))
    })

    it('Do', function () {
      var result = parse('2016 11 15th', 'YYYY MM Do', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 15))
    })

    it('DD', function () {
      var result = parse('2016 11 05', 'YYYY MM DD', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5))
    })
  })

  describe('days of a year', function () {
    it('DDD', function () {
      var result = parse('2016 50', 'YYYY DDD', baseDate)
      assert.deepEqual(result, new Date(2016, 1 /* Feb */, 19))
    })

    it('DDDo', function () {
      var result = parse('2016 100th', 'YYYY DDDo', baseDate)
      assert.deepEqual(result, new Date(2016, 3 /* Apr */, 9))
    })

    it('DDDD', function () {
      var result = parse('2016 366', 'YYYY DDDD', baseDate)
      assert.deepEqual(result, new Date(2016, 11 /* Dec */, 31))
    })
  })

  describe('hours', function () {
    it('H', function () {
      var result = parse('2016-11-25 4 o\'clock', 'YYYY-MM-DD H [o\'clock]', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
    })

    it('HH', function () {
      var result = parse('2016-11-25T04', 'YYYY-MM-DDTHH', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
    })

    it('h', function () {
      var result = parse('4 hours 2016-11-25', 'h [hours] YYYY-MM-DD', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
    })

    it('hh', function () {
      var result = parse('2016-11-25 04', 'YYYY-MM-DD hh', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
    })
  })

  describe('a.m./p.m.', function () {
    it('AM', function () {
      var result = parse('2016-11-25 04 AM', 'YYYY-MM-DD hh A', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
    })

    it('PM', function () {
      var result = parse('2016-11-25 04 PM', 'YYYY-MM-DD hh A', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 0, 0, 0))
    })

    it('am', function () {
      var result = parse('2016-11-25 04 am', 'YYYY-MM-DD hh a', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
    })

    it('pm', function () {
      var result = parse('2016-11-25 04 pm', 'YYYY-MM-DD hh a', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 0, 0, 0))
    })

    it('a.m.', function () {
      var result = parse('2016-11-25 04 a.m.', 'YYYY-MM-DD hh aa', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
    })

    it('p.m.', function () {
      var result = parse('2016-11-25 04 p.m.', 'YYYY-MM-DD hh aa', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 0, 0, 0))
    })

    it('12 a.m.', function () {
      var result = parse('2016-11-25 12 a.m.', 'YYYY-MM-DD hh aa', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 0, 0, 0, 0))
    })

    it('12 p.m.', function () {
      var result = parse('2016-11-25 12 p.m.', 'YYYY-MM-DD hh aa', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 12, 0, 0, 0))
    })
  })

  describe('minutes', function () {
    it('m', function () {
      var result = parse('2016-11-25 4:5', 'YYYY-MM-DD H:m', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 5, 0, 0))
    })

    it('mm', function () {
      var result = parse('20161125T0405', 'YYYYMMDDTHHmm', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 5, 0, 0))
    })
  })

  describe('seconds', function () {
    it('s', function () {
      var dateString = '4 hours 30 minutes 5 seconds 2016-11-25'
      var formatString = 'H [hours] m [minutes] s [seconds] YYYY-MM-DD'
      var result = parse(dateString, formatString, baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 30, 5, 0))
    })

    it('ss', function () {
      var result = parse('2016-11-25T16:38:38', 'YYYY-MM-DDTHH:mm:ss', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 38, 38, 0))
    })
  })

  describe('fractions of a second', function () {
    it('S', function () {
      var result = parse('2016-11-25T16:38:38.1', 'YYYY-MM-DDTHH:mm:ss.S', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 38, 38, 100))
    })

    it('SS', function () {
      var result = parse('2016-11-25T16:38:38.12', 'YYYY-MM-DDTHH:mm:ss.SS', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 38, 38, 120))
    })

    it('SSS', function () {
      var result = parse('2016-11-25T16:38:38.123', 'YYYY-MM-DDTHH:mm:ss.SSS', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 16, 38, 38, 123))
    })
  })

  describe('timezones', function () {
    it('Z', function () {
      var dateString = '2016-11-25T16:38:38.123-01:30'
      var resultString = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
      var result = parse(dateString, resultString, baseDate)
      assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-01:30'))
    })

    it('ZZ', function () {
      var dateString = '2016-11-25T16:38:38.123-0130'
      var resultString = 'YYYY-MM-DDTHH:mm:ss.SSSZZ'
      var result = parse(dateString, resultString, baseDate)
      assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-01:30'))
    })
  })

  describe('timestamps', function () {
    it('X', function () {
      var result = parse('512969520', 'X', baseDate)
      assert.deepEqual(result, new Date('1986-04-04T03:32:00.000Z'))
    })

    it('x', function () {
      var result = parse('512969520900', 'x', baseDate)
      assert.deepEqual(result, new Date('1986-04-04T03:32:00.900Z'))
    })
  })

  describe('common formats', function () {
    it('ISO date', function () {
      var result = parse('20161105T040404', 'YYYYMMDDTHHmmss', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0))
    })

    it('ISO week-numbering date', function () {
      var result = parse('2016W474T153005', 'GGGG[W]WWETHHmmss', baseDate)
      assert.deepEqual(result, new Date(2016, 10 /* Nov */, 24, 15, 30, 5, 0))
    })

    it('ISO day of year date', function () {
      var result = parse('2010123T235959', 'YYYYDDDDTHHmmss', baseDate)
      assert.deepEqual(result, new Date(2010, 4 /* May */, 3, 23, 59, 59, 0))
    })

    it('Date.prototype.toString()', function () {
      var dateString = 'Wed Jul 02 2014 05:30:15 GMT+0600'
      var formatString = 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ'
      var result = parse(dateString, formatString, baseDate)
      assert.deepEqual(result, new Date(dateString))
    })

    it('Date.prototype.toISOString()', function () {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
      var result = parse(dateString, formatString, baseDate)
      assert.deepEqual(result, new Date(dateString))
    })

    it('middle-endian', function () {
      var result = parse('5 a.m. 07/02/2016', 'h aa MM/DD/YYYY', baseDate)
      assert.deepEqual(result, new Date(2016, 6 /* Jul */, 2, 5, 0, 0, 0))
    })

    it('little-endian', function () {
      var result = parse('02.07.1995', 'DD.MM.YYYY', baseDate)
      assert.deepEqual(result, new Date(1995, 6 /* Jul */, 2, 0, 0, 0, 0))
    })
  })

  describe('priority', function () {
    it('units of lower priority don\'t overwrite values of higher priority', function () {
      var dateString = '+06:00 123 15 30 05 02 07 2014'
      var formatString = 'Z SSS ss mm HH DD MM YYYY'
      var result = parse(dateString, formatString, baseDate)
      assert.deepEqual(result, new Date('2014-07-02T05:30:15.123+06:00'))
    })

    it('units of equal priority overwrite each other in order of appearance', function () {
      var dateString = '25 1950 75 2000 January Feb 03 4 1 123 12'
      var formatString = 'GG GGGG YY YYYY MMMM MMM MM M d DDD DD'
      var result = parse(dateString, formatString, baseDate)
      assert.deepEqual(result, new Date(2000, 3 /* Apr */, 12))
    })

    it('timestamp overwrites everything', function () {
      var dateString = '512969520900 512969520 2014-07-02T05:30:15.123+06:00'
      var formatString = 'x X YYYY-MM-DDTHH:mm:ss.SSSZ'
      var result = parse(dateString, formatString, baseDate)
      assert.deepEqual(result, new Date(512969520000))
    })
  })

  context('only one value is provided', function () {
    describe('quarter', function () {
      it('takes the values of higher priority from baseDate', function () {
        var dateString = '1'
        var formatString = 'Q'
        var result = parse(dateString, formatString, baseDate)
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1))
      })
    })

    describe('month', function () {
      it('takes the values of higher priority from baseDate', function () {
        var dateString = '12'
        var formatString = 'M'
        var result = parse(dateString, formatString, baseDate)
        assert.deepEqual(result, new Date(1986, 11 /* Dec */, 1))
      })
    })

    describe('ISO week', function () {
      it('takes the values of higher priority from baseDate', function () {
        var dateString = '49'
        var formatString = 'W'
        var result = parse(dateString, formatString, baseDate)
        assert.deepEqual(result, new Date(1986, 11 /* Dec */, 1))
      })
    })

    describe('day of week', function () {
      it('takes the values of higher priority from baseDate', function () {
        var dateString = '0'
        var formatString = 'd'
        var result = parse(dateString, formatString, baseDate)
        assert.deepEqual(result, new Date(1986, 2 /* Mar */, 30))
      })
    })

    describe('day of ISO week', function () {
      it('takes the values of higher priority from baseDate', function () {
        var dateString = '7'
        var formatString = 'E'
        var result = parse(dateString, formatString, baseDate)
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 6))
      })
    })

    describe('day of month', function () {
      it('takes the values of higher priority from baseDate', function () {
        var dateString = '15'
        var formatString = 'D'
        var result = parse(dateString, formatString, baseDate)
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 15))
      })
    })

    describe('day of year', function () {
      it('takes the values of higher priority from baseDate', function () {
        var dateString = '200'
        var formatString = 'DDD'
        var result = parse(dateString, formatString, baseDate)
        assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19))
      })
    })

    describe('hour', function () {
      it('takes the values of higher priority from baseDate', function () {
        var dateString = '19'
        var formatString = 'H'
        var result = parse(dateString, formatString, baseDate)
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 19))
      })
    })

    describe('12-hour clock', function () {
      it('takes the values of higher priority from baseDate', function () {
        var dateString = '6 p.m.'
        var formatString = 'h aa'
        var result = parse(dateString, formatString, baseDate)
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 18))
      })
    })

    describe('minute', function () {
      it('takes the values of higher priority from baseDate', function () {
        var dateString = '12'
        var formatString = 'm'
        var result = parse(dateString, formatString, baseDate)
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 12))
      })
    })

    describe('second', function () {
      it('takes the values of higher priority from baseDate', function () {
        var dateString = '34'
        var formatString = 's'
        var result = parse(dateString, formatString, baseDate)
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 34))
      })
    })

    describe('1/10 of second', function () {
      it('takes the values of higher priority from baseDate', function () {
        var dateString = '5'
        var formatString = 'S'
        var result = parse(dateString, formatString, baseDate)
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 500))
      })
    })

    describe('1/100 of second', function () {
      it('takes the values of higher priority from baseDate', function () {
        var dateString = '67'
        var formatString = 'SS'
        var result = parse(dateString, formatString, baseDate)
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 670))
      })
    })

    describe('millisecond', function () {
      it('takes the values of higher priority from baseDate', function () {
        var dateString = '891'
        var formatString = 'SSS'
        var result = parse(dateString, formatString, baseDate)
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 891))
      })
    })
  })

  describe('custom locale', function () {
    it('can be passed to the function', function () {
      var units = {
        qwe: {
          priority: 12,
          set: function (date, value) {
            date.setDate(value + 2)
            date.setHours(0, 0, 0, 0)
            return date
          }
        },

        rty: {
          priority: 11,
          set: function (date, value) {
            date.setMonth(value + 2, 1)
            date.setHours(0, 0, 0, 0)
            return date
          }
        }
      }

      var parsers = {
        abc: {
          unit: 'qwe',
          match: /^(It|This)/,
          parse: function (matchResult) {
            var word = matchResult[1]

            if (word === 'It') {
              return 7
            } else {
              return 6
            }
          }
        },

        efg: {
          unit: 'rty',
          match: /^(works|doesn't work)/,
          parse: function (matchResult) {
            var word = matchResult[1]

            if (word === 'works') {
              return 3
            } else {
              return 2
            }
          }
        }
      }

      var parsingTokensRegExp = /(\[[^[]*])|(\\)?(YYYY|abc|efg|.)/g

      var customLocale = {
        parse: {
          units: units,
          parsers: parsers,
          parsingTokensRegExp: parsingTokensRegExp
        }
      }

      var result = parse('2017 It works correctly!', 'YYYY abc efg [correctly!]', baseDate, {locale: customLocale})
      assert.deepEqual(result, new Date(2017, 5, 9))
    })

    context('does not contain `parse` property', function () {
      it('fallbacks to enLocale', function () {
        var customLocale = {}
        var result = parse('2016-11-25 04 AM', 'YYYY-MM-DD hh A', baseDate, {locale: customLocale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
      })
    })

    context('does not contain `parse.parsers` property', function () {
      it('fallbacks to enLocale', function () {
        var customLocale = {parse: {}}
        var result = parse('2016-11-25 04 AM', 'YYYY-MM-DD hh A', baseDate, {locale: customLocale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 4, 0, 0, 0))
      })
    })

    context('does not contain `parse.parsingTokensRegExp` property', function () {
      it('uses `parse.parsingTokensRegExp` of enLocale', function () {
        var units = {
          date: {
            priority: 12,
            set: function (date, value) {
              date.setDate(value + 2)
              date.setHours(0, 0, 0, 0)
              return date
            }
          },

          month: {
            priority: 11,
            set: function (date, value) {
              date.setMonth(value + 2, 1)
              date.setHours(0, 0, 0, 0)
              return date
            }

          }
        }

        var parsers = {
          Do: {
            unit: 'date',
            match: /^(It|This)/,
            parse: function (matchResult) {
              var word = matchResult[1]

              if (word === 'It') {
                return 7
              } else {
                return 6
              }
            }
          },

          MMMM: {
            unit: 'month',
            match: /^(works|doesn't work)/,
            parse: function (matchResult) {
              var word = matchResult[1]

              if (word === 'works') {
                return 3
              } else {
                return 2
              }
            }
          }
        }

        var customLocale = {
          parse: {
            units: units,
            parsers: parsers
          }
        }

        var result = parse('2017 It works correctly!', 'YYYY Do MMMM [correctly!]', baseDate, {locale: customLocale})
        assert.deepEqual(result, new Date(2017, 5, 9))
      })
    })

    context('does not contain `parse.units` property', function () {
      it('uses `parse.units` of enLocale', function () {
        var parsers = {
          abc: {
            unit: 'date',
            match: /^(It|This)/,
            parse: function (matchResult) {
              var word = matchResult[1]

              if (word === 'It') {
                return 7
              } else {
                return 6
              }
            }
          },

          efg: {
            unit: 'month',
            match: /^(works|doesn't work)/,
            parse: function (matchResult) {
              var word = matchResult[1]

              if (word === 'works') {
                return 3
              } else {
                return 2
              }
            }
          }
        }

        var parsingTokensRegExp = /(\[[^[]*])|(\\)?(YYYY|abc|efg|.)/g

        var customLocale = {
          parse: {
            parsers: parsers,
            parsingTokensRegExp: parsingTokensRegExp
          }
        }

        var result = parse('2017 It works correctly!', 'YYYY abc efg [correctly!]', baseDate, {locale: customLocale})
        assert.deepEqual(result, new Date(2017, 3, 7))
      })
    })
  })
})
