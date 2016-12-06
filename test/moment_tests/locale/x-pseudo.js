import {localeModule, test} from '../qunit';
import moment from '../../moment';
localeModule('x-pseudo');

test('parse', function (assert) {
    var tests = 'J~áñúá~rý J~áñ_F~ébrú~árý ~Féb_~Márc~h ~Már_Áp~ríl ~Ápr_~Máý ~Máý_~Júñé~ ~Júñ_Júl~ý ~Júl_Áú~gúst~ ~Áúg_Sép~témb~ér ~Sép_Ó~ctób~ér ~Óct_Ñ~óvém~bér ~Ñóv_~Décé~mbér ~Déc'.split('_'), i;
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
            ['dddd, MMMM Do YYYY, h:mm:ss a',      'S~úñdá~ý, F~ébrú~árý 14th 2010, 3:25:50 pm'],
            ['ddd, hA',                            'S~úñ, 3PM'],
            ['M Mo MM MMMM MMM',                   '2 2nd 02 F~ébrú~árý ~Féb'],
            ['YYYY YY',                            '2010 10'],
            ['D Do DD',                            '14 14th 14'],
            ['d do dddd ddd dd',                   '0 0th S~úñdá~ý S~úñ S~ú'],
            ['DDD DDDo DDDD',                      '45 45th 045'],
            ['w wo ww',                            '6 6th 06'],
            ['h hh',                               '3 03'],
            ['H HH',                               '15 15'],
            ['m mm',                               '25 25'],
            ['s ss',                               '50 50'],
            ['a A',                                'pm PM'],
            ['[the] DDDo [day of the year]',       'the 45th day of the year'],
            ['LT',                                 '15:25'],
            ['L',                                  '14/02/2010'],
            ['LL',                                 '14 F~ébrú~árý 2010'],
            ['LLL',                                '14 F~ébrú~árý 2010 15:25'],
            ['LLLL',                               'S~úñdá~ý, 14 F~ébrú~árý 2010 15:25'],
            ['l',                                  '14/2/2010'],
            ['ll',                                 '14 ~Féb 2010'],
            ['lll',                                '14 ~Féb 2010 15:25'],
            ['llll',                               'S~úñ, 14 ~Féb 2010 15:25']
        ],
        b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
        i;
    for (i = 0; i < a.length; i++) {
        assert.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
    }
});

test('format ordinal', function (assert) {
    assert.equal(moment([2011, 0, 1]).format('DDDo'), '1st', '1st');
    assert.equal(moment([2011, 0, 2]).format('DDDo'), '2nd', '2nd');
    assert.equal(moment([2011, 0, 3]).format('DDDo'), '3rd', '3rd');
    assert.equal(moment([2011, 0, 4]).format('DDDo'), '4th', '4th');
    assert.equal(moment([2011, 0, 5]).format('DDDo'), '5th', '5th');
    assert.equal(moment([2011, 0, 6]).format('DDDo'), '6th', '6th');
    assert.equal(moment([2011, 0, 7]).format('DDDo'), '7th', '7th');
    assert.equal(moment([2011, 0, 8]).format('DDDo'), '8th', '8th');
    assert.equal(moment([2011, 0, 9]).format('DDDo'), '9th', '9th');
    assert.equal(moment([2011, 0, 10]).format('DDDo'), '10th', '10th');

    assert.equal(moment([2011, 0, 11]).format('DDDo'), '11th', '11th');
    assert.equal(moment([2011, 0, 12]).format('DDDo'), '12th', '12th');
    assert.equal(moment([2011, 0, 13]).format('DDDo'), '13th', '13th');
    assert.equal(moment([2011, 0, 14]).format('DDDo'), '14th', '14th');
    assert.equal(moment([2011, 0, 15]).format('DDDo'), '15th', '15th');
    assert.equal(moment([2011, 0, 16]).format('DDDo'), '16th', '16th');
    assert.equal(moment([2011, 0, 17]).format('DDDo'), '17th', '17th');
    assert.equal(moment([2011, 0, 18]).format('DDDo'), '18th', '18th');
    assert.equal(moment([2011, 0, 19]).format('DDDo'), '19th', '19th');
    assert.equal(moment([2011, 0, 20]).format('DDDo'), '20th', '20th');

    assert.equal(moment([2011, 0, 21]).format('DDDo'), '21st', '21st');
    assert.equal(moment([2011, 0, 22]).format('DDDo'), '22nd', '22nd');
    assert.equal(moment([2011, 0, 23]).format('DDDo'), '23rd', '23rd');
    assert.equal(moment([2011, 0, 24]).format('DDDo'), '24th', '24th');
    assert.equal(moment([2011, 0, 25]).format('DDDo'), '25th', '25th');
    assert.equal(moment([2011, 0, 26]).format('DDDo'), '26th', '26th');
    assert.equal(moment([2011, 0, 27]).format('DDDo'), '27th', '27th');
    assert.equal(moment([2011, 0, 28]).format('DDDo'), '28th', '28th');
    assert.equal(moment([2011, 0, 29]).format('DDDo'), '29th', '29th');
    assert.equal(moment([2011, 0, 30]).format('DDDo'), '30th', '30th');

    assert.equal(moment([2011, 0, 31]).format('DDDo'), '31st', '31st');
});

