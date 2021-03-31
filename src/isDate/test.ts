// @flow
/* eslint-env mocha */
/* global HTMLIFrameElement */

import assert from 'power-assert'
import isDate from '.'

describe('isDate', function () {
  it('returns true if the given value is a date object', function () {
    assert(isDate(new Date()))
  })

  it('returns true if the given value is an Invalid Date', function () {
    assert(isDate(new Date(NaN)))
  })

  describe('with date passed from another iframe', function () {
    afterEach(function () {
      const iframe = document.getElementById('iframe')
      iframe && iframe.remove()
    })

    // jsdom is sad
    if (!process.env.JEST_WORKER_ID) {
      it('returns true for a date passed from another iframe', function (done) {
        const iframe = document.createElement('iframe')
        iframe.id = 'iframe'
        iframe.addEventListener('load', function () {
          execScript('window.date = new Date()') // eslint-disable-line no-implied-eval
          assert(isDate(iframe.contentWindow.date))
          // $ExpectedMistake sadly, but Flow doesn't know about Mocha's done
          done()
        })
        if (!document.body) throw new Error('document.body is not defined')
        document.body.appendChild(iframe)
      })
    }

    function execScript(scriptText) {
      const iframe = document.querySelector('iframe#iframe')
      if (!iframe || !(iframe instanceof HTMLIFrameElement)) {
        throw new Error("Can't execute the script because iframe isn't found")
      }
      const doc = iframe.contentDocument
      const script = doc.createElement('script')
      script.innerText = scriptText
      if (!(doc.body instanceof iframe.contentWindow.HTMLBodyElement)) {
        throw new Error(
          "Can't execute the script because iframe does not have body"
        )
      }
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
