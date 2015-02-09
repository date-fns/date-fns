var parseTime = require('../parse_time');

describe('parseTime', function() {
  it('returns null if there is no time in string', function() {
    var result = parseTime('foobarTbaz');
    expect(result).to.be.null;
  });

  it('parses float hours', function() {
    var result = parseTime('11.5');
    expect(result).to.be.equal(41400000);
  });

  it('parses float minutes', function() {
    var result = parseTime('11:30.5');
    expect(result).to.be.equal(41430000);
  });

  it('parses float seconds', function() {
    var result = parseTime('11:30:30.768');
    expect(result).to.be.equal(41430768);
  });

  it('parses , as decimal mark', function() {
    var result = parseTime('11,5');
    expect(result).to.be.eql(41400000);
  });
});