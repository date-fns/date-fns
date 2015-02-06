var parse = require('../parse');

describe('parse', function() {
  describe('failure', function() {
    it('returns null if there is no date in string', function() {
      var result = parse('foobarTbaz');
      expect(result).to.be.null;
    });
  });

  describe('year', function() {
    it('parses YYYY', function() {
      var result = parse('2014');
      expect(result).to.be.eql(new Date(2014, 0, 1));
    });
  });

  describe('month', function() {
    it('parses YYYY-MM', function() {
      var result = parse('2014-02');
      expect(result).to.be.eql(new Date(2014, 1, 1));
    });
  });

  describe('week', function() {
    it('parses YYYY-Www', function() {
      var result = parse('2014-W02');
      expect(result).to.be.eql(new Date(2014, 0, 6));
    });

    it('parses YYYYWww', function() {
      var result = parse('2014W02');
      expect(result).to.be.eql(new Date(2014, 0, 6));
    });
  });

  describe('calendar date', function() {
    it('parses YYYY-MM-DD', function() {
      var result = parse('2014-02-11');
      expect(result).to.be.eql(new Date(2014, 1, 11));
    });

    it('parses YYYYMMDD', function() {
      var result = parse('20140211');
      expect(result).to.be.eql(new Date(2014, 1, 11));
    });
  });

  describe('week date', function() {
    it('parses YYYY-Www-D', function() {
      var result = parse('2014-W02-7');
      expect(result).to.be.eql(new Date(2014, 0, 12));
    });

    it('parses YYYYWwwD', function() {
      var result = parse('2014W027');
      expect(result).to.be.eql(new Date(2014, 0, 12));
    });
  });

  describe('ordinal date', function() {
    it('parses YYYY-DDD', function() {
      var result = parse('2014-026');
      expect(result).to.be.eql(new Date(2014, 0, 26));
    });

    it('parses YYYYDDD', function() {
      var result = parse('2014026');
      expect(result).to.be.eql(new Date(2014, 0, 26));
    });
  });

  describe('date and time combined', function() {
    it('parses YYYY-MM-DDThh:mm', function() {
      var result = parse('2014-02-11T11:30');
      expect(result).to.be.eql(new Date(2014, 1, 11, 11, 30));
    });

    it('parses YYYY-MM-DDThhmm', function() {
      var result = parse('2014-02-11T1130');
      expect(result).to.be.eql(new Date(2014, 1, 11, 11, 30));
    });

    it('parses 24:00 as midnight', function() {
      var result = parse('2014-02-11T2400');
      expect(result).to.be.eql(new Date(2014, 1, 11, 0, 0));
    });
  });

  describe('float time', function() {
    it('parses float hours', function() {
      var result = parse('2014-02-11T11.5');
      expect(result).to.be.eql(new Date(2014, 1, 11, 11, 30));
    });

    it('parses float minutes', function() {
      var result = parse('2014-02-11T11:30.5');
      expect(result).to.be.eql(new Date(2014, 1, 11, 11, 30, 30));
    });

    it('parses float seconds', function() {
      var result = parse('2014-02-11T11:30:30.768');
      expect(result).to.be.eql(new Date(2014, 1, 11, 11, 30, 30, 768));
    });

    it('parses , as decimal mark', function() {
      var result = parse('2014-02-11T11,5');
      expect(result).to.be.eql(new Date(2014, 1, 11, 11, 30));
    });
  });

  describe('time zone', function() {
    context('when date and time are specified', function() {
      it('parses Z', function() {
        var result = parse('2014-10-25T06:46:20Z');
        expect(result).to.be.eql(new Date('2014-10-25T13:46:20+07:00'));
      });

      it('parses ±hh:mm', function() {
        var result = parse('2014-10-25T13:46:20+07:00');
        expect(result).to.be.eql(new Date('2014-10-25T13:46:20+07:00'));
      });

      it('parses ±hhmm', function() {
        var result = parse('2014-10-25T03:46:20-0300');
        expect(result).to.be.eql(new Date('2014-10-25T13:46:20+07:00'));
      });

      it('parses ±hh', function() {
        var result = parse('2014-10-25T13:46:20+07');
        expect(result).to.be.eql(new Date('2014-10-25T13:46:20+07:00'));
      });
    });
  });

  describe('plain time', function() {
    it('returns number of milliseconds', function() {
      var result = parse('21:05:30');
      expect(result).to.be.equal(75930000);
    });

    it('parses float plain time', function() {
      var result = parse('21:05.5');
      expect(result).to.be.equal(75930000);
    });
  });
});

