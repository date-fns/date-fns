// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('uk locale > formatDistance', function () {
  describe('lessThanXSeconds', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = formatDistance('lessThanXSeconds', 1)
          assert(result === 'менше секунди')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number)
            assert(result === 'менше ' + number + ' секунди')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number)
            assert(result === 'менше ' + number + ' секунд')
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
          assert(result === 'менше секунди тому')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'менше ' + number + ' секунди тому')
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
            assert(result === 'менше ' + number + ' секунд тому')
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
          assert(result === 'менше, ніж за секунду')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'менше, ніж за ' + number + ' секунду')
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
            assert(result === 'менше, ніж за ' + number + ' секунди')
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
            assert(result === 'менше, ніж за ' + number + ' секунд')
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
            assert(result === number + ' секунди')
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
            assert(result === number + ' секунду тому')
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
            assert(result === number + ' секунди тому')
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
            assert(result === number + ' секунд тому')
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
            assert(result === 'за ' + number + ' секунду')
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
            assert(result === 'за ' + number + ' секунди')
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
            assert(result === 'за ' + number + ' секунд')
          })
        })
      })
    })
  })

  describe('halfAMinute', function () {
    it('ignores the second argument', function () {
      var result = formatDistance('halfAMinute', 5)
      assert(result === 'півхвилини')
    })

    describe('no suffix', function () {
      it('returns a proper string', function () {
        var result = formatDistance('halfAMinute')
        assert(result === 'півхвилини')
      })
    })

    describe('past suffix', function () {
      it('returns a proper string', function () {
        var result = formatDistance('halfAMinute', null, {
          addSuffix: true,
          comparison: -1
        })
        assert(result === 'півхвилини тому')
      })
    })

    describe('future suffix', function () {
      it('returns a proper string', function () {
        var result = formatDistance('halfAMinute', null, {
          addSuffix: true,
          comparison: 1
        })
        assert(result === 'за півхвилини')
      })
    })
  })

  describe('lessThanXMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = formatDistance('lessThanXMinutes', 1)
          assert(result === 'менше хвилини')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number)
            assert(result === 'менше ' + number + ' хвилини')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number)
            assert(result === 'менше ' + number + ' хвилин')
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
          assert(result === 'менше хвилини тому')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'менше ' + number + ' хвилини тому')
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
            assert(result === 'менше ' + number + ' хвилин тому')
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
          assert(result === 'менше, ніж за хвилину')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = formatDistance('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'менше, ніж за ' + number + ' хвилину')
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
            assert(result === 'менше, ніж за ' + number + ' хвилини')
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
            assert(result === 'менше, ніж за ' + number + ' хвилин')
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
            assert(result === number + ' хвилина')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xMinutes', number)
            assert(result === number + ' хвилини')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xMinutes', number)
            assert(result === number + ' хвилин')
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
            assert(result === number + ' хвилину тому')
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
            assert(result === number + ' хвилини тому')
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
            assert(result === number + ' хвилин тому')
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
            assert(result === 'за ' + number + ' хвилину')
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
            assert(result === 'за ' + number + ' хвилини')
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
            assert(result === 'за ' + number + ' хвилин')
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
          assert(result === 'близько ' + count + ' години')
        })
      })
    })

    context('otherwise', function () {
      it('returns a proper string', function () {
        [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 102, 1234].forEach(function (count) {
          var result = formatDistance('aboutXHours', count)
          assert(result === 'близько ' + count + ' годин')
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
            assert(result === number + ' годину')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xHours', number)
            assert(result === number + ' години')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xHours', number)
            assert(result === number + ' годин')
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
            assert(result === number + ' годину тому')
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
            assert(result === number + ' години тому')
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
            assert(result === number + ' годин тому')
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
            assert(result === 'за ' + number + ' годину')
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
            assert(result === 'за ' + number + ' години')
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
            assert(result === 'за ' + number + ' годин')
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
            assert(result === number + ' днів')
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
            assert(result === number + ' день тому')
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
            assert(result === number + ' дня тому')
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
            assert(result === number + ' днів тому')
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
            assert(result === 'за ' + number + ' день')
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
            assert(result === 'за ' + number + ' дня')
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
            assert(result === 'за ' + number + ' днів')
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
            assert(result === 'близько ' + number + ' місяця')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = formatDistance('aboutXMonths', number)
            assert(result === 'близько ' + number + ' місяців')
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
            assert(result === 'близько ' + number + ' місяця тому')
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
            assert(result === 'близько ' + number + ' місяців тому')
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
            assert(result === 'приблизно за ' + number + ' місяць')
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
            assert(result === 'приблизно за ' + number + ' місяця')
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
            assert(result === 'приблизно за ' + number + ' місяців')
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
            assert(result === number + ' місяць')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xMonths', number)
            assert(result === number + ' місяця')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xMonths', number)
            assert(result === number + ' місяців')
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
            assert(result === number + ' місяць тому')
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
            assert(result === number + ' місяця тому')
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
            assert(result === number + ' місяців тому')
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
            assert(result === 'за ' + number + ' місяць')
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
            assert(result === 'за ' + number + ' місяця')
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
            assert(result === 'за ' + number + ' місяців')
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
            assert(result === 'близько ' + number + ' року')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = formatDistance('aboutXYears', number)
            assert(result === 'близько ' + number + ' років')
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
            assert(result === 'близько ' + number + ' року тому')
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
            assert(result === 'близько ' + number + ' років тому')
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
            assert(result === 'приблизно за ' + number + ' рік')
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
            assert(result === 'приблизно за ' + number + ' роки')
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
            assert(result === 'приблизно за ' + number + ' років')
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
            assert(result === number + ' рік')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('xYears', number)
            assert(result === number + ' роки')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('xYears', number)
            assert(result === number + ' років')
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
            assert(result === number + ' рік тому')
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
            assert(result === number + ' роки тому')
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
            assert(result === number + ' років тому')
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
            assert(result === 'за ' + number + ' рік')
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
            assert(result === 'за ' + number + ' роки')
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
            assert(result === 'за ' + number + ' років')
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
            assert(result === 'більше ' + number + ' року')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = formatDistance('overXYears', number)
            assert(result === 'більше ' + number + ' років')
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
            assert(result === 'більше ' + number + ' року тому')
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
            assert(result === 'більше ' + number + ' років тому')
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
            assert(result === 'більше, ніж за ' + number + ' рік')
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
            assert(result === 'більше, ніж за ' + number + ' роки')
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
            assert(result === 'більше, ніж за ' + number + ' років')
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
            assert(result === 'майже ' + number + ' рік')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = formatDistance('almostXYears', number)
            assert(result === 'майже ' + number + ' роки')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = formatDistance('almostXYears', number)
            assert(result === 'майже ' + number + ' років')
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
            assert(result === 'майже ' + number + ' рік тому')
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
            assert(result === 'майже ' + number + ' роки тому')
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
            assert(result === 'майже ' + number + ' років тому')
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
            assert(result === 'майже за ' + number + ' рік')
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
            assert(result === 'майже за ' + number + ' роки')
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
            assert(result === 'майже за ' + number + ' років')
          })
        })
      })
    })
  })
})
