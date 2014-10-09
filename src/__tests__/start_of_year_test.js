var startOfYear = require('../start_of_year');

describe('startOfYear', function() {
  it('returns date with time setted to 00:00:00', function() {
    var date = new Date('2014-09-02T11:55:00');
    var result = startOfYear(date);
    expect(result).to.be.eql(
      new Date(2014, 0, 1, 0, 0, 0, 0)
    );
  });

  it('accepts string', function() {
    var date = '2014-09-02T11:55:00';
    var result = startOfYear(date);
    expect(result).to.be.eql(
      new Date(2014, 0, 1, 0, 0, 0, 0)
    );
  });

  it('do not mutates original date', function() {
    var date = new Date('2014-09-02T11:55:00');
    startOfYear(date);
    expect(date).to.be.eql(new Date('2014-09-02T11:55:00'));
  });
});

