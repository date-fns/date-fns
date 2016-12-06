import {localeModule, test} from '../qunit';
import moment from '../../moment';
localeModule('gl');

test('parse', function (assert) {
    var tests = 'xaneiro xan._febreiro feb._marzo mar._abril abr._maio mai._xuño xuñ._xullo xul._agosto ago._setembro set._outubro out._novembro nov._decembro dec.'.split('_'), i;
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
            ['dddd, MMMM Do YYYY, h:mm:ss a',      'domingo, febreiro 14º 2010, 3:25:50 pm'],
            ['ddd, hA',                            'dom., 3PM'],
            ['M Mo MM MMMM MMM',                   '2 2º 02 febreiro feb.'],
            ['YYYY YY',                            '2010 10'],
            ['D Do DD',                            '14 14º 14'],
            ['d do dddd ddd dd',                   '0 0º domingo dom. do'],
            ['DDD DDDo DDDD',                      '45 45º 045'],
            ['w wo ww',                            '6 6º 06'],
            ['h hh',                               '3 03'],
            ['H HH',                               '15 15'],
            ['m mm',                               '25 25'],
            ['s ss',                               '50 50'],
            ['a A',                                'pm PM'],
            ['[the] DDDo [day of the year]',       'the 45º day of the year'],
            ['LTS',                                '15:25:50'],
            ['L',                                  '14/02/2010'],
            ['LL',                                 '14 de febreiro de 2010'],
            ['LLL',                                '14 de febreiro de 2010 15:25'],
            ['LLLL',                               'domingo, 14 de febreiro de 2010 15:25'],
            ['l',                                  '14/2/2010'],
            ['ll',                                 '14 de feb. de 2010'],
            ['lll',                                '14 de feb. de 2010 15:25'],
            ['llll',                               'dom., 14 de feb. de 2010 15:25']
        ],
        b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
        i;
    for (i = 0; i < a.length; i++) {
        assert.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
    }
});

test('format ordinal', function (assert) {
    assert.equal(moment([2011, 0, 1]).format('DDDo'), '1º', '1º');
    assert.equal(moment([2011, 0, 2]).format('DDDo'), '2º', '2º');
    assert.equal(moment([2011, 0, 3]).format('DDDo'), '3º', '3º');
    assert.equal(moment([2011, 0, 4]).format('DDDo'), '4º', '4º');
    assert.equal(moment([2011, 0, 5]).format('DDDo'), '5º', '5º');
    assert.equal(moment([2011, 0, 6]).format('DDDo'), '6º', '6º');
    assert.equal(moment([2011, 0, 7]).format('DDDo'), '7º', '7º');
    assert.equal(moment([2011, 0, 8]).format('DDDo'), '8º', '8º');
    assert.equal(moment([2011, 0, 9]).format('DDDo'), '9º', '9º');
    assert.equal(moment([2011, 0, 10]).format('DDDo'), '10º', '10º');

    assert.equal(moment([2011, 0, 11]).format('DDDo'), '11º', '11º');
    assert.equal(moment([2011, 0, 12]).format('DDDo'), '12º', '12º');
    assert.equal(moment([2011, 0, 13]).format('DDDo'), '13º', '13º');
    assert.equal(moment([2011, 0, 14]).format('DDDo'), '14º', '14º');
    assert.equal(moment([2011, 0, 15]).format('DDDo'), '15º', '15º');
    assert.equal(moment([2011, 0, 16]).format('DDDo'), '16º', '16º');
    assert.equal(moment([2011, 0, 17]).format('DDDo'), '17º', '17º');
    assert.equal(moment([2011, 0, 18]).format('DDDo'), '18º', '18º');
    assert.equal(moment([2011, 0, 19]).format('DDDo'), '19º', '19º');
    assert.equal(moment([2011, 0, 20]).format('DDDo'), '20º', '20º');

    assert.equal(moment([2011, 0, 21]).format('DDDo'), '21º', '21º');
    assert.equal(moment([2011, 0, 22]).format('DDDo'), '22º', '22º');
    assert.equal(moment([2011, 0, 23]).format('DDDo'), '23º', '23º');
    assert.equal(moment([2011, 0, 24]).format('DDDo'), '24º', '24º');
    assert.equal(moment([2011, 0, 25]).format('DDDo'), '25º', '25º');
    assert.equal(moment([2011, 0, 26]).format('DDDo'), '26º', '26º');
    assert.equal(moment([2011, 0, 27]).format('DDDo'), '27º', '27º');
    assert.equal(moment([2011, 0, 28]).format('DDDo'), '28º', '28º');
    assert.equal(moment([2011, 0, 29]).format('DDDo'), '29º', '29º');
    assert.equal(moment([2011, 0, 30]).format('DDDo'), '30º', '30º');

    assert.equal(moment([2011, 0, 31]).format('DDDo'), '31º', '31º');
});

test('format month', function (assert) {
    var expected = 'xaneiro xan._febreiro feb._marzo mar._abril abr._maio mai._xuño xuñ._xullo xul._agosto ago._setembro set._outubro out._novembro nov._decembro dec.'.split('_'), i;
    for (i = 0; i < expected.length; i++) {
        assert.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
    }
});

test('format week', function (assert) {
    var expected = 'domingo dom. do_luns lun. lu_martes mar. ma_mércores mér. mé_xoves xov. xo_venres ven. ve_sábado sáb. sá'.split('_'),
    i;
    for (i = 0; i < expected.length; i++) {
        assert.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
    }
});

