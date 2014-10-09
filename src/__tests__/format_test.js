var format = require('../format');

describe('format', function(){
  beforeEach(function () {
    this._date = new Date(1986, 3, 4, 10, 32, 0, 900);
  });
  it('simple YY', function(){
    var b = new Date(2009, 1, 14, 15, 25, 50, 125);
    expect(format(b, 'YY')).to.equal('09');
  });

  describe('format escape brackets', function(){
    it('should ignore escaped chars that in [] brackets');
  })

  describe('ordinal', function(){
    it('should return 1st', function(){
      var date = format(this._date, 'Do of the Mo in YYYY');
      expect(date).to.be.equal('4th of the 4th in 1986');
    });
  })

  describe('Months', function(){
    it('return months names', function(){
      var date = format(this._date, 'MMM MMMM');
      expect(date).to.equal('Apr April');
    });
    it('all month variants', function(){
      var date = format(this._date, 'M Mo MM MMM MMMM');
      expect(date).to.equal('4 4th 04 Apr April');
    });
  });

  describe('days', function(){
    it('return day of the year', function(){
      var firstDay = format(new Date(1992, 0, 1, 0, 0, 0, 0), 'DDD');
      var lastDayLeapYear = format(new Date(1992, 11, 31, 23, 59, 59, 999), 'DDD');
      var lastDay = format(new Date(1986, 11, 31, 23, 59, 59, 999), 'DDD');

      expect(firstDay).to.be.equal('1');
      expect(lastDayLeapYear).to.be.equal('366');
      expect(lastDay).to.be.equal('365');
    });

    it('return ordinal day of the year', function(){
      var firstDay = format(new Date(1992, 0, 1, 0, 0, 0, 0), 'DDDo');
      expect(firstDay).to.be.equal('1st');
    });

    it('return zero filled day of year', function(){
      var firstDay = format(new Date(1992, 0, 1, 0, 0, 0, 0), 'DDDD');
      expect(firstDay).to.be.equal('001');
    });
  });

  describe('Quartal', function(){
    it('right quartal', function(){
      var dates = [];
      for(var i=0; i!=12; i++){
        dates.push(format(new Date(1986, i, 1), 'Q'));
      }
      expect(dates).to.deep.equal(['1','1','1', '2', '2', '2', '3', '3', '3', '4', '4', '4']);
    });
  });

  describe('day of week', function(){
    it('display', function(){
      expect(format(this._date, 'd do dd ddd dddd')).to.be.equal('5 5th Fr Fri Friday');
    })

    it('ISO', function(){
      expect(format(this._date, 'E')).to.be.equal('6');
    })
  });


})