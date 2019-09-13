/* eslint-env mocha */

import path from 'path'
import assert from 'power-assert'
import Chance from 'chance'
import format from '../../src/format'
import parse from '../../src/parse'

import listLocales from '../../scripts/_lib/listLocales'

const chance = new Chance(42)

listLocales().forEach(({ name, code }) => {
  describe(`${name}`, () => {
    chance.n(chance.date, 10).forEach(date => {
      it(`parse(format(${date.toISOString()})) = ${date.toISOString()}`, () => {
        const locale = require(path.join('..', '..', 'src', 'locale', code))
        const formattedDate = format(
          date,
          locale.formatLong.date({ width: 'long' }),
          { locale }
        )

        const parsedDate = parse(formattedDate, 'PPP', date, { locale })

        assert.deepEqual(
          parsedDate.toLocaleDateString(),
          date.toLocaleDateString()
        )
      })
    })
  })
})
