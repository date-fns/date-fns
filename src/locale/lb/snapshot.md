# Luxembourgish (lb) locale

## `format` and `parse`

| Title                           | Token string | Date                     | `format` result                                  | `parse` result           |
| ------------------------------- | ------------ | ------------------------ | ------------------------------------------------ | ------------------------ |
| Calendar year                   | yo           | 1987-02-11T12:13:14.015Z | 1987.                                            | 1987-01-01T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 5.                                               | 0005-01-01T00:00:00.000Z |
| Local week-numbering year       | Yo           | 1987-02-11T12:13:14.015Z | 1987.                                            | 1986-12-29T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 4.                                               | 0003-12-29T00:00:00.000Z |
| Quarter (formatting)            | Qo           | 2019-01-01T12:13:14.015Z | 1.                                               | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2.                                               | 2019-04-01T00:00:00.000Z |
|                                 | QQQ          | 2019-01-01T12:13:14.015Z | Q1                                               | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | Q2                                               | 2019-04-01T00:00:00.000Z |
|                                 | QQQQ         | 2019-01-01T12:13:14.015Z | 1. Quartal                                       | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2. Quartal                                       | 2019-04-01T00:00:00.000Z |
|                                 | QQQQQ        | 2019-01-01T12:13:14.015Z | 1                                                | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2                                                | 2019-04-01T00:00:00.000Z |
| Quarter (stand-alone)           | qo           | 2019-01-01T12:13:14.015Z | 1.                                               | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2.                                               | 2019-04-01T00:00:00.000Z |
|                                 | qqq          | 2019-01-01T12:13:14.015Z | Q1                                               | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | Q2                                               | 2019-04-01T00:00:00.000Z |
|                                 | qqqq         | 2019-01-01T12:13:14.015Z | 1. Quartal                                       | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2. Quartal                                       | 2019-04-01T00:00:00.000Z |
| Month (formatting)              | Mo           | 2019-02-11T12:13:14.015Z | 2.                                               | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 7.                                               | 2019-07-01T00:00:00.000Z |
|                                 | MMM          | 2019-02-11T12:13:14.015Z | Feb                                              | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Jul                                              | 2019-07-01T00:00:00.000Z |
|                                 | MMMM         | 2019-02-11T12:13:14.015Z | Februar                                          | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Juli                                             | 2019-07-01T00:00:00.000Z |
|                                 | MMMMM        | 2019-02-11T12:13:14.015Z | F                                                | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | J                                                | 2019-01-01T00:00:00.000Z |
| Month (stand-alone)             | Lo           | 2019-02-11T12:13:14.015Z | 2.                                               | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 7.                                               | 2019-07-01T00:00:00.000Z |
|                                 | LLL          | 2019-02-11T12:13:14.015Z | Feb                                              | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Jul                                              | 2019-07-01T00:00:00.000Z |
|                                 | LLLL         | 2019-02-11T12:13:14.015Z | Februar                                          | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Juli                                             | 2019-07-01T00:00:00.000Z |
|                                 | LLLLL        | 2019-02-11T12:13:14.015Z | F                                                | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | J                                                | 2019-01-01T00:00:00.000Z |
| Local week of year              | wo           | 2019-01-01T12:13:14.015Z | 1.                                               | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 48.                                              | 2019-11-25T00:00:00.000Z |
| ISO week of year                | Io           | 2019-01-01T12:13:14.015Z | 1.                                               | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 48.                                              | 2019-11-25T00:00:00.000Z |
| Day of month                    | do           | 2019-02-11T12:13:14.015Z | 11.                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-28T12:13:14.015Z | 28.                                              | 2019-02-28T00:00:00.000Z |
| Day of year                     | Do           | 2019-02-11T12:13:14.015Z | 42.                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-12-31T12:13:14.015Z | 365.                                             | 2019-12-31T00:00:00.000Z |
| Day of week (formatting)        | E            | 2019-02-11T12:13:14.015Z | Mé.                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Fr.                                              | 2019-02-15T00:00:00.000Z |
|                                 | EE           | 2019-02-11T12:13:14.015Z | Mé.                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Fr.                                              | 2019-02-15T00:00:00.000Z |
|                                 | EEE          | 2019-02-11T12:13:14.015Z | Mé.                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Fr.                                              | 2019-02-15T00:00:00.000Z |
|                                 | EEEE         | 2019-02-11T12:13:14.015Z | Méindeg                                          | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Freideg                                          | 2019-02-15T00:00:00.000Z |
|                                 | EEEEE        | 2019-02-11T12:13:14.015Z | M                                                | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | F                                                | 2019-02-15T00:00:00.000Z |
|                                 | EEEEEE       | 2019-02-11T12:13:14.015Z | Mé                                               | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Fr                                               | 2019-02-15T00:00:00.000Z |
| ISO day of week (formatting)    | io           | 2019-02-11T12:13:14.015Z | 1.                                               | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                               | 2019-02-15T00:00:00.000Z |
|                                 | iii          | 2019-02-11T12:13:14.015Z | Mé.                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Fr.                                              | 2019-02-15T00:00:00.000Z |
|                                 | iiii         | 2019-02-11T12:13:14.015Z | Méindeg                                          | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Freideg                                          | 2019-02-15T00:00:00.000Z |
|                                 | iiiii        | 2019-02-11T12:13:14.015Z | M                                                | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | F                                                | 2019-02-15T00:00:00.000Z |
|                                 | iiiiii       | 2019-02-11T12:13:14.015Z | Mé                                               | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Fr                                               | 2019-02-15T00:00:00.000Z |
| Local day of week (formatting)  | eo           | 2019-02-11T12:13:14.015Z | 1.                                               | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                               | 2019-02-15T00:00:00.000Z |
|                                 | eee          | 2019-02-11T12:13:14.015Z | Mé.                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Fr.                                              | 2019-02-15T00:00:00.000Z |
|                                 | eeee         | 2019-02-11T12:13:14.015Z | Méindeg                                          | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Freideg                                          | 2019-02-15T00:00:00.000Z |
|                                 | eeeee        | 2019-02-11T12:13:14.015Z | M                                                | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | F                                                | 2019-02-15T00:00:00.000Z |
|                                 | eeeeee       | 2019-02-11T12:13:14.015Z | Mé                                               | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Fr                                               | 2019-02-15T00:00:00.000Z |
| Local day of week (stand-alone) | co           | 2019-02-11T12:13:14.015Z | 1.                                               | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                               | 2019-02-15T00:00:00.000Z |
|                                 | ccc          | 2019-02-11T12:13:14.015Z | Mé.                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Fr.                                              | 2019-02-15T00:00:00.000Z |
|                                 | cccc         | 2019-02-11T12:13:14.015Z | Méindeg                                          | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Freideg                                          | 2019-02-15T00:00:00.000Z |
|                                 | ccccc        | 2019-02-11T12:13:14.015Z | M                                                | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | F                                                | 2019-02-15T00:00:00.000Z |
|                                 | cccccc       | 2019-02-11T12:13:14.015Z | Mé                                               | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Fr                                               | 2019-02-15T00:00:00.000Z |
| AM, PM                          | a            | 2019-02-11T11:13:14.015Z | moies                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | moies                                            | Invalid Date             |
|                                 | aa           | 2019-02-11T11:13:14.015Z | moies                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | moies                                            | Invalid Date             |
|                                 | aaa          | 2019-02-11T11:13:14.015Z | moies                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | moies                                            | Invalid Date             |
|                                 | aaaa         | 2019-02-11T11:13:14.015Z | moies                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | nomëttes                                         | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | nomëttes                                         | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | moies                                            | 2019-02-11T00:00:00.000Z |
|                                 | aaaaa        | 2019-02-11T11:13:14.015Z | mo.                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | nom.                                             | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | nom.                                             | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | mo.                                              | 2019-02-11T00:00:00.000Z |
| AM, PM, noon, midnight          | b            | 2019-02-11T11:13:14.015Z | moies                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | moies                                            | Invalid Date             |
|                                 | bb           | 2019-02-11T11:13:14.015Z | moies                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | moies                                            | Invalid Date             |
|                                 | bbb          | 2019-02-11T11:13:14.015Z | moies                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | moies                                            | Invalid Date             |
|                                 | bbbb         | 2019-02-11T11:13:14.015Z | moies                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | nomëttes                                         | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | nomëttes                                         | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | moies                                            | 2019-02-11T00:00:00.000Z |
|                                 | bbbbb        | 2019-02-11T11:13:14.015Z | mo.                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | nom.                                             | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | nom.                                             | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | mo.                                              | 2019-02-11T00:00:00.000Z |
| Flexible day period             | B            | 2019-02-11T11:13:14.015Z | moies                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | owes                                             | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | nuets                                            | 2019-02-11T12:00:00.000Z |
|                                 | BB           | 2019-02-11T11:13:14.015Z | moies                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | owes                                             | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | nuets                                            | 2019-02-11T12:00:00.000Z |
|                                 | BBB          | 2019-02-11T11:13:14.015Z | moies                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | owes                                             | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | nuets                                            | 2019-02-11T12:00:00.000Z |
|                                 | BBBB         | 2019-02-11T11:13:14.015Z | moies                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | nomëttes                                         | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | owes                                             | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | nuets                                            | 2019-02-11T12:00:00.000Z |
|                                 | BBBBB        | 2019-02-11T11:13:14.015Z | moies                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | nomëttes                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | owes                                             | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | nuets                                            | 2019-02-11T12:00:00.000Z |
| Hour [1-12]                     | ho           | 2019-02-11T11:13:14.015Z | 11.                                              | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11.                                              | 2019-02-11T23:00:00.000Z |
| Hour [0-23]                     | Ho           | 2019-02-11T11:13:14.015Z | 11.                                              | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23.                                              | 2019-02-11T23:00:00.000Z |
| Hour [0-11]                     | Ko           | 2019-02-11T11:13:14.015Z | 11.                                              | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11.                                              | 2019-02-11T23:00:00.000Z |
| Hour [1-24]                     | ko           | 2019-02-11T11:13:14.015Z | 11.                                              | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23.                                              | 2019-02-11T23:00:00.000Z |
| Minute                          | mo           | 2019-01-01T12:01:14.015Z | 1.                                               | 2019-01-01T12:01:00.000Z |
|                                 |              | 2019-04-01T12:55:14.015Z | 55.                                              | 2019-04-01T12:55:00.000Z |
| Second                          | so           | 2019-01-01T12:13:01.015Z | 1.                                               | 2019-01-01T12:13:01.000Z |
|                                 |              | 2019-04-01T12:13:55.015Z | 55.                                              | 2019-04-01T12:13:55.000Z |
| Long localized date             | P            | 1987-02-11T12:13:14.015Z | 11.02.87                                         | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29.05.53                                         | 1453-05-29T00:00:00.000Z |
|                                 | PP           | 1987-02-11T12:13:14.015Z | 11. Feb 1987                                     | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29. Mee 1453                                     | 1453-05-29T00:00:00.000Z |
|                                 | PPP          | 1987-02-11T12:13:14.015Z | 11. Februar 1987                                 | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29. Mee 1453                                     | 1453-05-29T00:00:00.000Z |
|                                 | PPPP         | 1987-02-11T12:13:14.015Z | Mëttwoch, 11. Februar 1987                       | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | Sonndeg, 29. Mee 1453                            | 1453-05-29T00:00:00.000Z |
| Long localized time             | p            | 1987-02-11T12:13:14.015Z | 12:13                                            | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59                                            | 1453-05-29T23:59:00.000Z |
|                                 | pp           | 1987-02-11T12:13:14.015Z | 12:13:14                                         | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59                                         | 1453-05-29T23:59:59.000Z |
|                                 | ppp          | 1987-02-11T12:13:14.015Z | 12:13:14 GMT+0                                   | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59 GMT+0                                   | Errored                  |
|                                 | pppp         | 1987-02-11T12:13:14.015Z | 12:13:14 GMT+00:00                               | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59 GMT+00:00                               | Errored                  |
| Combination of date and time    | Pp           | 1987-02-11T12:13:14.015Z | 11.02.87 12:13                                   | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29.05.53 23:59                                   | 1453-05-29T23:59:00.000Z |
|                                 | PPpp         | 1987-02-11T12:13:14.015Z | 11. Feb 1987 12:13:14                            | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29. Mee 1453 23:59:59                            | 1453-05-29T23:59:59.000Z |
|                                 | PPPppp       | 1987-02-11T12:13:14.015Z | 11. Februar 1987 um 12:13:14 GMT+0               | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 29. Mee 1453 um 23:59:59 GMT+0                   | Errored                  |
|                                 | PPPPpppp     | 1987-02-11T12:13:14.015Z | Mëttwoch, 11. Februar 1987 um 12:13:14 GMT+00:00 | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | Sonndeg, 29. Mee 1453 um 23:59:59 GMT+00:00      | Errored                  |

