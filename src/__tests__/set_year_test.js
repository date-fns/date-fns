var setYear = require('../set_year');

describe('setYear', function() {
  it('set full year', function() {
    var result = setYear(new Date(2014, 8 /* Sep */, 1), 2013);
    expect(result).to.be.eql(new Date(2013, 8 /* Sep */, 1));
  });

  it('accepts string', function() {
    var result = setYear(new Date(2014, 8 /* Sep */, 1).toISOString(), 2016);
    expect(result).to.be.eql(new Date(2016, 8 /* Sep */, 1));
  });

  it('do not mutates original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1);
    setYear(date, 2011);
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1));
  });
});

