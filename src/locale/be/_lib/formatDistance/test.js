// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('be locale > formatDistance', function() {
  describe('lessThanXSeconds', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          var result = formatDistance('lessThanXSeconds', 1)
          assert(result === 'менш за секунду')
        })
      })

      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('lessThanXSeconds', number)
            assert(result === 'менш за ' + number + ' секунду')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('lessThanXSeconds', number)
              assert(result === 'менш за ' + number + ' секунды')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('lessThanXSeconds', number)
            assert(result === 'менш за ' + number + ' секунд')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          var result = formatDistance('lessThanXSeconds', 1, {
            addSuffix: true,
            comparison: -1
          })
          assert(result === 'менш за секунду таму')
        })
      })

      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'менш за ' + number + ' секунду таму')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('lessThanXSeconds', number, {
                addSuffix: true,
                comparison: -1
              })
              assert(result === 'менш за ' + number + ' секунды таму')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'менш за ' + number + ' секунд таму')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          var result = formatDistance('lessThanXSeconds', 1, {
            addSuffix: true,
            comparison: 1
          })
          assert(result === 'менш, чым праз секунду')
        })
      })

      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'менш, чым праз ' + number + ' секунду')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('lessThanXSeconds', number, {
                addSuffix: true,
                comparison: 1
              })
              assert(result === 'менш, чым праз ' + number + ' секунды')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'менш, чым праз ' + number + ' секунд')
          })
        })
      })
    })
  })

  describe('xSeconds', function() {
    describe('no suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xSeconds', number)
            assert(result === number + ' секунда')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xSeconds', number)
              assert(result === number + ' секунды')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xSeconds', number)
            assert(result === number + ' секунд')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' секунду таму')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xSeconds', number, {
                addSuffix: true,
                comparison: -1
              })
              assert(result === number + ' секунды таму')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' секунд таму')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'праз ' + number + ' секунду')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xSeconds', number, {
                addSuffix: true,
                comparison: 1
              })
              assert(result === 'праз ' + number + ' секунды')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'праз ' + number + ' секунд')
          })
        })
      })
    })
  })

  describe('halfAMinute', function() {
    it('ignores the second argument', function() {
      var result = formatDistance('halfAMinute', 5)
      assert(result === 'паўхвіліны')
    })

    describe('no suffix', function() {
      it('returns a proper string', function() {
        var result = formatDistance('halfAMinute')
        assert(result === 'паўхвіліны')
      })
    })

    describe('past suffix', function() {
      it('returns a proper string', function() {
        var result = formatDistance('halfAMinute', null, {
          addSuffix: true,
          comparison: -1
        })
        assert(result === 'паўхвіліны таму')
      })
    })

    describe('future suffix', function() {
      it('returns a proper string', function() {
        var result = formatDistance('halfAMinute', null, {
          addSuffix: true,
          comparison: 1
        })
        assert(result === 'праз паўхвіліны')
      })
    })
  })

  describe('lessThanXMinutes', function() {
    describe('no suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          var result = formatDistance('lessThanXMinutes', 1)
          assert(result === 'менш за хвіліну')
        })
      })

      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('lessThanXMinutes', number)
            assert(result === 'менш за ' + number + ' хвіліну')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('lessThanXMinutes', number)
              assert(result === 'менш за ' + number + ' хвіліны')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('lessThanXMinutes', number)
            assert(result === 'менш за ' + number + ' хвілін')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          var result = formatDistance('lessThanXMinutes', 1, {
            addSuffix: true,
            comparison: -1
          })
          assert(result === 'менш за хвіліну таму')
        })
      })

      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'менш за ' + number + ' хвіліну таму')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('lessThanXMinutes', number, {
                addSuffix: true,
                comparison: -1
              })
              assert(result === 'менш за ' + number + ' хвіліны таму')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'менш за ' + number + ' хвілін таму')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count equals 1', function() {
        it('returns a proper string', function() {
          var result = formatDistance('lessThanXMinutes', 1, {
            addSuffix: true,
            comparison: 1
          })
          assert(result === 'менш, чым праз хвіліну')
        })
      })

      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'менш, чым праз ' + number + ' хвіліну')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('lessThanXMinutes', number, {
                addSuffix: true,
                comparison: 1
              })
              assert(result === 'менш, чым праз ' + number + ' хвіліны')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'менш, чым праз ' + number + ' хвілін')
          })
        })
      })
    })
  })

  describe('xMinutes', function() {
    describe('no suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xMinutes', number)
            assert(result === number + ' хвіліна')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xMinutes', number)
              assert(result === number + ' хвіліны')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xMinutes', number)
            assert(result === number + ' хвілін')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' хвіліну таму')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xMinutes', number, {
                addSuffix: true,
                comparison: -1
              })
              assert(result === number + ' хвіліны таму')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' хвілін таму')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'праз ' + number + ' хвіліну')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xMinutes', number, {
                addSuffix: true,
                comparison: 1
              })
              assert(result === 'праз ' + number + ' хвіліны')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'праз ' + number + ' хвілін')
          })
        })
      })
    })
  })

  describe('aboutXHours', function() {
    context('when a remainder from division by 10 is 1 but not 11', function() {
      it('returns a proper string', function() {
        ;[1, 21, 101, 1231].forEach(function(count) {
          var result = formatDistance('aboutXHours', count)
          assert(result === 'каля ' + count + ' гадзіны')
        })
      })
    })

    context('otherwise', function() {
      it('returns a proper string', function() {
        ;[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 102, 1234].forEach(function(
          count
        ) {
          var result = formatDistance('aboutXHours', count)
          assert(result === 'каля ' + count + ' гадзін')
        })
      })
    })
  })

  describe('xHours', function() {
    describe('no suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xHours', number)
            assert(result === number + ' гадзіна')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xHours', number)
              assert(result === number + ' гадзіны')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xHours', number)
            assert(result === number + ' гадзін')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xHours', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' гадзіну таму')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xHours', number, {
                addSuffix: true,
                comparison: -1
              })
              assert(result === number + ' гадзіны таму')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xHours', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' гадзін таму')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xHours', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'праз ' + number + ' гадзіну')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xHours', number, {
                addSuffix: true,
                comparison: 1
              })
              assert(result === 'праз ' + number + ' гадзіны')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xHours', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'праз ' + number + ' гадзін')
          })
        })
      })
    })
  })

  describe('xDays', function() {
    describe('no suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xDays', number)
            assert(result === number + ' дзень')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xDays', number)
              assert(result === number + ' дні')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xDays', number)
            assert(result === number + ' дзён')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xDays', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' дзень таму')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xDays', number, {
                addSuffix: true,
                comparison: -1
              })
              assert(result === number + ' дні таму')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xDays', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' дзён таму')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xDays', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'праз ' + number + ' дзень')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xDays', number, {
                addSuffix: true,
                comparison: 1
              })
              assert(result === 'праз ' + number + ' дні')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xDays', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'праз ' + number + ' дзён')
          })
        })
      })
    })
  })

  describe('aboutXMonths', function() {
    describe('no suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('aboutXMonths', number)
            assert(result === 'каля ' + number + ' месяца')
          })
        })
      })

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(
            function(number) {
              var result = formatDistance('aboutXMonths', number)
              assert(result === 'каля ' + number + ' месяцаў')
            }
          )
        })
      })
    })

    describe('past suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('aboutXMonths', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'каля ' + number + ' месяца таму')
          })
        })
      })

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(
            function(number) {
              var result = formatDistance('aboutXMonths', number, {
                addSuffix: true,
                comparison: -1
              })
              assert(result === 'каля ' + number + ' месяцаў таму')
            }
          )
        })
      })
    })

    describe('future suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('aboutXMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'прыблізна праз ' + number + ' месяц')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('aboutXMonths', number, {
                addSuffix: true,
                comparison: 1
              })
              assert(result === 'прыблізна праз ' + number + ' месяцы')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('aboutXMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'прыблізна праз ' + number + ' месяцаў')
          })
        })
      })
    })
  })

  describe('xMonths', function() {
    describe('no suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xMonths', number)
            assert(result === number + ' месяц')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xMonths', number)
              assert(result === number + ' месяцы')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xMonths', number)
            assert(result === number + ' месяцаў')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xMonths', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' месяц таму')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xMonths', number, {
                addSuffix: true,
                comparison: -1
              })
              assert(result === number + ' месяцы таму')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xMonths', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' месяцаў таму')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'праз ' + number + ' месяц')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xMonths', number, {
                addSuffix: true,
                comparison: 1
              })
              assert(result === 'праз ' + number + ' месяцы')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'праз ' + number + ' месяцаў')
          })
        })
      })
    })
  })

  describe('aboutXYears', function() {
    describe('no suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('aboutXYears', number)
            assert(result === 'каля ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(
            function(number) {
              var result = formatDistance('aboutXYears', number)
              assert(result === 'каля ' + number + ' гадоў')
            }
          )
        })
      })
    })

    describe('past suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('aboutXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'каля ' + number + ' года таму')
          })
        })
      })

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(
            function(number) {
              var result = formatDistance('aboutXYears', number, {
                addSuffix: true,
                comparison: -1
              })
              assert(result === 'каля ' + number + ' гадоў таму')
            }
          )
        })
      })
    })

    describe('future suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('aboutXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'прыблізна праз ' + number + ' год')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('aboutXYears', number, {
                addSuffix: true,
                comparison: 1
              })
              assert(result === 'прыблізна праз ' + number + ' гады')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('aboutXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'прыблізна праз ' + number + ' гадоў')
          })
        })
      })
    })
  })

  describe('xYears', function() {
    describe('no suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xYears', number)
            assert(result === number + ' год')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xYears', number)
              assert(result === number + ' гады')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xYears', number)
            assert(result === number + ' гадоў')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' год таму')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xYears', number, {
                addSuffix: true,
                comparison: -1
              })
              assert(result === number + ' гады таму')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === number + ' гадоў таму')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('xYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'праз ' + number + ' год')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('xYears', number, {
                addSuffix: true,
                comparison: 1
              })
              assert(result === 'праз ' + number + ' гады')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('xYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'праз ' + number + ' гадоў')
          })
        })
      })
    })
  })

  describe('overXYears', function() {
    describe('no suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('overXYears', number)
            assert(result === 'больш за ' + number + ' год')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('overXYears', number)
              assert(result === 'больш за ' + number + ' гады')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('overXYears', number)
            assert(result === 'больш за ' + number + ' гадоў')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('overXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'больш за ' + number + ' год таму')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('overXYears', number, {
                addSuffix: true,
                comparison: -1
              })
              assert(result === 'больш за ' + number + ' гады таму')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('overXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'больш за ' + number + ' гадоў таму')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('overXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'больш, чым праз ' + number + ' год')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('overXYears', number, {
                addSuffix: true,
                comparison: 1
              })
              assert(result === 'больш, чым праз ' + number + ' гады')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('overXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'больш, чым праз ' + number + ' гадоў')
          })
        })
      })
    })
  })

  describe('almostXYears', function() {
    describe('no suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('almostXYears', number)
            assert(result === 'амаль ' + number + ' год')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('almostXYears', number)
              assert(result === 'амаль ' + number + ' гады')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('almostXYears', number)
            assert(result === 'амаль ' + number + ' гадоў')
          })
        })
      })
    })

    describe('past suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('almostXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'амаль ' + number + ' год таму')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('almostXYears', number, {
                addSuffix: true,
                comparison: -1
              })
              assert(result === 'амаль ' + number + ' гады таму')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('almostXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            assert(result === 'амаль ' + number + ' гадоў таму')
          })
        })
      })
    })

    describe('future suffix', function() {
      context('when the count ends with 1 but not with 11', function() {
        it('returns a proper string', function() {
          ;[1, 21, 31, 301, 321].forEach(function(number) {
            var result = formatDistance('almostXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'амаль праз ' + number + ' год')
          })
        })
      })

      context(
        'when the count ends with 2, 3 or 4 but not with 12, 13 or 14',
        function() {
          it('returns a proper string', function() {
            ;[2, 3, 4, 22, 23, 302].forEach(function(number) {
              var result = formatDistance('almostXYears', number, {
                addSuffix: true,
                comparison: 1
              })
              assert(result === 'амаль праз ' + number + ' гады')
            })
          })
        }
      )

      context('when the count is any other number', function() {
        it('returns a proper string', function() {
          ;[5, 6, 10, 11, 12, 100, 311, 1000].forEach(function(number) {
            var result = formatDistance('almostXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            assert(result === 'амаль праз ' + number + ' гадоў')
          })
        })
      })
    })
  })
})
