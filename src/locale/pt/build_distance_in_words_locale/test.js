// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import buildDistanceInWordsLocale from './'

describe('pt locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    assert(typeof buildDistanceInWordsLocale() === 'object')
  })

  it('localize property is a function', function () {
    assert(typeof buildDistanceInWordsLocale().localize === 'function')
  })

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 1) === 'menos de um segundo')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 2) === 'menos de 2 segundos')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xSeconds', 1) === '1 segundo')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xSeconds', 2) === '2 segundos')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(buildDistanceInWordsLocale().localize('halfAMinute') === 'meio minuto')
    })

    it('ignores the second argument', function () {
      assert(buildDistanceInWordsLocale().localize('halfAMinute', 123) === 'meio minuto')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 1) === 'menos de um minuto')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 2) === 'menos de 2 minutos')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMinutes', 1) === '1 minuto')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMinutes', 2) === '2 minutos')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXHours', 1) === 'aproximadamente 1 hora')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXHours', 2) === 'aproximadamente 2 horas')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xHours', 1) === '1 hora')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xHours', 2) === '2 horas')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xDays', 1) === '1 dia')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xDays', 2) === '2 dias')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXMonths', 1) === 'aproximadamente 1 mês')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXMonths', 2) === 'aproximadamente 2 meses')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMonths', 1) === '1 mês')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMonths', 2) === '2 meses')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXYears', 1) === 'aproximadamente 1 ano')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXYears', 2) === 'aproximadamente 2 anos')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xYears', 1) === '1 ano')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xYears', 2) === '2 anos')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('overXYears', 1) === 'mais de 1 ano')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('overXYears', 2) === 'mais de 2 anos')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('almostXYears', 1) === 'quase 1 ano')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('almostXYears', 2) === 'quase 2 anos')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = buildDistanceInWordsLocale().localize('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'há aproximadamente 1 ano')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = buildDistanceInWordsLocale().localize('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'daqui a meio minuto')
    })
  })
})
