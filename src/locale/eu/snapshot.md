# Basque (eu) locale

## `format` and `parse`

| Title                           | Token string | Date                     | `format` result                                       | `parse` result           |
| ------------------------------- | ------------ | ------------------------ | ----------------------------------------------------- | ------------------------ |
| Calendar year                   | yo           | 1987-02-11T12:13:14.015Z | 1987.                                                 | 1987-01-01T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 5.                                                    | 0005-01-01T00:00:00.000Z |
| Local week-numbering year       | Yo           | 1987-02-11T12:13:14.015Z | 1987.                                                 | 1986-12-29T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 5.                                                    | 0004-12-27T00:00:00.000Z |
| Quarter (formatting)            | Qo           | 2019-01-01T12:13:14.015Z | 1.                                                    | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2.                                                    | 2019-04-01T00:00:00.000Z |
|                                 | QQQ          | 2019-01-01T12:13:14.015Z | 1H                                                    | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2H                                                    | 2019-04-01T00:00:00.000Z |
|                                 | QQQQ         | 2019-01-01T12:13:14.015Z | 1. hiruhilekoa                                        | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2. hiruhilekoa                                        | 2019-04-01T00:00:00.000Z |
|                                 | QQQQQ        | 2019-01-01T12:13:14.015Z | 1                                                     | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2                                                     | 2019-04-01T00:00:00.000Z |
| Quarter (stand-alone)           | qo           | 2019-01-01T12:13:14.015Z | 1.                                                    | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2.                                                    | 2019-04-01T00:00:00.000Z |
|                                 | qqq          | 2019-01-01T12:13:14.015Z | 1H                                                    | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2H                                                    | 2019-04-01T00:00:00.000Z |
|                                 | qqqq         | 2019-01-01T12:13:14.015Z | 1. hiruhilekoa                                        | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2. hiruhilekoa                                        | 2019-04-01T00:00:00.000Z |
| Month (formatting)              | Mo           | 2019-02-11T12:13:14.015Z | 2.                                                    | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 7.                                                    | 2019-07-01T00:00:00.000Z |
|                                 | MMM          | 2019-02-11T12:13:14.015Z | ots                                                   | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | uzt                                                   | 2019-07-01T00:00:00.000Z |
|                                 | MMMM         | 2019-02-11T12:13:14.015Z | otsaila                                               | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | uztaila                                               | 2019-07-01T00:00:00.000Z |
|                                 | MMMMM        | 2019-02-11T12:13:14.015Z | o                                                     | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | u                                                     | 2019-01-01T00:00:00.000Z |
| Month (stand-alone)             | Lo           | 2019-02-11T12:13:14.015Z | 2.                                                    | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 7.                                                    | 2019-07-01T00:00:00.000Z |
|                                 | LLL          | 2019-02-11T12:13:14.015Z | ots                                                   | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | uzt                                                   | 2019-07-01T00:00:00.000Z |
|                                 | LLLL         | 2019-02-11T12:13:14.015Z | otsaila                                               | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | uztaila                                               | 2019-07-01T00:00:00.000Z |
|                                 | LLLLL        | 2019-02-11T12:13:14.015Z | o                                                     | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | u                                                     | 2019-01-01T00:00:00.000Z |
| Local week of year              | wo           | 2019-01-01T12:13:14.015Z | 1.                                                    | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 48.                                                   | 2019-11-25T00:00:00.000Z |
| ISO week of year                | Io           | 2019-01-01T12:13:14.015Z | 1.                                                    | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 48.                                                   | 2019-11-25T00:00:00.000Z |
| Day of month                    | do           | 2019-02-11T12:13:14.015Z | 11.                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-28T12:13:14.015Z | 28.                                                   | 2019-02-28T00:00:00.000Z |
| Day of year                     | Do           | 2019-02-11T12:13:14.015Z | 42.                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-12-31T12:13:14.015Z | 365.                                                  | 2019-12-31T00:00:00.000Z |
| Day of week (formatting)        | E            | 2019-02-11T12:13:14.015Z | ast                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | ost                                                   | 2019-02-14T00:00:00.000Z |
|                                 | EE           | 2019-02-11T12:13:14.015Z | ast                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | ost                                                   | 2019-02-14T00:00:00.000Z |
|                                 | EEE          | 2019-02-11T12:13:14.015Z | ast                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | ost                                                   | 2019-02-14T00:00:00.000Z |
|                                 | EEEE         | 2019-02-11T12:13:14.015Z | astelehena                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | ostirala                                              | 2019-02-15T00:00:00.000Z |
|                                 | EEEEE        | 2019-02-11T12:13:14.015Z | a                                                     | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | o                                                     | 2019-02-14T00:00:00.000Z |
|                                 | EEEEEE       | 2019-02-11T12:13:14.015Z | al                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | or                                                    | 2019-02-15T00:00:00.000Z |
| ISO day of week (formatting)    | io           | 2019-02-11T12:13:14.015Z | 1.                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                                    | 2019-02-15T00:00:00.000Z |
|                                 | iii          | 2019-02-11T12:13:14.015Z | ast                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | ost                                                   | 2019-02-14T00:00:00.000Z |
|                                 | iiii         | 2019-02-11T12:13:14.015Z | astelehena                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | ostirala                                              | 2019-02-15T00:00:00.000Z |
|                                 | iiiii        | 2019-02-11T12:13:14.015Z | a                                                     | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | o                                                     | 2019-02-14T00:00:00.000Z |
|                                 | iiiiii       | 2019-02-11T12:13:14.015Z | al                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | or                                                    | 2019-02-15T00:00:00.000Z |
| Local day of week (formatting)  | eo           | 2019-02-11T12:13:14.015Z | 1.                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                                    | 2019-02-15T00:00:00.000Z |
|                                 | eee          | 2019-02-11T12:13:14.015Z | ast                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | ost                                                   | 2019-02-14T00:00:00.000Z |
|                                 | eeee         | 2019-02-11T12:13:14.015Z | astelehena                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | ostirala                                              | 2019-02-15T00:00:00.000Z |
|                                 | eeeee        | 2019-02-11T12:13:14.015Z | a                                                     | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | o                                                     | 2019-02-14T00:00:00.000Z |
|                                 | eeeeee       | 2019-02-11T12:13:14.015Z | al                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | or                                                    | 2019-02-15T00:00:00.000Z |
| Local day of week (stand-alone) | co           | 2019-02-11T12:13:14.015Z | 1.                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                                    | 2019-02-15T00:00:00.000Z |
|                                 | ccc          | 2019-02-11T12:13:14.015Z | ast                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | ost                                                   | 2019-02-14T00:00:00.000Z |
|                                 | cccc         | 2019-02-11T12:13:14.015Z | astelehena                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | ostirala                                              | 2019-02-15T00:00:00.000Z |
|                                 | ccccc        | 2019-02-11T12:13:14.015Z | a                                                     | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | o                                                     | 2019-02-14T00:00:00.000Z |
|                                 | cccccc       | 2019-02-11T12:13:14.015Z | al                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | or                                                    | 2019-02-15T00:00:00.000Z |
| AM, PM                          | a            | 2019-02-11T11:13:14.015Z | AM                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                    | 2019-02-11T00:00:00.000Z |
|                                 | aa           | 2019-02-11T11:13:14.015Z | AM                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                    | 2019-02-11T00:00:00.000Z |
|                                 | aaa          | 2019-02-11T11:13:14.015Z | AM                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                    | 2019-02-11T00:00:00.000Z |
|                                 | aaaa         | 2019-02-11T11:13:14.015Z | a.m.                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | p.m.                                                  | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | p.m.                                                  | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | a.m.                                                  | 2019-02-11T00:00:00.000Z |
|                                 | aaaaa        | 2019-02-11T11:13:14.015Z | a                                                     | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | p                                                     | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | p                                                     | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | a                                                     | 2019-02-11T00:00:00.000Z |
| AM, PM, noon, midnight          | b            | 2019-02-11T11:13:14.015Z | AM                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                    | 2019-02-11T00:00:00.000Z |
|                                 | bb           | 2019-02-11T11:13:14.015Z | AM                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                    | 2019-02-11T00:00:00.000Z |
|                                 | bbb          | 2019-02-11T11:13:14.015Z | AM                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                    | 2019-02-11T00:00:00.000Z |
|                                 | bbbb         | 2019-02-11T11:13:14.015Z | a.m.                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | p.m.                                                  | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | p.m.                                                  | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | a.m.                                                  | 2019-02-11T00:00:00.000Z |
|                                 | bbbbb        | 2019-02-11T11:13:14.015Z | a                                                     | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | p                                                     | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | p                                                     | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | a                                                     | 2019-02-11T00:00:00.000Z |
| Flexible day period             | B            | 2019-02-11T11:13:14.015Z | goizean                                               | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | arratsaldean                                          | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | arratsaldean                                          | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | gauean                                                | 2019-02-11T00:00:00.000Z |
|                                 | BB           | 2019-02-11T11:13:14.015Z | goizean                                               | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | arratsaldean                                          | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | arratsaldean                                          | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | gauean                                                | 2019-02-11T00:00:00.000Z |
|                                 | BBB          | 2019-02-11T11:13:14.015Z | goizean                                               | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | arratsaldean                                          | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | arratsaldean                                          | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | gauean                                                | 2019-02-11T00:00:00.000Z |
|                                 | BBBB         | 2019-02-11T11:13:14.015Z | goizean                                               | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | arratsaldean                                          | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | arratsaldean                                          | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | gauean                                                | 2019-02-11T00:00:00.000Z |
|                                 | BBBBB        | 2019-02-11T11:13:14.015Z | goizean                                               | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | arratsaldean                                          | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | arratsaldean                                          | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | gauean                                                | 2019-02-11T00:00:00.000Z |
| Hour [1-12]                     | ho           | 2019-02-11T11:13:14.015Z | 11.                                                   | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11.                                                   | 2019-02-11T23:00:00.000Z |
| Hour [0-23]                     | Ho           | 2019-02-11T11:13:14.015Z | 11.                                                   | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23.                                                   | 2019-02-11T23:00:00.000Z |
| Hour [0-11]                     | Ko           | 2019-02-11T11:13:14.015Z | 11.                                                   | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11.                                                   | 2019-02-11T23:00:00.000Z |
| Hour [1-24]                     | ko           | 2019-02-11T11:13:14.015Z | 11.                                                   | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23.                                                   | 2019-02-11T23:00:00.000Z |
| Minute                          | mo           | 2019-01-01T12:01:14.015Z | 1.                                                    | 2019-01-01T12:01:00.000Z |
|                                 |              | 2019-04-01T12:55:14.015Z | 55.                                                   | 2019-04-01T12:55:00.000Z |
| Second                          | so           | 2019-01-01T12:13:01.015Z | 1.                                                    | 2019-01-01T12:13:01.000Z |
|                                 |              | 2019-04-01T12:13:55.015Z | 55.                                                   | 2019-04-01T12:13:55.000Z |
| Long localized date             | P            | 1987-02-11T12:13:14.015Z | 11/02/1987                                            | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29/05/1453                                            | 1453-05-29T00:00:00.000Z |
|                                 | PP           | 1987-02-11T12:13:14.015Z | 11 ots 1987                                           | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 mai 1453                                           | 1453-05-29T00:00:00.000Z |
|                                 | PPP          | 1987-02-11T12:13:14.015Z | 11 de otsaila 1987                                    | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 de maiatza 1453                                    | 1453-05-29T00:00:00.000Z |
|                                 | PPPP         | 1987-02-11T12:13:14.015Z | asteazkena, 11 de otsaila 1987                        | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | igandea, 29 de maiatza 1453                           | 1453-05-29T00:00:00.000Z |
| Long localized time             | p            | 1987-02-11T12:13:14.015Z | 12:13                                                 | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59                                                 | 1453-05-29T23:59:00.000Z |
|                                 | pp           | 1987-02-11T12:13:14.015Z | 12:13:14                                              | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59                                              | 1453-05-29T23:59:59.000Z |
|                                 | ppp          | 1987-02-11T12:13:14.015Z | 12:13:14 GMT+0                                        | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59 GMT+0                                        | Errored                  |
|                                 | pppp         | 1987-02-11T12:13:14.015Z | 12:13:14 GMT+00:00                                    | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59 GMT+00:00                                    | Errored                  |
| Combination of date and time    | Pp           | 1987-02-11T12:13:14.015Z | 11/02/1987, 12:13                                     | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29/05/1453, 23:59                                     | 1453-05-29T23:59:00.000Z |
|                                 | PPpp         | 1987-02-11T12:13:14.015Z | 11 ots 1987, 12:13:14                                 | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 mai 1453, 23:59:59                                 | 1453-05-29T23:59:59.000Z |
|                                 | PPPppp       | 1987-02-11T12:13:14.015Z | 11 de otsaila 1987 tan 12:13:14 GMT+0                 | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 de maiatza 1453 tan 23:59:59 GMT+0                 | Errored                  |
|                                 | PPPPpppp     | 1987-02-11T12:13:14.015Z | asteazkena, 11 de otsaila 1987 tan 12:13:14 GMT+00:00 | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | igandea, 29 de maiatza 1453 tan 23:59:59 GMT+00:00    | Errored                  |

