// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('ru locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = formatDistance('lessThanXSeconds', 1)
          assert(result === 'меньше секунды')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number)
            assert(result === 'меньше ' + number + ' секунды')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number)
            assert(result === 'меньше ' + number + ' секунд')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = formatDistance('lessThanXSeconds', 1, {
            addSuffix: true,
            comparison: -1
          })
          assert(result === 'меньше секунды назад')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'меньше ' + number + ' секунды назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'меньше ' + number + ' секунд назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = formatDistance('lessThanXSeconds', 1, {
            addSuffix: true,
            comparison: 1
          })
          assert(result === 'меньше, чем через секунду')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'меньше, чем через ' + number + ' секунду')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'меньше, чем через ' + number + ' секунды')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'меньше, чем через ' + number + ' секунд')
          })
        })
      })
    })
  })

  describe('xSeconds', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xSeconds', number)
            assert(result === number + ' секунда')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xSeconds', number)
            assert(result === number + ' секунды')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xSeconds', number)
            assert(result === number + ' секунд')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' секунду назад')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' секунды назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' секунд назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' секунду')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' секунды')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' секунд')
          })
        })
      })
    })
  })

  describe('halfAMinute', function () {
    it('ignores the second argument', function () {
      var result = formatDistance('halfAMinute', 5)
      assert(result === 'полминуты')
    })

    describe('no suffix', function () {
      it('returns a proper string', function () {
        var result = formatDistance('halfAMinute')
        assert(result === 'полминуты')
      })
    })

    describe('past suffix', function () {
      it('returns a proper string', function () {
        var result = formatDistance('halfAMinute', null, {
          addSuffix: true,
          comparison: -1
        })
        assert(result === 'полминуты назад')
      })
    })

    describe('future suffix', function () {
      it('returns a proper string', function () {
        var result = formatDistance('halfAMinute', null, {
          addSuffix: true,
          comparison: 1
        })
        assert(result === 'через полминуты')
      })
    })
  })

  describe('lessThanXMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = formatDistance('lessThanXMinutes', 1)
          assert(result === 'меньше минуты')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number)
            assert(result === 'меньше ' + number + ' минуты')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number)
            assert(result === 'меньше ' + number + ' минут')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = formatDistance('lessThanXMinutes', 1, {
            addSuffix: true,
            comparison: -1
          })
          assert(result === 'меньше минуты назад')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'меньше ' + number + ' минуты назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'меньше ' + number + ' минут назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = formatDistance('lessThanXMinutes', 1, {
            addSuffix: true,
            comparison: 1
          })
          assert(result === 'меньше, чем через минуту')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'меньше, чем через ' + number + ' минуту')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'меньше, чем через ' + number + ' минуты')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'меньше, чем через ' + number + ' минут')
          })
        })
      })
    })
  })

  describe('xMinutes', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xMinutes', number)
            assert(result === number + ' минута')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xMinutes', number)
            assert(result === number + ' минуты')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xMinutes', number)
            assert(result === number + ' минут')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' минуту назад')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' минуты назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' минут назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' минуту')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' минуты')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' минут')
          })
        })
      })
    })
  })

  describe('aboutXHours', function () {
    context('when a remainder from division by 10 is 1 but not 11', function () {
      it('returns a proper string', function () {
        [1, 21, 101, 1231].forEach(function (count) {
          var result = formatDistance('aboutXHours', count)
          assert(result === 'около ' + count + ' часа')
        })
      })
    })

    context('otherwise', function () {
      it('returns a proper string', function () {
        [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 102, 1234].forEach(function (count) {
          var result = formatDistance('aboutXHours', count)
          assert(result === 'около ' + count + ' часов')
        })
      })
    })
  })

  describe('xHours', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xHours', number)
            assert(result === number + ' час')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xHours', number)
            assert(result === number + ' часа')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xHours', number)
            assert(result === number + ' часов')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xHours', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' час назад')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xHours', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' часа назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xHours', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' часов назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xHours', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' час')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xHours', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' часа')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xHours', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' часов')
          })
        })
      })
    })
  })

  describe('xDays', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xDays', number)
            assert(result === number + ' день')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xDays', number)
            assert(result === number + ' дня')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xDays', number)
            assert(result === number + ' дней')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xDays', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' день назад')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xDays', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' дня назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xDays', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' дней назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xDays', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' день')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xDays', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' дня')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xDays', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' дней')
          })
        })
      })
    })
  })

  describe('aboutXMonths', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('aboutXMonths', number)
            assert(result === 'около ' + number + ' месяца')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = formatDistance('aboutXMonths', number)
            assert(result === 'около ' + number + ' месяцев')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('aboutXMonths', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'около ' + number + ' месяца назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = formatDistance('aboutXMonths', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'около ' + number + ' месяцев назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('aboutXMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'приблизительно через ' + number + ' месяц')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('aboutXMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'приблизительно через ' + number + ' месяца')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('aboutXMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'приблизительно через ' + number + ' месяцев')
          })
        })
      })
    })
  })

  describe('xMonths', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xMonths', number)
            assert(result === number + ' месяц')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xMonths', number)
            assert(result === number + ' месяца')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xMonths', number)
            assert(result === number + ' месяцев')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xMonths', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' месяц назад')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xMonths', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' месяца назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xMonths', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' месяцев назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' месяц')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' месяца')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' месяцев')
          })
        })
      })
    })
  })

  describe('aboutXYears', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('aboutXYears', number)
            assert(result === 'около ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = formatDistance('aboutXYears', number)
            assert(result === 'около ' + number + ' лет')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('aboutXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'около ' + number + ' года назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = formatDistance('aboutXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'около ' + number + ' лет назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('aboutXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'приблизительно через ' + number + ' год')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('aboutXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'приблизительно через ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('aboutXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'приблизительно через ' + number + ' лет')
          })
        })
      })
    })
  })

  describe('xYears', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xYears', number)
            assert(result === number + ' год')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xYears', number)
            assert(result === number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xYears', number)
            assert(result === number + ' лет')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' год назад')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' года назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' лет назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('xYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' год')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'через ' + number + ' лет')
          })
        })
      })
    })
  })

  describe('overXYears', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('overXYears', number)
            assert(result === 'больше ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = formatDistance('overXYears', number)
            assert(result === 'больше ' + number + ' лет')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('overXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'больше ' + number + ' года назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = formatDistance('overXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'больше ' + number + ' лет назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('overXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'больше, чем через ' + number + ' год')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('overXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'больше, чем через ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('overXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'больше, чем через ' + number + ' лет')
          })
        })
      })
    })
  })

  describe('almostXYears', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('almostXYears', number)
            assert(result === 'почти ' + number + ' год')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('almostXYears', number)
            assert(result === 'почти ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('almostXYears', number)
            assert(result === 'почти ' + number + ' лет')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('almostXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'почти ' + number + ' год назад')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('almostXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'почти ' + number + ' года назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('almostXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'почти ' + number + ' лет назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('almostXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'почти через ' + number + ' год')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('almostXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'почти через ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('almostXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'почти через ' + number + ' лет')
          })
        })
      })
    })
  })
})
