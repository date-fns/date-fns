import {localeModule, test} from '../qunit';
import moment from '../../moment';
localeModule('eu');

test('parse', function (assert) {
    var tests = 'urtarrila urt._otsaila ots._martxoa mar._apirila api._maiatza mai._ekaina eka._uztaila uzt._abuztua abu._iraila ira._urria urr._azaroa aza._abendua abe.'.split('_'), i;
    function equalTest(input, mmm, i) {
        assert.equal(moment(input, mmm).month(), i, input + ' should be month ' + (i + 1));
    }
    for (i = 0; i < 12; i++) {
        tests[i] = tests[i].split(' ');
        equalTest(tests[i][0], 'MMM', i);
        equalTest(tests[i][1], 'MMM', i);
        equalTest(tests[i][0], 'MMMM', i);
        equalTest(tests[i][1], 'MMMM', i);
        equalTest(tests[i][0].toLocaleLowerCase(), 'MMMM', i);
        equalTest(tests[i][1].toLocaleLowerCase(), 'MMMM', i);
        equalTest(tests[i][0].toLocaleUpperCase(), 'MMMM', i);
        equalTest(tests[i][1].toLocaleUpperCase(), 'MMMM', i);
    }
});

test('format', function (assert) {
    var a = [
            ['dddd, MMMM Do YYYY, h:mm:ss a',      'igandea, otsaila 14. 2010, 3:25:50 pm'],
            ['ddd, hA',                            'ig., 3PM'],
            ['M Mo MM MMMM MMM',                   '2 2. 02 otsaila ots.'],
            ['YYYY YY',                            '2010 10'],
            ['D Do DD',                            '14 14. 14'],
            ['d do dddd ddd dd',                   '0 0. igandea ig. ig'],
            ['DDD DDDo DDDD',                      '45 45. 045'],
            ['w wo ww',                            '7 7. 07'],
            ['h hh',                               '3 03'],
            ['H HH',                               '15 15'],
            ['m mm',                               '25 25'],
            ['s ss',                               '50 50'],
            ['a A',                                'pm PM'],
            ['[the] DDDo [day of the year]',       'the 45. day of the year'],
            ['LTS',                                '15:25:50'],
            ['L',                                  '2010-02-14'],
            ['LL',                                 '2010ko otsailaren 14a'],
            ['LLL',                                '2010ko otsailaren 14a 15:25'],
            ['LLLL',                               'igandea, 2010ko otsailaren 14a 15:25'],
            ['l',                                  '2010-2-14'],
            ['ll',                                 '2010ko ots. 14a'],
            ['lll',                                '2010ko ots. 14a 15:25'],
            ['llll',                               'ig., 2010ko ots. 14a 15:25']
        ],
        b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
        i;
    for (i = 0; i < a.length; i++) {
        assert.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
    }
});