## `formatDistance`

If now is January 1st, 2000, 00:00.

| Date                     | Result                      | `includeSeconds: true`      | `addSuffix: true`                 |
| ------------------------ | --------------------------- | --------------------------- | --------------------------------- |
| 2006-01-01T00:00:00.000Z | 6 urte gutxi gorabehera     | 6 urte gutxi gorabehera     | en 6 urte gutxi gorabehera        |
| 2005-01-01T00:00:00.000Z | 5 urte gutxi gorabehera     | 5 urte gutxi gorabehera     | en 5 urte gutxi gorabehera        |
| 2004-01-01T00:00:00.000Z | 4 urte gutxi gorabehera     | 4 urte gutxi gorabehera     | en 4 urte gutxi gorabehera        |
| 2003-01-01T00:00:00.000Z | 3 urte gutxi gorabehera     | 3 urte gutxi gorabehera     | en 3 urte gutxi gorabehera        |
| 2002-01-01T00:00:00.000Z | 2 urte gutxi gorabehera     | 2 urte gutxi gorabehera     | en 2 urte gutxi gorabehera        |
| 2001-06-01T00:00:00.000Z | 1 urte baino gehiago        | 1 urte baino gehiago        | en 1 urte baino gehiago           |
| 2001-02-01T00:00:00.000Z | 1 urte gutxi gorabehera     | 1 urte gutxi gorabehera     | en 1 urte gutxi gorabehera        |
| 2001-01-01T00:00:00.000Z | 1 urte gutxi gorabehera     | 1 urte gutxi gorabehera     | en 1 urte gutxi gorabehera        |
| 2000-06-01T00:00:00.000Z | 5 hilabete                  | 5 hilabete                  | en 5 hilabete                     |
| 2000-03-01T00:00:00.000Z | 2 hilabete                  | 2 hilabete                  | en 2 hilabete                     |
| 2000-02-01T00:00:00.000Z | 1 hilabete gutxi gorabehera | 1 hilabete gutxi gorabehera | en 1 hilabete gutxi gorabehera    |
| 2000-01-15T00:00:00.000Z | 14 egun                     | 14 egun                     | en 14 egun                        |
| 2000-01-02T00:00:00.000Z | 1 egun                      | 1 egun                      | en 1 egun                         |
| 2000-01-01T06:00:00.000Z | 6 ordu gutxi gorabehera     | 6 ordu gutxi gorabehera     | en 6 ordu gutxi gorabehera        |
| 2000-01-01T01:00:00.000Z | 1 ordu gutxi gorabehera     | 1 ordu gutxi gorabehera     | en 1 ordu gutxi gorabehera        |
| 2000-01-01T00:45:00.000Z | 1 ordu gutxi gorabehera     | 1 ordu gutxi gorabehera     | en 1 ordu gutxi gorabehera        |
| 2000-01-01T00:30:00.000Z | 30 minutu                   | 30 minutu                   | en 30 minutu                      |
| 2000-01-01T00:15:00.000Z | 15 minutu                   | 15 minutu                   | en 15 minutu                      |
| 2000-01-01T00:01:00.000Z | 1 minutu                    | 1 minutu                    | en 1 minutu                       |
| 2000-01-01T00:00:25.000Z | minutu bat baino gutxiago   | minutu erdi                 | en minutu bat baino gutxiago      |
| 2000-01-01T00:00:15.000Z | minutu bat baino gutxiago   | 20 segundo baino gutxiago   | en minutu bat baino gutxiago      |
| 2000-01-01T00:00:05.000Z | minutu bat baino gutxiago   | 10 segundo baino gutxiago   | en minutu bat baino gutxiago      |
| 2000-01-01T00:00:00.000Z | minutu bat baino gutxiago   | 5 segundo baino gutxiago    | duela minutu bat baino gutxiago   |
| 1999-12-31T23:59:55.000Z | minutu bat baino gutxiago   | 10 segundo baino gutxiago   | duela minutu bat baino gutxiago   |
| 1999-12-31T23:59:45.000Z | minutu bat baino gutxiago   | 20 segundo baino gutxiago   | duela minutu bat baino gutxiago   |
| 1999-12-31T23:59:35.000Z | minutu bat baino gutxiago   | minutu erdi                 | duela minutu bat baino gutxiago   |
| 1999-12-31T23:59:00.000Z | 1 minutu                    | 1 minutu                    | duela 1 minutu                    |
| 1999-12-31T23:45:00.000Z | 15 minutu                   | 15 minutu                   | duela 15 minutu                   |
| 1999-12-31T23:30:00.000Z | 30 minutu                   | 30 minutu                   | duela 30 minutu                   |
| 1999-12-31T23:15:00.000Z | 1 ordu gutxi gorabehera     | 1 ordu gutxi gorabehera     | duela 1 ordu gutxi gorabehera     |
| 1999-12-31T23:00:00.000Z | 1 ordu gutxi gorabehera     | 1 ordu gutxi gorabehera     | duela 1 ordu gutxi gorabehera     |
| 1999-12-31T18:00:00.000Z | 6 ordu gutxi gorabehera     | 6 ordu gutxi gorabehera     | duela 6 ordu gutxi gorabehera     |
| 1999-12-30T00:00:00.000Z | 2 egun                      | 2 egun                      | duela 2 egun                      |
| 1999-12-15T00:00:00.000Z | 17 egun                     | 17 egun                     | duela 17 egun                     |
| 1999-12-01T00:00:00.000Z | 1 hilabete gutxi gorabehera | 1 hilabete gutxi gorabehera | duela 1 hilabete gutxi gorabehera |
| 1999-11-01T00:00:00.000Z | 2 hilabete                  | 2 hilabete                  | duela 2 hilabete                  |
| 1999-06-01T00:00:00.000Z | 7 hilabete                  | 7 hilabete                  | duela 7 hilabete                  |
| 1999-01-01T00:00:00.000Z | 1 urte gutxi gorabehera     | 1 urte gutxi gorabehera     | duela 1 urte gutxi gorabehera     |
| 1998-12-01T00:00:00.000Z | 1 urte gutxi gorabehera     | 1 urte gutxi gorabehera     | duela 1 urte gutxi gorabehera     |
| 1998-06-01T00:00:00.000Z | 1 urte baino gehiago        | 1 urte baino gehiago        | duela 1 urte baino gehiago        |
| 1998-01-01T00:00:00.000Z | 2 urte gutxi gorabehera     | 2 urte gutxi gorabehera     | duela 2 urte gutxi gorabehera     |
| 1997-01-01T00:00:00.000Z | 3 urte gutxi gorabehera     | 3 urte gutxi gorabehera     | duela 3 urte gutxi gorabehera     |
| 1996-01-01T00:00:00.000Z | 4 urte gutxi gorabehera     | 4 urte gutxi gorabehera     | duela 4 urte gutxi gorabehera     |
| 1995-01-01T00:00:00.000Z | 5 urte gutxi gorabehera     | 5 urte gutxi gorabehera     | duela 5 urte gutxi gorabehera     |
| 1994-01-01T00:00:00.000Z | 6 urte gutxi gorabehera     | 6 urte gutxi gorabehera     | duela 6 urte gutxi gorabehera     |