test('format month', function (assert) {
    var expected = 'J~áñúá~rý J~áñ_F~ébrú~árý ~Féb_~Márc~h ~Már_Áp~ríl ~Ápr_~Máý ~Máý_~Júñé~ ~Júñ_Júl~ý ~Júl_Áú~gúst~ ~Áúg_Sép~témb~ér ~Sép_Ó~ctób~ér ~Óct_Ñ~óvém~bér ~Ñóv_~Décé~mbér ~Déc'.split('_'), i;
    for (i = 0; i < expected.length; i++) {
        assert.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
    }
});

test('format week', function (assert) {
    var expected = 'S~úñdá~ý S~úñ S~ú_Mó~ñdáý~ ~Móñ Mó~_Túé~sdáý~ ~Túé Tú_Wéd~ñésd~áý ~Wéd ~Wé_T~húrs~dáý ~Thú T~h_~Fríd~áý ~Frí Fr~_S~átúr~dáý ~Sát Sá'.split('_'), i;
    for (i = 0; i < expected.length; i++) {
        assert.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
    }
});

test('from', function (assert) {
    var start = moment([2007, 1, 28]);
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 44}), true),  'á ~féw ~sécó~ñds', '44 seconds = a few seconds');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 45}), true),  'á ~míñ~úté',      '45 seconds = a minute');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 89}), true),  'á ~míñ~úté',      '89 seconds = a minute');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 90}), true),  '2 m~íñú~tés',     '90 seconds = 2 minutes');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 44}), true),  '44 m~íñú~tés',    '44 minutes = 44 minutes');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 45}), true),  'á~ñ hó~úr',       '45 minutes = an hour');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 89}), true),  'á~ñ hó~úr',       '89 minutes = an hour');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 90}), true),  '2 h~óúrs',       '90 minutes = 2 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 5}), true),   '5 h~óúrs',       '5 hours = 5 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 21}), true),  '21 h~óúrs',      '21 hours = 21 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 22}), true),  'á ~dáý',         '22 hours = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 35}), true),  'á ~dáý',         '35 hours = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 36}), true),  '2 d~áýs',        '36 hours = 2 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 1}), true),   'á ~dáý',         '1 day = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 5}), true),   '5 d~áýs',        '5 days = 5 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 25}), true),  '25 d~áýs',       '25 days = 25 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 26}), true),  'á ~móñ~th',       '26 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 30}), true),  'á ~móñ~th',       '30 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 43}), true),  'á ~móñ~th',       '43 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 46}), true),  '2 m~óñt~hs',      '46 days = 2 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 74}), true),  '2 m~óñt~hs',      '75 days = 2 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 76}), true),  '3 m~óñt~hs',      '76 days = 3 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({M: 1}), true),   'á ~móñ~th',       '1 month = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({M: 5}), true),   '5 m~óñt~hs',      '5 months = 5 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 345}), true), 'á ~ýéár',        '345 days = a year');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 548}), true), '2 ý~éárs',       '548 days = 2 years');
    assert.equal(start.from(moment([2007, 1, 28]).add({y: 1}), true),   'á ~ýéár',        '1 year = a year');
    assert.equal(start.from(moment([2007, 1, 28]).add({y: 5}), true),   '5 ý~éárs',       '5 years = 5 years');
});

