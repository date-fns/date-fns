var format = require('../format');

describe('format', function() {
  beforeEach(function () {
    this._date = new Date(1986, 3, 4, 10, 32, 0, 900);
  });

  it('simple YY', function() {
    var b = new Date(2009, 1, 14, 15, 25, 50, 125);
    expect(format(b, 'YY')).to.equal('09');
  });

  it('accepts string as a date', function() {
    expect(format('2014-04-04', 'YYYY-MM-DD')).to.be.equal('2014-04-04');
  });

  it('return default ISO string format if format is unknown', function() {
    expect(format(this._date)).to.be.equal('1986-04-04T10:32:00.900Z');
  });

  describe('format escape brackets', function() {
    it('should ignore escaped chars that in [] brackets', function() {
      var result = format(this._date, '[not a date] MM');
      expect(result).to.be.equal('not a date 04');
    });
  });

  describe('ordinal', function() {
    it('should return 1st', function() {
      var date = format(this._date, 'Do of t[h][e] Mo in YYYY');
      expect(date).to.be.equal('4th of the 4th in 1986');
    });
  });

  describe('Months', function() {
    it('return months names', function() {
      var date = format(this._date, 'MMM MMMM');
      expect(date).to.equal('Apr April');
    });
    it('return months names reverse parse', function() {
      var date = format(this._date, 'MMMM MMM');
      expect(date).to.equal('April Apr');
    });
    it('all month variants', function() {
      var date = format(this._date, 'M Mo MM MMM MMMM');
      expect(date).to.equal('4 4th 04 Apr April');
    });
  });

  describe('formatting day', function() {
    describe('with DDD', function() {
      context('for first day of a year', function() {
        it('returns correct day number', function() {
          var result = format(new Date(1992, 0, 1, 0, 0, 0, 0), 'DDD');
          expect(result).to.be.equal('1');
        });
      });

      context('for last day of a common year', function() {
        it('returns correct day number', function() {
          var lastDay = format(new Date(1986, 11, 31, 23, 59, 59, 999), 'DDD');
          expect(lastDay).to.be.equal('365');
        });
      });

      context('for last day of a leap year', function() {
        it('returns correct day number', function() {
          var result = format(new Date(1992, 11, 31, 23, 59, 59, 999), 'DDD');
          expect(result).to.be.equal('366');
        });
      });
    });

    it('return ordinal day of the year', function() {
      var firstDay = format(new Date(1992, 0, 1, 0, 0, 0, 0), 'DDDo');
      expect(firstDay).to.be.equal('1st');
    });

    it('return zero filled day of year', function() {
      var firstDay = format(new Date(1992, 0, 1, 0, 0, 0, 0), 'DDDD');
      expect(firstDay).to.be.equal('001');
    });
  });

  describe('Quartal', function() {
    it('right quartal', function() {
      var result = [];
      for (var i = 0; i != 12; i++){
        result.push(format(new Date(1986, i, 1), 'Q'));
      }
      expect(result).to.deep.equal(
        ['1','1','1', '2', '2', '2', '3', '3', '3', '4', '4', '4']
      );
    });
  });

  describe('day of week', function() {
    it('display', function() {
      var result = format(this._date, 'd do dd ddd dddd');
      expect(result).to.be.equal('5 5th Fr Fri Friday');
    });

    it('ISO', function() {
      expect(format(this._date, 'E')).to.be.equal('6');
    });

    it('parses ok for different variants', function() {
      var firstDay = format(this._date, 'dddd ddd d do [d] do dd ddd dddd');
      expect(firstDay).to.be.equal('Friday Fri 5 5th d 5th Fr Fri Friday');
    });
  });

  describe('hours', function() {
    it('am/pm', function() {
      expect(format(this._date, 'hh:mm a')).to.be.equal('10:32 am');
    });

    it('12 pm', function() {
      var date = new Date(1986, 3, 4, 12, 00, 0, 900);
      expect(format(date, 'hh:mm a')).to.be.equal('12:00 pm');
    });

    it('12 am', function() {
      var date = new Date(1986, 3, 4, 00, 00, 0, 900);
      expect(format(date, 'h:mm a')).to.be.equal('12:00 am');
    });
  });

  describe('seconds', function() {
    it('show', function() {
      expect(format(this._date, 's ss')).to.be.equal('0 00');
    });
  });
});