## `formatDistanceStrict`

If now is January 1st, 2000, 00:00.

| Date                     | Result     | `addSuffix: true` | With forced unit (i.e. `hour`) |
| ------------------------ | ---------- | ----------------- | ------------------------------ |
| 2006-01-01T00:00:00.000Z | 6 urte     | en 6 urte         | 52608 ordu                     |
| 2005-01-01T00:00:00.000Z | 5 urte     | en 5 urte         | 43848 ordu                     |
| 2004-01-01T00:00:00.000Z | 4 urte     | en 4 urte         | 35064 ordu                     |
| 2003-01-01T00:00:00.000Z | 3 urte     | en 3 urte         | 26304 ordu                     |
| 2002-01-01T00:00:00.000Z | 2 urte     | en 2 urte         | 17544 ordu                     |
| 2001-06-01T00:00:00.000Z | 1 urte     | en 1 urte         | 12408 ordu                     |
| 2001-02-01T00:00:00.000Z | 1 urte     | en 1 urte         | 9528 ordu                      |
| 2001-01-01T00:00:00.000Z | 1 urte     | en 1 urte         | 8784 ordu                      |
| 2000-06-01T00:00:00.000Z | 5 hilabete | en 5 hilabete     | 3648 ordu                      |
| 2000-03-01T00:00:00.000Z | 2 hilabete | en 2 hilabete     | 1440 ordu                      |
| 2000-02-01T00:00:00.000Z | 1 hilabete | en 1 hilabete     | 744 ordu                       |
| 2000-01-15T00:00:00.000Z | 14 egun    | en 14 egun        | 336 ordu                       |
| 2000-01-02T00:00:00.000Z | 1 egun     | en 1 egun         | 24 ordu                        |
| 2000-01-01T06:00:00.000Z | 6 ordu     | en 6 ordu         | 6 ordu                         |
| 2000-01-01T01:00:00.000Z | 1 ordu     | en 1 ordu         | 1 ordu                         |
| 2000-01-01T00:45:00.000Z | 45 minutu  | en 45 minutu      | 1 ordu                         |
| 2000-01-01T00:30:00.000Z | 30 minutu  | en 30 minutu      | 1 ordu                         |
| 2000-01-01T00:15:00.000Z | 15 minutu  | en 15 minutu      | 0 ordu                         |
| 2000-01-01T00:01:00.000Z | 1 minutu   | en 1 minutu       | 0 ordu                         |
| 2000-01-01T00:00:25.000Z | 25 segundo | en 25 segundo     | 0 ordu                         |
| 2000-01-01T00:00:15.000Z | 15 segundo | en 15 segundo     | 0 ordu                         |
| 2000-01-01T00:00:05.000Z | 5 segundo  | en 5 segundo      | 0 ordu                         |
| 2000-01-01T00:00:00.000Z | 0 segundo  | duela 0 segundo   | 0 ordu                         |
| 1999-12-31T23:59:55.000Z | 5 segundo  | duela 5 segundo   | 0 ordu                         |
| 1999-12-31T23:59:45.000Z | 15 segundo | duela 15 segundo  | 0 ordu                         |
| 1999-12-31T23:59:35.000Z | 25 segundo | duela 25 segundo  | 0 ordu                         |
| 1999-12-31T23:59:00.000Z | 1 minutu   | duela 1 minutu    | 0 ordu                         |
| 1999-12-31T23:45:00.000Z | 15 minutu  | duela 15 minutu   | 0 ordu                         |
| 1999-12-31T23:30:00.000Z | 30 minutu  | duela 30 minutu   | 1 ordu                         |
| 1999-12-31T23:15:00.000Z | 45 minutu  | duela 45 minutu   | 1 ordu                         |
| 1999-12-31T23:00:00.000Z | 1 ordu     | duela 1 ordu      | 1 ordu                         |
| 1999-12-31T18:00:00.000Z | 6 ordu     | duela 6 ordu      | 6 ordu                         |
| 1999-12-30T00:00:00.000Z | 2 egun     | duela 2 egun      | 48 ordu                        |
| 1999-12-15T00:00:00.000Z | 17 egun    | duela 17 egun     | 408 ordu                       |
| 1999-12-01T00:00:00.000Z | 1 hilabete | duela 1 hilabete  | 744 ordu                       |
| 1999-11-01T00:00:00.000Z | 2 hilabete | duela 2 hilabete  | 1464 ordu                      |
| 1999-06-01T00:00:00.000Z | 7 hilabete | duela 7 hilabete  | 5136 ordu                      |
| 1999-01-01T00:00:00.000Z | 1 urte     | duela 1 urte      | 8760 ordu                      |
| 1998-12-01T00:00:00.000Z | 1 urte     | duela 1 urte      | 9504 ordu                      |
| 1998-06-01T00:00:00.000Z | 2 urte     | duela 2 urte      | 13896 ordu                     |
| 1998-01-01T00:00:00.000Z | 2 urte     | duela 2 urte      | 17520 ordu                     |
| 1997-01-01T00:00:00.000Z | 3 urte     | duela 3 urte      | 26280 ordu                     |
| 1996-01-01T00:00:00.000Z | 4 urte     | duela 4 urte      | 35064 ordu                     |
| 1995-01-01T00:00:00.000Z | 5 urte     | duela 5 urte      | 43824 ordu                     |
| 1994-01-01T00:00:00.000Z | 6 urte     | duela 6 urte      | 52584 ordu                     |

## `formatRelative`

If now is January 1st, 2000, 00:00.

| Date                     | Result                     |
| ------------------------ | -------------------------- |
| 2000-01-10T00:00:00.000Z | 10/01/2000                 |
| 2000-01-05T00:00:00.000Z | asteazkena, 00:00          |
| 2000-01-02T00:00:00.000Z | bihar, 00:00               |
| 2000-01-01T00:00:00.000Z | gaur, 00:00                |
| 1999-12-31T00:00:00.000Z | atzo, 00:00                |
| 1999-12-27T00:00:00.000Z | joan den astelehena, 00:00 |
| 1999-12-21T00:00:00.000Z | 21/12/1999                 |
