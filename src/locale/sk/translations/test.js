var assert = require('power-assert')
var translations = require('./')

describe('sk translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec'],
      MMMM: ['január', 'február', 'marec', 'apríl', 'máj', 'jún', 'júl', 'august', 'september', 'október', 'november', 'december'],
      dd: ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so'],
      ddd: ['neď', 'pon', 'uto', 'str', 'štv', 'pia', 'sob'],
      dddd: ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota'],
      A: ['AM', 'PM'],
      a: ['am', 'pm'],
      aa: ['a.m.', 'p.m.']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
