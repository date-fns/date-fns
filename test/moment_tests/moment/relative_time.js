import { module, test } from '../qunit';
import moment from '../../moment';

module('relative time');

test('default thresholds fromNow', function (assert) {
    var a = moment();

    // Seconds to minutes threshold
    a.subtract(44, 'seconds');
    assert.equal(a.fromNow(), 'a few seconds ago', 'Below default seconds to minutes threshold');
    a.subtract(1, 'seconds');
    assert.equal(a.fromNow(), 'a minute ago', 'Above default seconds to minutes threshold');

    // Minutes to hours threshold
    a = moment();
    a.subtract(44, 'minutes');
    assert.equal(a.fromNow(), '44 minutes ago', 'Below default minute to hour threshold');
    a.subtract(1, 'minutes');
    assert.equal(a.fromNow(), 'an hour ago', 'Above default minute to hour threshold');

    // Hours to days threshold
    a = moment();
    a.subtract(21, 'hours');
    assert.equal(a.fromNow(), '21 hours ago', 'Below default hours to day threshold');
    a.subtract(1, 'hours');
    assert.equal(a.fromNow(), 'a day ago', 'Above default hours to day threshold');

    // Days to month threshold
    a = moment();
    a.subtract(25, 'days');
    assert.equal(a.fromNow(), '25 days ago', 'Below default days to month (singular) threshold');
    a.subtract(1, 'days');
    assert.equal(a.fromNow(), 'a month ago', 'Above default days to month (singular) threshold');

    // months to year threshold
    a = moment();
    a.subtract(10, 'months');
    assert.equal(a.fromNow(), '10 months ago', 'Below default days to years threshold');
    a.subtract(1, 'month');
    assert.equal(a.fromNow(), 'a year ago', 'Above default days to years threshold');
});

test('default thresholds toNow', function (assert) {
    var a = moment();

    // Seconds to minutes threshold
    a.subtract(44, 'seconds');
    assert.equal(a.toNow(), 'in a few seconds', 'Below default seconds to minutes threshold');
    a.subtract(1, 'seconds');
    assert.equal(a.toNow(), 'in a minute', 'Above default seconds to minutes threshold');

    // Minutes to hours threshold
    a = moment();
    a.subtract(44, 'minutes');
    assert.equal(a.toNow(), 'in 44 minutes', 'Below default minute to hour threshold');
    a.subtract(1, 'minutes');
    assert.equal(a.toNow(), 'in an hour', 'Above default minute to hour threshold');

    // Hours to days threshold
    a = moment();
    a.subtract(21, 'hours');
    assert.equal(a.toNow(), 'in 21 hours', 'Below default hours to day threshold');
    a.subtract(1, 'hours');
    assert.equal(a.toNow(), 'in a day', 'Above default hours to day threshold');

    // Days to month threshold
    a = moment();
    a.subtract(25, 'days');
    assert.equal(a.toNow(), 'in 25 days', 'Below default days to month (singular) threshold');
    a.subtract(1, 'days');
    assert.equal(a.toNow(), 'in a month', 'Above default days to month (singular) threshold');

    // months to year threshold
    a = moment();
    a.subtract(10, 'months');
    assert.equal(a.toNow(), 'in 10 months', 'Below default days to years threshold');
    a.subtract(1, 'month');
    assert.equal(a.toNow(), 'in a year', 'Above default days to years threshold');
});