test('format ordinal', function (assert) {
    assert.equal(moment([2011, 0, 1]).format('DDDo'), '1.', '1.');
    assert.equal(moment([2011, 0, 2]).format('DDDo'), '2.', '2.');
    assert.equal(moment([2011, 0, 3]).format('DDDo'), '3.', '3.');
    assert.equal(moment([2011, 0, 4]).format('DDDo'), '4.', '4.');
    assert.equal(moment([2011, 0, 5]).format('DDDo'), '5.', '5.');
    assert.equal(moment([2011, 0, 6]).format('DDDo'), '6.', '6.');
    assert.equal(moment([2011, 0, 7]).format('DDDo'), '7.', '7.');
    assert.equal(moment([2011, 0, 8]).format('DDDo'), '8.', '8.');
    assert.equal(moment([2011, 0, 9]).format('DDDo'), '9.', '9.');
    assert.equal(moment([2011, 0, 10]).format('DDDo'), '10.', '10.');

    assert.equal(moment([2011, 0, 11]).format('DDDo'), '11.', '11.');
    assert.equal(moment([2011, 0, 12]).format('DDDo'), '12.', '12.');
    assert.equal(moment([2011, 0, 13]).format('DDDo'), '13.', '13.');
    assert.equal(moment([2011, 0, 14]).format('DDDo'), '14.', '14.');
    assert.equal(moment([2011, 0, 15]).format('DDDo'), '15.', '15.');
    assert.equal(moment([2011, 0, 16]).format('DDDo'), '16.', '16.');
    assert.equal(moment([2011, 0, 17]).format('DDDo'), '17.', '17.');
    assert.equal(moment([2011, 0, 18]).format('DDDo'), '18.', '18.');
    assert.equal(moment([2011, 0, 19]).format('DDDo'), '19.', '19.');
    assert.equal(moment([2011, 0, 20]).format('DDDo'), '20.', '20.');

    assert.equal(moment([2011, 0, 21]).format('DDDo'), '21.', '21.');
    assert.equal(moment([2011, 0, 22]).format('DDDo'), '22.', '22.');
    assert.equal(moment([2011, 0, 23]).format('DDDo'), '23.', '23.');
    assert.equal(moment([2011, 0, 24]).format('DDDo'), '24.', '24.');
    assert.equal(moment([2011, 0, 25]).format('DDDo'), '25.', '25.');
    assert.equal(moment([2011, 0, 26]).format('DDDo'), '26.', '26.');
    assert.equal(moment([2011, 0, 27]).format('DDDo'), '27.', '27.');
    assert.equal(moment([2011, 0, 28]).format('DDDo'), '28.', '28.');
    assert.equal(moment([2011, 0, 29]).format('DDDo'), '29.', '29.');
    assert.equal(moment([2011, 0, 30]).format('DDDo'), '30.', '30.');

    assert.equal(moment([2011, 0, 31]).format('DDDo'), '31.', '31.');
});

test('format month', function (assert) {
    var expected = 'urtarrila urt._otsaila ots._martxoa mar._apirila api._maiatza mai._ekaina eka._uztaila uzt._abuztua abu._iraila ira._urria urr._azaroa aza._abendua abe.'.split('_'), i;
    for (i = 0; i < expected.length; i++) {
        assert.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
    }
});

test('format week', function (assert) {
    var expected = 'igandea ig. ig_astelehena al. al_asteartea ar. ar_asteazkena az. az_osteguna og. og_ostirala ol. ol_larunbata lr. lr'.split('_'), i;
    for (i = 0; i < expected.length; i++) {
        assert.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
    }
});

test('from', function (assert) {
    var start = moment([2007, 1, 28]);
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 44}), true),  'segundo batzuk', '44 seconds = a few seconds');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 45}), true),  'minutu bat',     '45 seconds = a minute');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 89}), true),  'minutu bat',     '89 seconds = a minute');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 90}), true),  '2 minutu',       '90 seconds = 2 minutes');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 44}), true),  '44 minutu',      '44 minutes = 44 minutes');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 45}), true),  'ordu bat',       '45 minutes = an hour');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 89}), true),  'ordu bat',       '89 minutes = an hour');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 90}), true),  '2 ordu',         '90 minutes = 2 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 5}), true),   '5 ordu',         '5 hours = 5 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 21}), true),  '21 ordu',        '21 hours = 21 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 22}), true),  'egun bat',       '22 hours = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 35}), true),  'egun bat',       '35 hours = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 36}), true),  '2 egun',         '36 hours = 2 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 1}), true),   'egun bat',       '1 day = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 5}), true),   '5 egun',         '5 days = 5 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 25}), true),  '25 egun',        '25 days = 25 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 26}), true),  'hilabete bat',   '26 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 30}), true),  'hilabete bat',   '30 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 43}), true),  'hilabete bat',   '43 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 46}), true),  '2 hilabete',     '46 days = 2 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 74}), true),  '2 hilabete',     '75 days = 2 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 76}), true),  '3 hilabete',     '76 days = 3 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({M: 1}), true),   'hilabete bat',   '1 month = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({M: 5}), true),   '5 hilabete',     '5 months = 5 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 345}), true), 'urte bat',       '345 days = a year');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 548}), true), '2 urte',         '548 days = 2 years');
    assert.equal(start.from(moment([2007, 1, 28]).add({y: 1}), true),   'urte bat',       '1 year = a year');
    assert.equal(start.from(moment([2007, 1, 28]).add({y: 5}), true),   '5 urte',         '5 years = 5 years');
});

