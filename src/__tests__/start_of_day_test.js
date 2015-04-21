var startOfDay = require('../start_of_day');

describe('startOfDay', function() {
  it('returns date with time setted to 00:00:00', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    var result = startOfDay(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0)
    );
  });

  it('accepts string', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString();
    var result = startOfDay(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0)
    );
  });

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    var result = startOfDay(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0)
    );
  });

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfDay(date);
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });
});

