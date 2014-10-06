var startOfWeek = require('../start_of_week');

describe('startOfWeek', function() {
  it('returns date with time setted to 00:00:00 and date setted to first day in month', function() {
    var date = new Date('2014-09-02T11:55:00');
    var result = startOfWeek(date);
    expect(result).to.be.eql(new Date(2014, 7 /* starts from 0 */, 31));
  });

  it('allows to pass when a week starts', function() {
    var date = new Date('2014-09-02T11:55:00');
    var result = startOfWeek(date, 1);
    expect(result).to.be.eql(new Date(2014, 8 /* starts from 0 */, 1));
  });

  it('accepts string', function() {
    var date = '2014-09-02T11:55:00';
    var result = startOfWeek(date);
    expect(result).to.be.eql(new Date(2014, 7 /* starts from 0 */, 31));
  });

  it('do not mutates original date', function() {
    var date = new Date('2014-09-02T11:55:00');
    startOfWeek(date);
    expect(date).to.be.eql(new Date('2014-09-02T11:55:00'));
  });

  describe('edge cases', function() {
    context('when current day value is less than start of week', function() {
      it('it returns start of week', function() {
        var date = new Date(2014, 9 /* Oct */, 6);
        var result = startOfWeek(date, 3);
        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 1));
      });
    });

    context('when current day value is equal to start of week', function() {
      it('it returns start of week', function() {
        var date = new Date(2014, 9 /* Oct */, 8);
        var result = startOfWeek(date, 3);
        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 8));
      });
    });

    context('when current day value is bigger than start of week', function() {
      it('it returns start of week', function() {
        var date = new Date(2014, 9 /* Oct */, 10);
        var result = startOfWeek(date, 3);
        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 8));
      });
    });

    context('with start of year', function() {
      var date = new Date(2014, 0 /* Jan */, 1);
      var result = startOfWeek(date);
      expect(result).to.be.eql(new Date(2013, 11 /* Dec */, 29));
    });
  });
});

