/* eslint-env mocha */

import path from 'path'
import assert from 'power-assert'
import Chance from 'chance'
import format from '../../src/format'
import parse from '../../src/parse'

import listLocales from '../../scripts/_lib/listLocales'

const chance = new Chance(42)

listLocales().forEach(({ name, code }) => {
  ;['P', 'PP', 'PPP', 'PPPP'].forEach(formatString => {
    describe(`${name}, ${formatString} format`, () => {
      chance.n(chance.date, 10).forEach(date => {
        it(`parse(format(${date.toLocaleDateString()})) = ${date.toLocaleDateString()}`, () => {
          const locale = require(path.join('..', '..', 'src', 'locale', code))
          const formattedDate = format(date, formatString, { locale })

          const parsedDate = parse(formattedDate, formatString, date, {
            locale
          })

          assert.deepEqual(
            parsedDate.toLocaleDateString(),
            date.toLocaleDateString()
          )
        })
      })
    })
  })
})