test('suffix', function (assert) {
    assert.equal(moment(30000).from(0), 'segundo batzuk barru',  'prefix');
    assert.equal(moment(0).from(30000), 'duela segundo batzuk', 'suffix');
});

test('now from now', function (assert) {
    assert.equal(moment().fromNow(), 'duela segundo batzuk',  'now from now should display as in the past');
});

test('fromNow', function (assert) {
    assert.equal(moment().add({s: 30}).fromNow(), 'segundo batzuk barru', 'in seconds');
    assert.equal(moment().add({d: 5}).fromNow(), '5 egun barru', 'in 5 days');
});

test('calendar day', function (assert) {
    var a = moment().hours(12).minutes(0).seconds(0);

    assert.equal(moment(a).calendar(),                   'gaur 12:00etan',  'today at the same time');
    assert.equal(moment(a).add({m: 25}).calendar(),      'gaur 12:25etan',  'now plus 25 min');
    assert.equal(moment(a).add({h: 1}).calendar(),       'gaur 13:00etan',  'now plus 1 hour');
    assert.equal(moment(a).add({d: 1}).calendar(),       'bihar 12:00etan', 'tomorrow at the same time');
    assert.equal(moment(a).subtract({h: 1}).calendar(),  'gaur 11:00etan',  'now minus 1 hour');
    assert.equal(moment(a).subtract({d: 1}).calendar(),  'atzo 12:00etan',  'yesterday at the same time');
});

test('calendar next week', function (assert) {
    var i, m;
    for (i = 2; i < 7; i++) {
        m = moment().add({d: i});
        assert.equal(m.calendar(),       m.format('dddd LT[etan]'),  'Today + ' + i + ' days current time');
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        assert.equal(m.calendar(),       m.format('dddd LT[etan]'),  'Today + ' + i + ' days beginning of day');
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        assert.equal(m.calendar(),       m.format('dddd LT[etan]'),  'Today + ' + i + ' days end of day');
    }
});

test('calendar last week', function (assert) {
    var i, m;
    for (i = 2; i < 7; i++) {
        m = moment().subtract({d: i});
        assert.equal(m.calendar(),       m.format('[aurreko] dddd LT[etan]'),  'Today - ' + i + ' days current time');
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        assert.equal(m.calendar(),       m.format('[aurreko] dddd LT[etan]'),  'Today - ' + i + ' days beginning of day');
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        assert.equal(m.calendar(),       m.format('[aurreko] dddd LT[etan]'),  'Today - ' + i + ' days end of day');
    }
});

test('calendar all else', function (assert) {
    var weeksAgo = moment().subtract({w: 1}),
        weeksFromNow = moment().add({w: 1});

    assert.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  '1 week ago');
    assert.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  'in 1 week');

    weeksAgo = moment().subtract({w: 2});
    weeksFromNow = moment().add({w: 2});

    assert.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  '2 weeks ago');
    assert.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  'in 2 weeks');
});

test('weeks year starting sunday formatted', function (assert) {
    assert.equal(moment([2011, 11, 26]).format('w ww wo'), '1 01 1.', 'Dec 26 2011 should be week 1');
    assert.equal(moment([2012,  0,  1]).format('w ww wo'), '1 01 1.', 'Jan  1 2012 should be week 1');
    assert.equal(moment([2012,  0,  2]).format('w ww wo'), '2 02 2.', 'Jan  2 2012 should be week 2');
    assert.equal(moment([2012,  0,  8]).format('w ww wo'), '2 02 2.', 'Jan  8 2012 should be week 2');
    assert.equal(moment([2012,  0,  9]).format('w ww wo'), '3 03 3.', 'Jan  9 2012 should be week 3');
});

