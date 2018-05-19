// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isDate from '.'

describe('isDate', function () {
  it('returns true if the given value is a date object', function () {
    assert(isDate(new Date()))
  })

  context('with date passed from another iframe', function () {
    afterEach(function () {
      document.getElementById('iframe').remove()
    })

    it('returns true for a date passed from another iframe', function (done) {
      const iframe = document.createElement('iframe')
      iframe.id = 'iframe'
      iframe.addEventListener('load', function () {
        execScript('window.date = new Date()') // eslint-disable-line no-implied-eval
        assert(isDate(iframe.contentWindow.date))
        done()
      })
      document.body.appendChild(iframe)
    })

    function execScript (scriptText) {
      const iframe = document.getElementById('iframe')
      const doc = iframe.contentDocument
      const script = doc.createElement('script')
      script.innerText = scriptText
      doc.body.append(script)
    }
  })

  it('returns false if the given value is not a date object', function () {
    assert(!isDate(new Date().getTime()))
    assert(!isDate(new Date().toISOString()))
    assert(!isDate({}))
    assert(!isDate(null))
    assert(!isDate(0))
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(isDate.bind(null), TypeError)
  })
})
