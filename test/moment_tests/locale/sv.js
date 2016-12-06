import {localeModule, test} from '../qunit';
import moment from '../../moment';
localeModule('sv');

test('parse', function (assert) {
    var tests = 'januari jan_februari feb_mars mar_april apr_maj maj_juni jun_juli jul_augusti aug_september sep_oktober okt_november nov_december dec'.split('_'), i;
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
            ['dddd, MMMM Do YYYY, h:mm:ss a',      'söndag, februari 14e 2010, 3:25:50 pm'],
            ['ddd, hA',                            'sön, 3PM'],
            ['M Mo MM MMMM MMM',                   '2 2a 02 februari feb'],
            ['YYYY YY',                            '2010 10'],
            ['D Do DD',                            '14 14e 14'],
            ['d do dddd ddd dd',                   '0 0e söndag sön sö'],
            ['DDD DDDo DDDD',                      '45 45e 045'],
            ['w wo ww',                            '6 6e 06'],
            ['h hh',                               '3 03'],
            ['H HH',                               '15 15'],
            ['m mm',                               '25 25'],
            ['s ss',                               '50 50'],
            ['a A',                                'pm PM'],
            ['[the] DDDo [day of the year]',       'the 45e day of the year'],
            ['LTS',                                '15:25:50'],
            ['L',                                  '2010-02-14'],
            ['LL',                                 '14 februari 2010'],
            ['LLL',                                '14 februari 2010 kl. 15:25'],
            ['LLLL',                               'söndag 14 februari 2010 kl. 15:25'],
            ['l',                                  '2010-2-14'],
            ['ll',                                 '14 feb 2010'],
            ['lll',                                '14 feb 2010 15:25'],
            ['llll',                               'sön 14 feb 2010 15:25']
        ],
        b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
        i;
    for (i = 0; i < a.length; i++) {
        assert.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
    }
});

test('format ordinal', function (assert) {
    assert.equal(moment([2011, 0, 1]).format('DDDo'), '1a', '1a');
    assert.equal(moment([2011, 0, 2]).format('DDDo'), '2a', '2a');
    assert.equal(moment([2011, 0, 3]).format('DDDo'), '3e', '3e');
    assert.equal(moment([2011, 0, 4]).format('DDDo'), '4e', '4e');
    assert.equal(moment([2011, 0, 5]).format('DDDo'), '5e', '5e');
    assert.equal(moment([2011, 0, 6]).format('DDDo'), '6e', '6e');
    assert.equal(moment([2011, 0, 7]).format('DDDo'), '7e', '7e');
    assert.equal(moment([2011, 0, 8]).format('DDDo'), '8e', '8e');
    assert.equal(moment([2011, 0, 9]).format('DDDo'), '9e', '9e');
    assert.equal(moment([2011, 0, 10]).format('DDDo'), '10e', '10e');

    assert.equal(moment([2011, 0, 11]).format('DDDo'), '11e', '11e');
    assert.equal(moment([2011, 0, 12]).format('DDDo'), '12e', '12e');
    assert.equal(moment([2011, 0, 13]).format('DDDo'), '13e', '13e');
    assert.equal(moment([2011, 0, 14]).format('DDDo'), '14e', '14e');
    assert.equal(moment([2011, 0, 15]).format('DDDo'), '15e', '15e');
    assert.equal(moment([2011, 0, 16]).format('DDDo'), '16e', '16e');
    assert.equal(moment([2011, 0, 17]).format('DDDo'), '17e', '17e');
    assert.equal(moment([2011, 0, 18]).format('DDDo'), '18e', '18e');
    assert.equal(moment([2011, 0, 19]).format('DDDo'), '19e', '19e');
    assert.equal(moment([2011, 0, 20]).format('DDDo'), '20e', '20e');

    assert.equal(moment([2011, 0, 21]).format('DDDo'), '21a', '21a');
    assert.equal(moment([2011, 0, 22]).format('DDDo'), '22a', '22a');
    assert.equal(moment([2011, 0, 23]).format('DDDo'), '23e', '23e');
    assert.equal(moment([2011, 0, 24]).format('DDDo'), '24e', '24e');
    assert.equal(moment([2011, 0, 25]).format('DDDo'), '25e', '25e');
    assert.equal(moment([2011, 0, 26]).format('DDDo'), '26e', '26e');
    assert.equal(moment([2011, 0, 27]).format('DDDo'), '27e', '27e');
    assert.equal(moment([2011, 0, 28]).format('DDDo'), '28e', '28e');
    assert.equal(moment([2011, 0, 29]).format('DDDo'), '29e', '29e');
    assert.equal(moment([2011, 0, 30]).format('DDDo'), '30e', '30e');

    assert.equal(moment([2011, 0, 31]).format('DDDo'), '31a', '31a');
});

test('format month', function (assert) {
    var expected = 'januari jan_februari feb_mars mar_april apr_maj maj_juni jun_juli jul_augusti aug_september sep_oktober okt_november nov_december dec'.split('_'), i;
    for (i = 0; i < expected.length; i++) {
        assert.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
    }
});

