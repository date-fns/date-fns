var addDays = require('../add_days');

describe('addDays', function() {
  it('adds number of passed days', function() {
    var result = addDays(new Date(2014, 8 /* Sep */, 1), 10);
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 11));
  });

  it('accepts string', function() {
    var result = addDays(new Date(2014, 8 /* Sep */, 1).toISOString(), 10);
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 11));
  });

  it('accepts timestamp', function() {
    var result = addDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10);
    expect(result).to.be.eql(new Date(2014, 8 /* Sep */, 11));
  });

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1);
    addDays(date, 11);
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 1));
  });
});