## `formatDistance`

If now is January 1st, 2000, 00:00.

| Date                     | Result                | `includeSeconds: true` | `addSuffix: true`            |
| ------------------------ | --------------------- | ---------------------- | ---------------------------- |
| 2006-01-01T00:00:00.000Z | ongeféier 6 Joer      | ongeféier 6 Joer       | an ongeféier 6 Joer          |
| 2005-01-01T00:00:00.000Z | ongeféier 5 Joer      | ongeféier 5 Joer       | an ongeféier 5 Joer          |
| 2004-01-01T00:00:00.000Z | ongeféier 4 Joer      | ongeféier 4 Joer       | an ongeféier 4 Joer          |
| 2003-01-01T00:00:00.000Z | ongeféier 3 Joer      | ongeféier 3 Joer       | an ongeféier 3 Joer          |
| 2002-01-01T00:00:00.000Z | ongeféier 2 Joer      | ongeféier 2 Joer       | an ongeféier 2 Joer          |
| 2001-06-01T00:00:00.000Z | méi wéi ee Joer       | méi wéi ee Joer        | a méi wéi engem Joer         |
| 2001-02-01T00:00:00.000Z | ongeféier ee Joer     | ongeféier ee Joer      | an ongeféier engem Joer      |
| 2001-01-01T00:00:00.000Z | ongeféier ee Joer     | ongeféier ee Joer      | an ongeféier engem Joer      |
| 2000-06-01T00:00:00.000Z | 5 Méint               | 5 Méint                | a 5 Méint                    |
| 2000-03-01T00:00:00.000Z | 2 Méint               | 2 Méint                | an 2 Méint                   |
| 2000-02-01T00:00:00.000Z | ongeféier ee Mount    | ongeféier ee Mount     | an ongeféier engem Mount     |
| 2000-01-15T00:00:00.000Z | 14 Deeg               | 14 Deeg                | a 14 Deeg                    |
| 2000-01-02T00:00:00.000Z | een Dag               | een Dag                | an engem Dag                 |
| 2000-01-01T06:00:00.000Z | ongeféier 6 Stonnen   | ongeféier 6 Stonnen    | an ongeféier 6 Stonnen       |
| 2000-01-01T01:00:00.000Z | ongeféier eng Stonn   | ongeféier eng Stonn    | an ongeféier enger Stonn     |
| 2000-01-01T00:45:00.000Z | ongeféier eng Stonn   | ongeféier eng Stonn    | an ongeféier enger Stonn     |
| 2000-01-01T00:30:00.000Z | 30 Minutten           | 30 Minutten            | an 30 Minutten               |
| 2000-01-01T00:15:00.000Z | 15 Minutten           | 15 Minutten            | a 15 Minutten                |
| 2000-01-01T00:01:00.000Z | eng Minutt            | eng Minutt             | an enger Minutt              |
| 2000-01-01T00:00:25.000Z | manner wéi eng Minutt | eng hallef Minutt      | a manner wéi enger Minutt    |
| 2000-01-01T00:00:15.000Z | manner wéi eng Minutt | manner wéi 20 Sekonnen | a manner wéi enger Minutt    |
| 2000-01-01T00:00:05.000Z | manner wéi eng Minutt | manner wéi 10 Sekonnen | a manner wéi enger Minutt    |
| 2000-01-01T00:00:00.000Z | manner wéi eng Minutt | manner wéi 5 Sekonnen  | viru manner wéi enger Minutt |
| 1999-12-31T23:59:55.000Z | manner wéi eng Minutt | manner wéi 10 Sekonnen | viru manner wéi enger Minutt |
| 1999-12-31T23:59:45.000Z | manner wéi eng Minutt | manner wéi 20 Sekonnen | viru manner wéi enger Minutt |
| 1999-12-31T23:59:35.000Z | manner wéi eng Minutt | eng hallef Minutt      | viru manner wéi enger Minutt |
| 1999-12-31T23:59:00.000Z | eng Minutt            | eng Minutt             | virun enger Minutt           |
| 1999-12-31T23:45:00.000Z | 15 Minutten           | 15 Minutten            | viru 15 Minutten             |
| 1999-12-31T23:30:00.000Z | 30 Minutten           | 30 Minutten            | virun 30 Minutten            |
| 1999-12-31T23:15:00.000Z | ongeféier eng Stonn   | ongeféier eng Stonn    | virun ongeféier enger Stonn  |
| 1999-12-31T23:00:00.000Z | ongeféier eng Stonn   | ongeféier eng Stonn    | virun ongeféier enger Stonn  |
| 1999-12-31T18:00:00.000Z | ongeféier 6 Stonnen   | ongeféier 6 Stonnen    | virun ongeféier 6 Stonnen    |
| 1999-12-30T00:00:00.000Z | 2 Deeg                | 2 Deeg                 | virun 2 Deeg                 |
| 1999-12-15T00:00:00.000Z | 17 Deeg               | 17 Deeg                | viru 17 Deeg                 |
| 1999-12-01T00:00:00.000Z | ongeféier ee Mount    | ongeféier ee Mount     | virun ongeféier engem Mount  |
| 1999-11-01T00:00:00.000Z | 2 Méint               | 2 Méint                | virun 2 Méint                |
| 1999-06-01T00:00:00.000Z | 7 Méint               | 7 Méint                | viru 7 Méint                 |
| 1999-01-01T00:00:00.000Z | ongeféier ee Joer     | ongeféier ee Joer      | virun ongeféier engem Joer   |
| 1998-12-01T00:00:00.000Z | ongeféier ee Joer     | ongeféier ee Joer      | virun ongeféier engem Joer   |
| 1998-06-01T00:00:00.000Z | méi wéi ee Joer       | méi wéi ee Joer        | viru méi wéi engem Joer      |
| 1998-01-01T00:00:00.000Z | ongeféier 2 Joer      | ongeféier 2 Joer       | virun ongeféier 2 Joer       |
| 1997-01-01T00:00:00.000Z | ongeféier 3 Joer      | ongeféier 3 Joer       | virun ongeféier 3 Joer       |
| 1996-01-01T00:00:00.000Z | ongeféier 4 Joer      | ongeféier 4 Joer       | virun ongeféier 4 Joer       |
| 1995-01-01T00:00:00.000Z | ongeféier 5 Joer      | ongeféier 5 Joer       | virun ongeféier 5 Joer       |
| 1994-01-01T00:00:00.000Z | ongeféier 6 Joer      | ongeféier 6 Joer       | virun ongeféier 6 Joer       |