test('format week', function (assert) {
    var expected = 'söndag sön sö_måndag mån må_tisdag tis ti_onsdag ons on_torsdag tor to_fredag fre fr_lördag lör lö'.split('_'), i;
    for (i = 0; i < expected.length; i++) {
        assert.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
    }
});

test('from', function (assert) {
    var start = moment([2007, 1, 28]);
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 44}), true),  'några sekunder', '44 seconds = a few seconds');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 45}), true),  'en minut',      '45 seconds = a minute');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 89}), true),  'en minut',      '89 seconds = a minute');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 90}), true),  '2 minuter',     '90 seconds = 2 minutes');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 44}), true),  '44 minuter',    '44 minutes = 44 minutes');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 45}), true),  'en timme',       '45 minutes = an hour');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 89}), true),  'en timme',       '89 minutes = an hour');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 90}), true),  '2 timmar',       '90 minutes = 2 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 5}), true),   '5 timmar',       '5 hours = 5 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 21}), true),  '21 timmar',      '21 hours = 21 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 22}), true),  'en dag',         '22 hours = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 35}), true),  'en dag',         '35 hours = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 36}), true),  '2 dagar',        '36 hours = 2 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 1}), true),   'en dag',         '1 day = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 5}), true),   '5 dagar',        '5 days = 5 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 25}), true),  '25 dagar',       '25 days = 25 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 26}), true),  'en månad',       '26 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 30}), true),  'en månad',       '30 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 43}), true),  'en månad',       '43 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 46}), true),  '2 månader',      '46 days = 2 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 74}), true),  '2 månader',      '75 days = 2 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 76}), true),  '3 månader',      '76 days = 3 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({M: 1}), true),   'en månad',       '1 month = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({M: 5}), true),   '5 månader',      '5 months = 5 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 345}), true), 'ett år',        '345 days = a year');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 548}), true), '2 år',       '548 days = 2 years');
    assert.equal(start.from(moment([2007, 1, 28]).add({y: 1}), true),   'ett år',        '1 year = a year');
    assert.equal(start.from(moment([2007, 1, 28]).add({y: 5}), true),   '5 år',       '5 years = 5 years');
});

test('suffix', function (assert) {
    assert.equal(moment(30000).from(0), 'om några sekunder',  'prefix');
    assert.equal(moment(0).from(30000), 'för några sekunder sedan', 'suffix');
});

test('now from now', function (assert) {
    assert.equal(moment().fromNow(), 'för några sekunder sedan',  'now from now should display as in the past');
});

test('fromNow', function (assert) {
    assert.equal(moment().add({s: 30}).fromNow(), 'om några sekunder', 'in a few seconds');
    assert.equal(moment().add({d: 5}).fromNow(), 'om 5 dagar', 'in 5 days');
});

test('calendar day', function (assert) {
    var a = moment().hours(12).minutes(0).seconds(0);

    assert.equal(moment(a).calendar(),                   'Idag 12:00',     'today at the same time');
    assert.equal(moment(a).add({m: 25}).calendar(),      'Idag 12:25',     'Now plus 25 min');
    assert.equal(moment(a).add({h: 1}).calendar(),       'Idag 13:00',     'Now plus 1 hour');
    assert.equal(moment(a).add({d: 1}).calendar(),       'Imorgon 12:00',  'tomorrow at the same time');
    assert.equal(moment(a).subtract({h: 1}).calendar(),  'Idag 11:00',     'Now minus 1 hour');
    assert.equal(moment(a).subtract({d: 1}).calendar(),  'Igår 12:00',     'yesterday at the same time');
});

test('calendar next week', function (assert) {
    var i, m;
    for (i = 2; i < 7; i++) {
        m = moment().add({d: i});
        assert.equal(m.calendar(),       m.format('[På] dddd LT'),  'Today + ' + i + ' days current time');
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        assert.equal(m.calendar(),       m.format('[På] dddd LT'),  'Today + ' + i + ' days beginning of day');
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        assert.equal(m.calendar(),       m.format('[På] dddd LT'),  'Today + ' + i + ' days end of day');
    }
});

test('calendar last week', function (assert) {
    var i, m;
    for (i = 2; i < 7; i++) {
        m = moment().subtract({d: i});
        assert.equal(m.calendar(),       m.format('[I] dddd[s] LT'),  'Today - ' + i + ' days current time');
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        assert.equal(m.calendar(),       m.format('[I] dddd[s] LT'),  'Today - ' + i + ' days beginning of day');
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        assert.equal(m.calendar(),       m.format('[I] dddd[s] LT'),  'Today - ' + i + ' days end of day');
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
    assert.equal(moment([2012, 0,  1]).format('w ww wo'), '52 52 52a', 'Jan  1 2012 should be week 52');
    assert.equal(moment([2012, 0,  2]).format('w ww wo'),   '1 01 1a', 'Jan  2 2012 should be week 1');
    assert.equal(moment([2012, 0,  8]).format('w ww wo'),   '1 01 1a', 'Jan  8 2012 should be week 1');
    assert.equal(moment([2012, 0,  9]).format('w ww wo'),   '2 02 2a', 'Jan  9 2012 should be week 2');
    assert.equal(moment([2012, 0, 15]).format('w ww wo'),   '2 02 2a', 'Jan 15 2012 should be week 2');
});