test('from', function (assert) {
    var start = moment([2007, 1, 28]);

    assert.equal(start.from(moment([2007, 1, 28]).add({s: 44}), true),  'uns segundos', '44 seconds = a few seconds');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 45}), true),  'un minuto',      '45 seconds = a minute');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 89}), true),  'un minuto',      '89 seconds = a minute');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 90}), true),  '2 minutos',     '90 seconds = 2 minutes');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 44}), true),  '44 minutos',    '44 minutes = 44 minutes');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 45}), true),  'unha hora',       '45 minutes = an hour');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 89}), true),  'unha hora',       '89 minutes = an hour');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 90}), true),  '2 horas',       '90 minutes = 2 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 5}), true),   '5 horas',       '5 hours = 5 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 21}), true),  '21 horas',      '21 hours = 21 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 22}), true),  'un día',         '22 hours = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 35}), true),  'un día',         '35 hours = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 36}), true),  '2 días',        '36 hours = 2 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 1}), true),   'un día',         '1 day = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 5}), true),   '5 días',        '5 days = 5 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 25}), true),  '25 días',       '25 days = 25 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 26}), true),  'un mes',       '26 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 30}), true),  'un mes',       '30 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 43}), true),  'un mes',       '43 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 46}), true),  '2 meses',      '46 days = 2 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 74}), true),  '2 meses',      '75 days = 2 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 76}), true),  '3 meses',      '76 days = 3 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({M: 1}), true),   'un mes',       '1 month = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({M: 5}), true),   '5 meses',      '5 months = 5 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 345}), true), 'un ano',        '345 days = a year');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 548}), true), '2 anos',       '548 days = 2 years');
    assert.equal(start.from(moment([2007, 1, 28]).add({y: 1}), true),   'un ano',        '1 year = a year');
    assert.equal(start.from(moment([2007, 1, 28]).add({y: 5}), true),   '5 anos',       '5 years = 5 years');
});

test('suffix', function (assert) {
    assert.equal(moment(30000).from(0), 'nuns segundos',  'prefix');
    assert.equal(moment(0).from(30000), 'hai uns segundos', 'suffix');
});

test('now from now', function (assert) {
    assert.equal(moment().fromNow(), 'hai uns segundos',  'now from now should display as in the past');
});

test('fromNow', function (assert) {
    assert.equal(moment().add({s: 30}).fromNow(), 'nuns segundos', 'nuns segundos');
    assert.equal(moment().add({d: 5}).fromNow(), 'en 5 días', 'en 5 días');
});

test('calendar day', function (assert) {
    var a = moment().hours(12).minutes(0).seconds(0);

    assert.equal(moment(a).calendar(),                       'hoxe ás 12:00',  'today at the same time');
    assert.equal(moment(a).add({m: 25}).calendar(),          'hoxe ás 12:25',  'Now plus 25 min');
    assert.equal(moment(a).add({h: 1}).calendar(),           'hoxe ás 13:00',  'Now plus 1 hour');
    assert.equal(moment(a).add({d: 1}).calendar(),           'mañá ás 12:00',  'tomorrow at the same time');
    assert.equal(moment(a).add({d: 1, h : -1}).calendar(),   'mañá ás 11:00',   'tomorrow minus 1 hour');
    assert.equal(moment(a).subtract({h: 1}).calendar(),      'hoxe ás 11:00',   'Now minus 1 hour');
    assert.equal(moment(a).subtract({d: 1}).calendar(),      'onte á 12:00',   'yesterday at the same time');
});

test('calendar next week', function (assert) {
    var i, m;

    for (i = 2; i < 7; i++) {
        m = moment().add({d: i});
        assert.equal(m.calendar(),       m.format('dddd [' + ((m.hours() !== 1) ? 'ás' : 'a') + '] LT'),  'Today + ' + i + ' days current time');
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        assert.equal(m.calendar(),       m.format('dddd [' + ((m.hours() !== 1) ? 'ás' : 'a') + '] LT'),  'Today + ' + i + ' days beginning of day');
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        assert.equal(m.calendar(),       m.format('dddd [' + ((m.hours() !== 1) ? 'ás' : 'a') + '] LT'),  'Today + ' + i + ' days end of day');
    }
});

test('calendar last week', function (assert) {
    var i, m;
    for (i = 2; i < 7; i++) {
        m = moment().subtract({d: i});
        assert.equal(m.calendar(),       m.format('[o] dddd [pasado ' + ((m.hours() !== 1) ? 'ás' : 'a') + '] LT'),  'Today - ' + i + ' days current time');
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        assert.equal(m.calendar(),       m.format('[o] dddd [pasado ' + ((m.hours() !== 1) ? 'ás' : 'a') + '] LT'),  'Today - ' + i + ' days beginning of day');
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        assert.equal(m.calendar(),       m.format('[o] dddd [pasado ' + ((m.hours() !== 1) ? 'ás' : 'a') + '] LT'),  'Today - ' + i + ' days end of day');
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

test('regression tests', function (assert) {
    var lastWeek = moment().subtract({d: 4}).hours(1);
    assert.equal(lastWeek.calendar(), lastWeek.format('[o] dddd [pasado a] LT'), '1 o\'clock bug');
});

test('weeks year starting sunday formatted', function (assert) {
    assert.equal(moment([2012, 0,  1]).format('w ww wo'), '52 52 52º', 'Jan  1 2012 should be week 52');
    assert.equal(moment([2012, 0,  2]).format('w ww wo'),   '1 01 1º', 'Jan  2 2012 should be week 1');
    assert.equal(moment([2012, 0,  8]).format('w ww wo'),   '1 01 1º', 'Jan  8 2012 should be week 1');
    assert.equal(moment([2012, 0,  9]).format('w ww wo'),   '2 02 2º', 'Jan  9 2012 should be week 2');
    assert.equal(moment([2012, 0, 15]).format('w ww wo'),   '2 02 2º', 'Jan 15 2012 should be week 2');
});