test('custom thresholds', function (assert) {
    var a;

    // Seconds to minute threshold, under 30
    moment.relativeTimeThreshold('s', 25);

    a = moment();
    a.subtract(24, 'seconds');
    assert.equal(a.fromNow(), 'a few seconds ago', 'Below custom seconds to minute threshold, s < 30');
    a.subtract(1, 'seconds');
    assert.equal(a.fromNow(), 'a minute ago', 'Above custom seconds to minute threshold, s < 30');

    // Seconds to minutes threshold
    moment.relativeTimeThreshold('s', 55);

    a = moment();
    a.subtract(54, 'seconds');
    assert.equal(a.fromNow(), 'a few seconds ago', 'Below custom seconds to minutes threshold');
    a.subtract(1, 'seconds');
    assert.equal(a.fromNow(), 'a minute ago', 'Above custom seconds to minutes threshold');

    moment.relativeTimeThreshold('s', 45);

    // Minutes to hours threshold
    moment.relativeTimeThreshold('m', 55);
    a = moment();
    a.subtract(54, 'minutes');
    assert.equal(a.fromNow(), '54 minutes ago', 'Below custom minutes to hours threshold');
    a.subtract(1, 'minutes');
    assert.equal(a.fromNow(), 'an hour ago', 'Above custom minutes to hours threshold');
    moment.relativeTimeThreshold('m', 45);

    // Hours to days threshold
    moment.relativeTimeThreshold('h', 24);
    a = moment();
    a.subtract(23, 'hours');
    assert.equal(a.fromNow(), '23 hours ago', 'Below custom hours to days threshold');
    a.subtract(1, 'hours');
    assert.equal(a.fromNow(), 'a day ago', 'Above custom hours to days threshold');
    moment.relativeTimeThreshold('h', 22);

    // Days to month threshold
    moment.relativeTimeThreshold('d', 28);
    a = moment();
    a.subtract(27, 'days');
    assert.equal(a.fromNow(), '27 days ago', 'Below custom days to month (singular) threshold');
    a.subtract(1, 'days');
    assert.equal(a.fromNow(), 'a month ago', 'Above custom days to month (singular) threshold');
    moment.relativeTimeThreshold('d', 26);

    // months to years threshold
    moment.relativeTimeThreshold('M', 9);
    a = moment();
    a.subtract(8, 'months');
    assert.equal(a.fromNow(), '8 months ago', 'Below custom days to years threshold');
    a.subtract(1, 'months');
    assert.equal(a.fromNow(), 'a year ago', 'Above custom days to years threshold');
    moment.relativeTimeThreshold('M', 11);
});

test('custom rounding', function (assert) {
    var roundingDefault = moment.relativeTimeRounding();

    // Round relative time evaluation down
    moment.relativeTimeRounding(Math.floor);

    moment.relativeTimeThreshold('s', 60);
    moment.relativeTimeThreshold('m', 60);
    moment.relativeTimeThreshold('h', 24);
    moment.relativeTimeThreshold('d', 31);
    moment.relativeTimeThreshold('M', 12);

    var a = moment();
    a.subtract({minutes: 59, seconds: 59});
    assert.equal(a.toNow(), 'in 59 minutes', 'Round down towards the nearest minute');

    a = moment();
    a.subtract({hours: 23, minutes: 59, seconds: 59});
    assert.equal(a.toNow(), 'in 23 hours', 'Round down towards the nearest hour');

    a = moment();
    a.subtract({days: 30, hours: 23, minutes: 59});
    assert.equal(a.toNow(), 'in 30 days', 'Round down towards the nearest day');

    a = moment();
    a.subtract({days: 364});
    assert.equal(a.toNow(), 'in 11 months', 'Round down towards the nearest month');

    a = moment();
    a.subtract({years: 1, days: 364});
    assert.equal(a.toNow(), 'in a year', 'Round down towards the nearest year');

    // Do not round relative time evaluation
    var retainValue = function (value) {
        return value.toFixed(3);
    };
    moment.relativeTimeRounding(retainValue);

    a = moment();
    a.subtract({hours: 39});
    assert.equal(a.toNow(), 'in 1.625 days', 'Round down towards the nearest year');

    // Restore defaults
    moment.relativeTimeThreshold('s', 45);
    moment.relativeTimeThreshold('m', 45);
    moment.relativeTimeThreshold('h', 22);
    moment.relativeTimeThreshold('d', 26);
    moment.relativeTimeThreshold('M', 11);
    moment.relativeTimeRounding(roundingDefault);
});

test('retrive rounding settings', function (assert) {
    moment.relativeTimeRounding(Math.round);
    var roundingFunction = moment.relativeTimeRounding();

    assert.equal(roundingFunction, Math.round, 'Can retrieve rounding setting');
});

test('retrive threshold settings', function (assert) {
    moment.relativeTimeThreshold('m', 45);
    var minuteThreshold = moment.relativeTimeThreshold('m');

    assert.equal(minuteThreshold, 45, 'Can retrieve minute setting');
});
