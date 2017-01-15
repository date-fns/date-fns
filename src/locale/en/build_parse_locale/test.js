// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import buildParseLocale from './'

describe('en locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(typeof buildParseLocale() === 'object')
  })

  describe('units property', function () {
    it('is an object', function () {
      assert(typeof buildParseLocale().units === 'object')
    })

    describe('meridiem', function () {
      it('has priority between 60 and 70', function () {
        var priority = buildParseLocale().units.meridiem.priority
        assert(priority > 60)
        assert(priority < 70)
      })

      it('sets a.m. to date', function () {
        var date = new Date(2016, 10 /* Nov */, 25, 5, 30)
        var result = buildParseLocale().units.meridiem.set(date, 0)
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 5, 30))
      })

      it('sets 12 a.m.', function () {
        var date = new Date(2016, 10 /* Nov */, 25, 12, 30)
        var result = buildParseLocale().units.meridiem.set(date, 0)
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 0, 30))
      })

      it('sets p.m. to date', function () {
        var date = new Date(2016, 10 /* Nov */, 25, 5, 30)
        var result = buildParseLocale().units.meridiem.set(date, 1)
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 17, 30))
      })

      it('sets 12 p.m.', function () {
        var date = new Date(2016, 10 /* Nov */, 25, 12, 30)
        var result = buildParseLocale().units.meridiem.set(date, 1)
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 12, 30))
      })
    })
  })

  describe('parsers property', function () {
    it('is an object', function () {
      assert(typeof buildParseLocale().parsers === 'object')
    })

    describe('MMM', function () {
      it('parses `Jan` to 0', function () {
        var parser = buildParseLocale().parsers.MMM
        var inputString = 'Jan rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 0)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Feb` to 1', function () {
        var parser = buildParseLocale().parsers.MMM
        var inputString = 'Feb rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 1)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Mar` to 2', function () {
        var parser = buildParseLocale().parsers.MMM
        var inputString = 'Mar rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 2)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Apr` to 3', function () {
        var parser = buildParseLocale().parsers.MMM
        var inputString = 'Apr rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 3)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `May` to 4', function () {
        var parser = buildParseLocale().parsers.MMM
        var inputString = 'May rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 4)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Jun` to 5', function () {
        var parser = buildParseLocale().parsers.MMM
        var inputString = 'Jun rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 5)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Jul` to 6', function () {
        var parser = buildParseLocale().parsers.MMM
        var inputString = 'Jul rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 6)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Aug` to 7', function () {
        var parser = buildParseLocale().parsers.MMM
        var inputString = 'Aug rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 7)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Sep` to 8', function () {
        var parser = buildParseLocale().parsers.MMM
        var inputString = 'Sep rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 8)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Oct` to 9', function () {
        var parser = buildParseLocale().parsers.MMM
        var inputString = 'Oct rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 9)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Nov` to 10', function () {
        var parser = buildParseLocale().parsers.MMM
        var inputString = 'Nov rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 10)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Dec` to 11', function () {
        var parser = buildParseLocale().parsers.MMM
        var inputString = 'Dec rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 11)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })
    })

    describe('MMMM', function () {
      it('parses `January` to 0', function () {
        var parser = buildParseLocale().parsers.MMMM
        var inputString = 'January rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 0)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `February` to 1', function () {
        var parser = buildParseLocale().parsers.MMMM
        var inputString = 'February rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 1)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `March` to 2', function () {
        var parser = buildParseLocale().parsers.MMMM
        var inputString = 'March rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 2)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `April` to 3', function () {
        var parser = buildParseLocale().parsers.MMMM
        var inputString = 'April rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 3)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `May` to 4', function () {
        var parser = buildParseLocale().parsers.MMMM
        var inputString = 'May rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 4)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `June` to 5', function () {
        var parser = buildParseLocale().parsers.MMMM
        var inputString = 'June rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 5)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `July` to 6', function () {
        var parser = buildParseLocale().parsers.MMMM
        var inputString = 'July rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 6)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `August` to 7', function () {
        var parser = buildParseLocale().parsers.MMMM
        var inputString = 'August rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 7)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `September` to 8', function () {
        var parser = buildParseLocale().parsers.MMMM
        var inputString = 'September rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 8)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `October` to 9', function () {
        var parser = buildParseLocale().parsers.MMMM
        var inputString = 'October rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 9)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `November` to 10', function () {
        var parser = buildParseLocale().parsers.MMMM
        var inputString = 'November rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 10)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `December` to 11', function () {
        var parser = buildParseLocale().parsers.MMMM
        var inputString = 'December rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 11)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })
    })

    describe('dd', function () {
      it('parses `Su` to 0', function () {
        var parser = buildParseLocale().parsers.dd
        var inputString = 'Su rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 0)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Mo` to 1', function () {
        var parser = buildParseLocale().parsers.dd
        var inputString = 'Mo rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 1)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Tu` to 2', function () {
        var parser = buildParseLocale().parsers.dd
        var inputString = 'Tu rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 2)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `We` to 3', function () {
        var parser = buildParseLocale().parsers.dd
        var inputString = 'We rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 3)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Th` to 4', function () {
        var parser = buildParseLocale().parsers.dd
        var inputString = 'Th rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 4)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Fr` to 5', function () {
        var parser = buildParseLocale().parsers.dd
        var inputString = 'Fr rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 5)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Sa` to 6', function () {
        var parser = buildParseLocale().parsers.dd
        var inputString = 'Sa rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 6)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })
    })

    describe('ddd', function () {
      it('parses `Sun` to 0', function () {
        var parser = buildParseLocale().parsers.ddd
        var inputString = 'Sun rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 0)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Mon` to 1', function () {
        var parser = buildParseLocale().parsers.ddd
        var inputString = 'Mon rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 1)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Tue` to 2', function () {
        var parser = buildParseLocale().parsers.ddd
        var inputString = 'Tue rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 2)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Wed` to 3', function () {
        var parser = buildParseLocale().parsers.ddd
        var inputString = 'Wed rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 3)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Thu` to 4', function () {
        var parser = buildParseLocale().parsers.ddd
        var inputString = 'Thu rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 4)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Fri` to 5', function () {
        var parser = buildParseLocale().parsers.ddd
        var inputString = 'Fri rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 5)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Sat` to 6', function () {
        var parser = buildParseLocale().parsers.ddd
        var inputString = 'Sat rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 6)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })
    })

    describe('dddd', function () {
      it('parses `Sunday` to 0', function () {
        var parser = buildParseLocale().parsers.dddd
        var inputString = 'Sunday rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 0)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Monday` to 1', function () {
        var parser = buildParseLocale().parsers.dddd
        var inputString = 'Monday rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 1)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Tuesday` to 2', function () {
        var parser = buildParseLocale().parsers.dddd
        var inputString = 'Tuesday rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 2)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Wednesday` to 3', function () {
        var parser = buildParseLocale().parsers.dddd
        var inputString = 'Wednesday rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 3)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Thursday` to 4', function () {
        var parser = buildParseLocale().parsers.dddd
        var inputString = 'Thursday rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 4)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Friday` to 5', function () {
        var parser = buildParseLocale().parsers.dddd
        var inputString = 'Friday rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 5)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `Saturday` to 6', function () {
        var parser = buildParseLocale().parsers.dddd
        var inputString = 'Saturday rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 6)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })
    })

    describe('A', function () {
      it('parses `AM` to 0', function () {
        var parser = buildParseLocale().parsers.A
        var inputString = 'AM rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 0)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `PM` to 1', function () {
        var parser = buildParseLocale().parsers.A
        var inputString = 'PM rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 1)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })
    })

    describe('a', function () {
      it('parses `am` to 0', function () {
        var parser = buildParseLocale().parsers.a
        var inputString = 'am rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 0)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `pm` to 1', function () {
        var parser = buildParseLocale().parsers.a
        var inputString = 'pm rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 1)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })
    })

    describe('aa', function () {
      it('parses `a.m.` to 0', function () {
        var parser = buildParseLocale().parsers.aa
        var inputString = 'a.m. rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 0)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses `p.m.` to 1', function () {
        var parser = buildParseLocale().parsers.aa
        var inputString = 'p.m. rest of string'
        var matchResult = parser.match.exec(inputString)
        var result = parser.parse(matchResult)
        assert(result === 1)

        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })
    })

    describe('Qo', function () {
      it('cuts only ordinal number from string', function () {
        var parser = buildParseLocale().parsers.Qo
        var inputString = '1234567890th rest of string'
        var matchResult = parser.match.exec(inputString)
        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses ordinal numbers correctly', function () {
        var parser = buildParseLocale().parsers.Qo

        var inputStrings = ['0th', '1st', '2nd', '3rd', '4th', '10th', '11th', '100th']
        var expectedResults = [0, 1, 2, 3, 4, 10, 11, 100]
        var results = []

        var length = inputStrings.length
        for (var i = 0; i < length; i++) {
          var matchResult = parser.match.exec(inputStrings[i])
          var result = parser.parse(matchResult)
          results.push(result)
        }

        assert.deepEqual(results, expectedResults)
      })
    })

    describe('Mo', function () {
      it('cuts only ordinal number from string', function () {
        var parser = buildParseLocale().parsers.Mo
        var inputString = '1234567890th rest of string'
        var matchResult = parser.match.exec(inputString)
        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses ordinal numbers correctly', function () {
        var parser = buildParseLocale().parsers.Mo

        var inputStrings = ['0th', '1st', '2nd', '3rd', '4th', '10th', '11th', '100th']
        // In JavaScript January is 0, but `parse` considers January to be the 1st month
        var expectedResults = [-1, 0, 1, 2, 3, 9, 10, 99]
        var results = []

        var length = inputStrings.length
        for (var i = 0; i < length; i++) {
          var matchResult = parser.match.exec(inputStrings[i])
          var result = parser.parse(matchResult)
          results.push(result)
        }

        assert.deepEqual(results, expectedResults)
      })
    })

    describe('Wo', function () {
      it('cuts only ordinal number from string', function () {
        var parser = buildParseLocale().parsers.Wo
        var inputString = '1234567890th rest of string'
        var matchResult = parser.match.exec(inputString)
        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses ordinal numbers correctly', function () {
        var parser = buildParseLocale().parsers.Wo

        var inputStrings = ['0th', '1st', '2nd', '3rd', '4th', '10th', '11th', '100th']
        var expectedResults = [0, 1, 2, 3, 4, 10, 11, 100]
        var results = []

        var length = inputStrings.length
        for (var i = 0; i < length; i++) {
          var matchResult = parser.match.exec(inputStrings[i])
          var result = parser.parse(matchResult)
          results.push(result)
        }

        assert.deepEqual(results, expectedResults)
      })
    })

    describe('do', function () {
      it('cuts only ordinal number from string', function () {
        var parser = buildParseLocale().parsers.do
        var inputString = '1234567890th rest of string'
        var matchResult = parser.match.exec(inputString)
        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses ordinal numbers correctly', function () {
        var parser = buildParseLocale().parsers.do

        var inputStrings = ['0th', '1st', '2nd', '3rd', '4th', '10th', '11th', '100th']
        var expectedResults = [0, 1, 2, 3, 4, 10, 11, 100]
        var results = []

        var length = inputStrings.length
        for (var i = 0; i < length; i++) {
          var matchResult = parser.match.exec(inputStrings[i])
          var result = parser.parse(matchResult)
          results.push(result)
        }

        assert.deepEqual(results, expectedResults)
      })
    })

    describe('Do', function () {
      it('cuts only ordinal number from string', function () {
        var parser = buildParseLocale().parsers.Do
        var inputString = '1234567890th rest of string'
        var matchResult = parser.match.exec(inputString)
        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses ordinal numbers correctly', function () {
        var parser = buildParseLocale().parsers.Do

        var inputStrings = ['0th', '1st', '2nd', '3rd', '4th', '10th', '11th', '100th']
        var expectedResults = [0, 1, 2, 3, 4, 10, 11, 100]
        var results = []

        var length = inputStrings.length
        for (var i = 0; i < length; i++) {
          var matchResult = parser.match.exec(inputStrings[i])
          var result = parser.parse(matchResult)
          results.push(result)
        }

        assert.deepEqual(results, expectedResults)
      })
    })

    describe('DDDo', function () {
      it('cuts only ordinal number from string', function () {
        var parser = buildParseLocale().parsers.DDDo
        var inputString = '1234567890th rest of string'
        var matchResult = parser.match.exec(inputString)
        var restOfString = inputString.slice(matchResult[0].length)
        assert(restOfString === ' rest of string')
      })

      it('parses ordinal numbers correctly', function () {
        var parser = buildParseLocale().parsers.DDDo

        var inputStrings = ['0th', '1st', '2nd', '3rd', '4th', '10th', '11th', '100th']
        var expectedResults = [0, 1, 2, 3, 4, 10, 11, 100]
        var results = []

        var length = inputStrings.length
        for (var i = 0; i < length; i++) {
          var matchResult = parser.match.exec(inputStrings[i])
          var result = parser.parse(matchResult)
          results.push(result)
        }

        assert.deepEqual(results, expectedResults)
      })
    })
  })

  describe('parsingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildParseLocale().parsingTokensRegExp instanceof RegExp)
    })
  })
})
