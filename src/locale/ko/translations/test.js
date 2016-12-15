var assert = require('power-assert')
var translations = require('./')

describe('ko translations', function () {
  it('Returns the correct dictionary', function () {
    var expected = {
      MMM: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      MMMM: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      dd: ['일', '월', '화', '수', '목', '금', '토'],
      ddd: ['일', '월', '화', '수', '목', '금', '토'],
      dddd: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
      A: ['오전', '오후'],
      a: ['오전', '오후'],
      aa: ['오전', '오후']
    }
    assert.deepEqual(expected, translations.translations);
  });
});