## `formatDistanceStrict`

If now is January 1st, 2000, 00:00.

| Date                     | Result      | `addSuffix: true`  | With forced unit (i.e. `hour`) |
| ------------------------ | ----------- | ------------------ | ------------------------------ |
| 2006-01-01T00:00:00.000Z | 6 Joer      | a 6 Joer           | 52608 Stonnen                  |
| 2005-01-01T00:00:00.000Z | 5 Joer      | a 5 Joer           | 43848 Stonnen                  |
| 2004-01-01T00:00:00.000Z | 4 Joer      | a 4 Joer           | 35064 Stonnen                  |
| 2003-01-01T00:00:00.000Z | 3 Joer      | an 3 Joer          | 26304 Stonnen                  |
| 2002-01-01T00:00:00.000Z | 2 Joer      | an 2 Joer          | 17544 Stonnen                  |
| 2001-06-01T00:00:00.000Z | ee Joer     | an engem Joer      | 12408 Stonnen                  |
| 2001-02-01T00:00:00.000Z | ee Joer     | an engem Joer      | 9528 Stonnen                   |
| 2001-01-01T00:00:00.000Z | ee Joer     | an engem Joer      | 8784 Stonnen                   |
| 2000-06-01T00:00:00.000Z | 5 Méint     | a 5 Méint          | 3648 Stonnen                   |
| 2000-03-01T00:00:00.000Z | 2 Méint     | an 2 Méint         | 1440 Stonnen                   |
| 2000-02-01T00:00:00.000Z | ee Mount    | an engem Mount     | 744 Stonnen                    |
| 2000-01-15T00:00:00.000Z | 14 Deeg     | a 14 Deeg          | 336 Stonnen                    |
| 2000-01-02T00:00:00.000Z | een Dag     | an engem Dag       | 24 Stonnen                     |
| 2000-01-01T06:00:00.000Z | 6 Stonnen   | a 6 Stonnen        | 6 Stonnen                      |
| 2000-01-01T01:00:00.000Z | eng Stonn   | an enger Stonn     | eng Stonn                      |
| 2000-01-01T00:45:00.000Z | 45 Minutten | a 45 Minutten      | eng Stonn                      |
| 2000-01-01T00:30:00.000Z | 30 Minutten | an 30 Minutten     | eng Stonn                      |
| 2000-01-01T00:15:00.000Z | 15 Minutten | a 15 Minutten      | 0 Stonnen                      |
| 2000-01-01T00:01:00.000Z | eng Minutt  | an enger Minutt    | 0 Stonnen                      |
| 2000-01-01T00:00:25.000Z | 25 Sekonnen | a 25 Sekonnen      | 0 Stonnen                      |
| 2000-01-01T00:00:15.000Z | 15 Sekonnen | a 15 Sekonnen      | 0 Stonnen                      |
| 2000-01-01T00:00:05.000Z | 5 Sekonnen  | a 5 Sekonnen       | 0 Stonnen                      |
| 2000-01-01T00:00:00.000Z | 0 Sekonnen  | virun 0 Sekonnen   | 0 Stonnen                      |
| 1999-12-31T23:59:55.000Z | 5 Sekonnen  | viru 5 Sekonnen    | 0 Stonnen                      |
| 1999-12-31T23:59:45.000Z | 15 Sekonnen | viru 15 Sekonnen   | 0 Stonnen                      |
| 1999-12-31T23:59:35.000Z | 25 Sekonnen | viru 25 Sekonnen   | 0 Stonnen                      |
| 1999-12-31T23:59:00.000Z | eng Minutt  | virun enger Minutt | 0 Stonnen                      |
| 1999-12-31T23:45:00.000Z | 15 Minutten | viru 15 Minutten   | 0 Stonnen                      |
| 1999-12-31T23:30:00.000Z | 30 Minutten | virun 30 Minutten  | eng Stonn                      |
| 1999-12-31T23:15:00.000Z | 45 Minutten | viru 45 Minutten   | eng Stonn                      |
| 1999-12-31T23:00:00.000Z | eng Stonn   | virun enger Stonn  | eng Stonn                      |
| 1999-12-31T18:00:00.000Z | 6 Stonnen   | viru 6 Stonnen     | 6 Stonnen                      |
| 1999-12-30T00:00:00.000Z | 2 Deeg      | virun 2 Deeg       | 48 Stonnen                     |
| 1999-12-15T00:00:00.000Z | 17 Deeg     | viru 17 Deeg       | 408 Stonnen                    |
| 1999-12-01T00:00:00.000Z | ee Mount    | virun engem Mount  | 744 Stonnen                    |
| 1999-11-01T00:00:00.000Z | 2 Méint     | virun 2 Méint      | 1464 Stonnen                   |
| 1999-06-01T00:00:00.000Z | 7 Méint     | viru 7 Méint       | 5136 Stonnen                   |
| 1999-01-01T00:00:00.000Z | ee Joer     | virun engem Joer   | 8760 Stonnen                   |
| 1998-12-01T00:00:00.000Z | ee Joer     | virun engem Joer   | 9504 Stonnen                   |
| 1998-06-01T00:00:00.000Z | 2 Joer      | virun 2 Joer       | 13896 Stonnen                  |
| 1998-01-01T00:00:00.000Z | 2 Joer      | virun 2 Joer       | 17520 Stonnen                  |
| 1997-01-01T00:00:00.000Z | 3 Joer      | virun 3 Joer       | 26280 Stonnen                  |
| 1996-01-01T00:00:00.000Z | 4 Joer      | viru 4 Joer        | 35064 Stonnen                  |
| 1995-01-01T00:00:00.000Z | 5 Joer      | viru 5 Joer        | 43824 Stonnen                  |
| 1994-01-01T00:00:00.000Z | 6 Joer      | viru 6 Joer        | 52584 Stonnen                  |

## `formatRelative`

If now is January 1st, 2000, 00:00.

| Date                     | Result                   |
| ------------------------ | ------------------------ |
| 2000-01-10T00:00:00.000Z | 10.01.00                 |
| 2000-01-05T00:00:00.000Z | Mëttwoch um 00:00        |
| 2000-01-02T00:00:00.000Z | moien um 00:00           |
| 2000-01-01T00:00:00.000Z | haut um 00:00            |
| 1999-12-31T00:00:00.000Z | gëschter um 00:00        |
| 1999-12-27T00:00:00.000Z | läschte Méindeg um 00:00 |
| 1999-12-21T00:00:00.000Z | 21.12.99                 |
