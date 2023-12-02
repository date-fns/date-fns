'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const myTextArea = document.getElementById('editor')
  const codeMirrorInstance = CodeMirror.fromTextArea(myTextArea, {
    readOnly: true,
    lineNumbers: true,
    lineWrapping: false,
    mode: 'text/typescript',
    gutters: ['TS-lineuncovered', 'CodeMirror-linenumbers'],
  })
  const annotations = JSON.parse(
    document.getElementById('annotations').textContent
  )
  const gutters = {}

  annotations.forEach((annotation) => {
    gutters[annotation.line] = (gutters[annotation.line] || 0) + 1
    codeMirrorInstance.markText(
      { line: annotation.line, ch: annotation.character },
      {
        line: annotation.line,
        ch: annotation.character + annotation.text.length,
      },
      {
        className: 'uncovered',
      }
    )
  })

  Object.entries(gutters).forEach(([line, count]) => {
    const gutterMarker = document.createElement('div')

    gutterMarker.textContent = count + 'x'
    gutterMarker.classList.add('gutter-marker')
    gutterMarker.style.background = 'rgba(255,0,0,' + count * 0.2 + ')'

    codeMirrorInstance.setGutterMarker(+line, 'TS-lineuncovered', gutterMarker)
  })
})