test('suffix', function (assert) {
    assert.equal(moment(30000).from(0), 'í~ñ á ~féw ~sécó~ñds',  'prefix');
    assert.equal(moment(0).from(30000), 'á ~féw ~sécó~ñds á~gó', 'suffix');
});

test('now from now', function (assert) {
    assert.equal(moment().fromNow(), 'á ~féw ~sécó~ñds á~gó',  'now from now should display as in the past');
});

test('fromNow', function (assert) {
    assert.equal(moment().add({s: 30}).fromNow(), 'í~ñ á ~féw ~sécó~ñds', 'in a few seconds');
    assert.equal(moment().add({d: 5}).fromNow(), 'í~ñ 5 d~áýs', 'in 5 days');
});

test('calendar day', function (assert) {
    var a = moment().hours(2).minutes(0).seconds(0);

    assert.equal(moment(a).calendar(),                     'T~ódá~ý át 02:00',      'today at the same time');
    assert.equal(moment(a).add({m: 25}).calendar(),      'T~ódá~ý át 02:25',      'Now plus 25 min');
    assert.equal(moment(a).add({h: 1}).calendar(),       'T~ódá~ý át 03:00',      'Now plus 1 hour');
    assert.equal(moment(a).add({d: 1}).calendar(),       'T~ómó~rró~w át 02:00',   'tomorrow at the same time');
    assert.equal(moment(a).subtract({h: 1}).calendar(),  'T~ódá~ý át 01:00',      'Now minus 1 hour');
    assert.equal(moment(a).subtract({d: 1}).calendar(),  'Ý~ést~érdá~ý át 02:00',  'yesterday at the same time');
});

test('calendar next week', function (assert) {
    var i, m;
    for (i = 2; i < 7; i++) {
        m = moment().add({d: i});
        assert.equal(m.calendar(),       m.format('dddd [át] LT'),  'Today + ' + i + ' days current time');
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        assert.equal(m.calendar(),       m.format('dddd [át] LT'),  'Today + ' + i + ' days beginning of day');
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        assert.equal(m.calendar(),       m.format('dddd [át] LT'),  'Today + ' + i + ' days end of day');
    }
});

test('calendar last week', function (assert) {
    var i, m;

    for (i = 2; i < 7; i++) {
        m = moment().subtract({d: i});
        assert.equal(m.calendar(),       m.format('[L~ást] dddd [át] LT'),  'Today - ' + i + ' days current time');
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        assert.equal(m.calendar(),       m.format('[L~ást] dddd [át] LT'),  'Today - ' + i + ' days beginning of day');
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        assert.equal(m.calendar(),       m.format('[L~ást] dddd [át] LT'),  'Today - ' + i + ' days end of day');
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
    assert.equal(moment([2012, 0,  1]).format('w ww wo'), '52 52 52nd', 'Jan  1 2012 should be week 52');
    assert.equal(moment([2012, 0,  2]).format('w ww wo'),   '1 01 1st', 'Jan  2 2012 should be week 1');
    assert.equal(moment([2012, 0,  8]).format('w ww wo'),   '1 01 1st', 'Jan  8 2012 should be week 1');
    assert.equal(moment([2012, 0,  9]).format('w ww wo'),   '2 02 2nd', 'Jan  9 2012 should be week 2');
    assert.equal(moment([2012, 0, 15]).format('w ww wo'),   '2 02 2nd', 'Jan 15 2012 should be week 2');
});
