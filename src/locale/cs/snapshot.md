# Czech (cs) locale

## `format` and `parse`

| Title                           | Token string | Date                     | `format` result                                   | `parse` result           |
| ------------------------------- | ------------ | ------------------------ | ------------------------------------------------- | ------------------------ |
| Calendar year                   | yo           | 1987-02-11T12:13:14.015Z | 1987.                                             | 1987-01-01T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 5.                                                | 0005-01-01T00:00:00.000Z |
| Local week-numbering year       | Yo           | 1987-02-11T12:13:14.015Z | 1987.                                             | 1986-12-29T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 4.                                                | 0003-12-29T00:00:00.000Z |
| Quarter (formatting)            | Qo           | 2019-01-01T12:13:14.015Z | 1.                                                | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2.                                                | 2019-04-01T00:00:00.000Z |
|                                 | QQQ          | 2019-01-01T12:13:14.015Z | 1. čtvrtletí                                      | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2. čtvrtletí                                      | 2019-04-01T00:00:00.000Z |
|                                 | QQQQ         | 2019-01-01T12:13:14.015Z | 1. čtvrtletí                                      | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2. čtvrtletí                                      | 2019-04-01T00:00:00.000Z |
|                                 | QQQQQ        | 2019-01-01T12:13:14.015Z | 1                                                 | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2                                                 | 2019-04-01T00:00:00.000Z |
| Quarter (stand-alone)           | qo           | 2019-01-01T12:13:14.015Z | 1.                                                | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2.                                                | 2019-04-01T00:00:00.000Z |
|                                 | qqq          | 2019-01-01T12:13:14.015Z | 1. čtvrtletí                                      | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2. čtvrtletí                                      | 2019-04-01T00:00:00.000Z |
|                                 | qqqq         | 2019-01-01T12:13:14.015Z | 1. čtvrtletí                                      | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2. čtvrtletí                                      | 2019-04-01T00:00:00.000Z |
| Month (formatting)              | Mo           | 2019-02-11T12:13:14.015Z | 2.                                                | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 7.                                                | 2019-07-01T00:00:00.000Z |
|                                 | MMM          | 2019-02-11T12:13:14.015Z | úno                                               | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | čvc                                               | Invalid Date             |
|                                 | MMMM         | 2019-02-11T12:13:14.015Z | února                                             | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | července                                          | Invalid Date             |
|                                 | MMMMM        | 2019-02-11T12:13:14.015Z | Ú                                                 | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Č                                                 | 2019-06-01T00:00:00.000Z |
| Month (stand-alone)             | Lo           | 2019-02-11T12:13:14.015Z | 2.                                                | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 7.                                                | 2019-07-01T00:00:00.000Z |
|                                 | LLL          | 2019-02-11T12:13:14.015Z | úno                                               | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | čvc                                               | Invalid Date             |
|                                 | LLLL         | 2019-02-11T12:13:14.015Z | únor                                              | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | červenec                                          | Invalid Date             |
|                                 | LLLLL        | 2019-02-11T12:13:14.015Z | Ú                                                 | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Č                                                 | 2019-06-01T00:00:00.000Z |
| Local week of year              | wo           | 2019-01-01T12:13:14.015Z | 1.                                                | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 48.                                               | 2019-11-25T00:00:00.000Z |
| ISO week of year                | Io           | 2019-01-01T12:13:14.015Z | 1.                                                | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 48.                                               | 2019-11-25T00:00:00.000Z |
| Day of month                    | do           | 2019-02-11T12:13:14.015Z | 11.                                               | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-28T12:13:14.015Z | 28.                                               | 2019-02-28T00:00:00.000Z |
| Day of year                     | Do           | 2019-02-11T12:13:14.015Z | 42.                                               | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-12-31T12:13:14.015Z | 365.                                              | 2019-12-31T00:00:00.000Z |
| Day of week (formatting)        | E            | 2019-02-11T12:13:14.015Z | pon                                               | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | pát                                               | Invalid Date             |
|                                 | EE           | 2019-02-11T12:13:14.015Z | pon                                               | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | pát                                               | Invalid Date             |
|                                 | EEE          | 2019-02-11T12:13:14.015Z | pon                                               | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | pát                                               | Invalid Date             |
|                                 | EEEE         | 2019-02-11T12:13:14.015Z | pondělí                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | pátek                                             | 2019-02-15T00:00:00.000Z |
|                                 | EEEEE        | 2019-02-11T12:13:14.015Z | po                                                | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | pá                                                | Invalid Date             |
|                                 | EEEEEE       | 2019-02-11T12:13:14.015Z | po                                                | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | pá                                                | 2019-02-15T00:00:00.000Z |
| ISO day of week (formatting)    | io           | 2019-02-11T12:13:14.015Z | 1.                                                | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                                | 2019-02-15T00:00:00.000Z |
|                                 | iii          | 2019-02-11T12:13:14.015Z | pon                                               | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | pát                                               | Invalid Date             |
|                                 | iiii         | 2019-02-11T12:13:14.015Z | pondělí                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | pátek                                             | 2019-02-15T00:00:00.000Z |
|                                 | iiiii        | 2019-02-11T12:13:14.015Z | po                                                | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | pá                                                | Invalid Date             |
|                                 | iiiiii       | 2019-02-11T12:13:14.015Z | po                                                | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | pá                                                | 2019-02-15T00:00:00.000Z |
| Local day of week (formatting)  | eo           | 2019-02-11T12:13:14.015Z | 1.                                                | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                                | 2019-02-15T00:00:00.000Z |
|                                 | eee          | 2019-02-11T12:13:14.015Z | pon                                               | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | pát                                               | Invalid Date             |
|                                 | eeee         | 2019-02-11T12:13:14.015Z | pondělí                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | pátek                                             | 2019-02-15T00:00:00.000Z |
|                                 | eeeee        | 2019-02-11T12:13:14.015Z | po                                                | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | pá                                                | Invalid Date             |
|                                 | eeeeee       | 2019-02-11T12:13:14.015Z | po                                                | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | pá                                                | 2019-02-15T00:00:00.000Z |
| Local day of week (stand-alone) | co           | 2019-02-11T12:13:14.015Z | 1.                                                | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                                | 2019-02-15T00:00:00.000Z |
|                                 | ccc          | 2019-02-11T12:13:14.015Z | pon                                               | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | pát                                               | Invalid Date             |
|                                 | cccc         | 2019-02-11T12:13:14.015Z | pondělí                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | pátek                                             | 2019-02-15T00:00:00.000Z |
|                                 | ccccc        | 2019-02-11T12:13:14.015Z | po                                                | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | pá                                                | Invalid Date             |
|                                 | cccccc       | 2019-02-11T12:13:14.015Z | po                                                | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | pá                                                | 2019-02-15T00:00:00.000Z |
| AM, PM                          | a            | 2019-02-11T11:13:14.015Z | odp.                                              | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | odp.                                              | Invalid Date             |
|                                 | aa           | 2019-02-11T11:13:14.015Z | odp.                                              | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | odp.                                              | Invalid Date             |
|                                 | aaa          | 2019-02-11T11:13:14.015Z | odp.                                              | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | odp.                                              | Invalid Date             |
|                                 | aaaa         | 2019-02-11T11:13:14.015Z | odpoledne                                         | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | dopoledne                                         | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | dopoledne                                         | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | odpoledne                                         | 2019-02-11T12:00:00.000Z |
|                                 | aaaaa        | 2019-02-11T11:13:14.015Z | odp.                                              | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | odp.                                              | Invalid Date             |
| AM, PM, noon, midnight          | b            | 2019-02-11T11:13:14.015Z | odp.                                              | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | odp.                                              | Invalid Date             |
|                                 | bb           | 2019-02-11T11:13:14.015Z | odp.                                              | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | odp.                                              | Invalid Date             |
|                                 | bbb          | 2019-02-11T11:13:14.015Z | odp.                                              | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | odp.                                              | Invalid Date             |
|                                 | bbbb         | 2019-02-11T11:13:14.015Z | odpoledne                                         | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | dopoledne                                         | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | dopoledne                                         | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | odpoledne                                         | 2019-02-11T12:00:00.000Z |
|                                 | bbbbb        | 2019-02-11T11:13:14.015Z | odp.                                              | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | dop.                                              | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | odp.                                              | Invalid Date             |
| Flexible day period             | B            | 2019-02-11T11:13:14.015Z | ráno                                              | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | odpoledne                                         | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | večer                                             | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | noc                                               | Invalid Date             |
|                                 | BB           | 2019-02-11T11:13:14.015Z | ráno                                              | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | odpoledne                                         | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | večer                                             | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | noc                                               | Invalid Date             |
|                                 | BBB          | 2019-02-11T11:13:14.015Z | ráno                                              | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | odpoledne                                         | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | večer                                             | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | noc                                               | Invalid Date             |
|                                 | BBBB         | 2019-02-11T11:13:14.015Z | ráno                                              | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | odpoledne                                         | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | večer                                             | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | noc                                               | Invalid Date             |
|                                 | BBBBB        | 2019-02-11T11:13:14.015Z | ráno                                              | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | odpoledne                                         | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | večer                                             | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | noc                                               | Invalid Date             |
| Hour [1-12]                     | ho           | 2019-02-11T11:13:14.015Z | 11.                                               | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11.                                               | 2019-02-11T23:00:00.000Z |
| Hour [0-23]                     | Ho           | 2019-02-11T11:13:14.015Z | 11.                                               | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23.                                               | 2019-02-11T23:00:00.000Z |
| Hour [0-11]                     | Ko           | 2019-02-11T11:13:14.015Z | 11.                                               | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11.                                               | 2019-02-11T23:00:00.000Z |
| Hour [1-24]                     | ko           | 2019-02-11T11:13:14.015Z | 11.                                               | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23.                                               | 2019-02-11T23:00:00.000Z |
| Minute                          | mo           | 2019-01-01T12:01:14.015Z | 1.                                                | 2019-01-01T12:01:00.000Z |
|                                 |              | 2019-04-01T12:55:14.015Z | 55.                                               | 2019-04-01T12:55:00.000Z |
| Second                          | so           | 2019-01-01T12:13:01.015Z | 1.                                                | 2019-01-01T12:13:01.000Z |
|                                 |              | 2019-04-01T12:13:55.015Z | 55.                                               | 2019-04-01T12:13:55.000Z |
| Long localized date             | P            | 1987-02-11T12:13:14.015Z | 11.2.87                                           | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29.5.53                                           | 1453-05-29T00:00:00.000Z |
|                                 | PP           | 1987-02-11T12:13:14.015Z | 11.2.1987                                         | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29.5.1453                                         | 1453-05-29T00:00:00.000Z |
|                                 | PPP          | 1987-02-11T12:13:14.015Z | 11. února 1987                                    | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29. května 1453                                   | Invalid Date             |
|                                 | PPPP         | 1987-02-11T12:13:14.015Z | středa, 11. února 1987                            | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | neděle, 29. května 1453                           | Invalid Date             |
| Long localized time             | p            | 1987-02-11T12:13:14.015Z | 12:13 dop.                                        | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 11:59 dop.                                        | Invalid Date             |
|                                 | pp           | 1987-02-11T12:13:14.015Z | 12:13:14 dop.                                     | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 11:59:59 dop.                                     | Invalid Date             |
|                                 | ppp          | 1987-02-11T12:13:14.015Z | 12:13:14 dop. GMT+0                               | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 11:59:59 dop. GMT+0                               | Invalid Date             |
|                                 | pppp         | 1987-02-11T12:13:14.015Z | 12:13:14 dop. GMT+00:00                           | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 11:59:59 dop. GMT+00:00                           | Invalid Date             |
| Combination of date and time    | Pp           | 1987-02-11T12:13:14.015Z | 11.2.87, 12:13 dop.                               | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 29.5.53, 11:59 dop.                               | Invalid Date             |
|                                 | PPpp         | 1987-02-11T12:13:14.015Z | 11.2.1987, 12:13:14 dop.                          | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 29.5.1453, 11:59:59 dop.                          | Invalid Date             |
|                                 | PPPppp       | 1987-02-11T12:13:14.015Z | 11. února 1987 v 12:13:14 dop. GMT+0              | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 29. května 1453 v 11:59:59 dop. GMT+0             | Invalid Date             |
|                                 | PPPPpppp     | 1987-02-11T12:13:14.015Z | středa, 11. února 1987 v 12:13:14 dop. GMT+00:00  | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | neděle, 29. května 1453 v 11:59:59 dop. GMT+00:00 | Invalid Date             |

## `formatDistance`

If now is January 1st, 2000, 00:00.

| Date                     | Result            | `includeSeconds: true` | `addSuffix: true`         |
| ------------------------ | ----------------- | ---------------------- | ------------------------- |
| 2006-01-01T00:00:00.000Z | přibližně 6 roků  | přibližně 6 roků       | přibližně za 6 roků       |
| 2005-01-01T00:00:00.000Z | přibližně 5 roků  | přibližně 5 roků       | přibližně za 5 roků       |
| 2004-01-01T00:00:00.000Z | přibližně 4 roky  | přibližně 4 roky       | přibližně za 4 roky       |
| 2003-01-01T00:00:00.000Z | přibližně 3 roky  | přibližně 3 roky       | přibližně za 3 roky       |
| 2002-01-01T00:00:00.000Z | přibližně 2 roky  | přibližně 2 roky       | přibližně za 2 roky       |
| 2001-06-01T00:00:00.000Z | více než rok      | více než rok           | za více než rok           |
| 2001-02-01T00:00:00.000Z | přibližně rok     | přibližně rok          | přibližně za rok          |
| 2001-01-01T00:00:00.000Z | přibližně rok     | přibližně rok          | přibližně za rok          |
| 2000-06-01T00:00:00.000Z | 5 měsíců          | 5 měsíců               | za 5 měsíců               |
| 2000-03-01T00:00:00.000Z | 2 měsíce          | 2 měsíce               | za 2 měsíce               |
| 2000-02-01T00:00:00.000Z | přibližně měsíc   | přibližně měsíc        | přibližně za měsíc        |
| 2000-01-15T00:00:00.000Z | 14 dní            | 14 dní                 | za 14 dní                 |
| 2000-01-02T00:00:00.000Z | den               | den                    | za den                    |
| 2000-01-01T06:00:00.000Z | přibližně 6 hodin | přibližně 6 hodin      | přibližně za 6 hodin      |
| 2000-01-01T01:00:00.000Z | přibližně hodina  | přibližně hodina       | přibližně za hodinu       |
| 2000-01-01T00:45:00.000Z | přibližně hodina  | přibližně hodina       | přibližně za hodinu       |
| 2000-01-01T00:30:00.000Z | 30 minut          | 30 minut               | za 30 minut               |
| 2000-01-01T00:15:00.000Z | 15 minut          | 15 minut               | za 15 minut               |
| 2000-01-01T00:01:00.000Z | minuta            | minuta                 | za minutu                 |
| 2000-01-01T00:00:25.000Z | méně než minuta   | půl minuty             | za méně než minutu        |
| 2000-01-01T00:00:15.000Z | méně než minuta   | méně než 20 vteřin     | za méně než minutu        |
| 2000-01-01T00:00:05.000Z | méně než minuta   | méně než 10 vteřin     | za méně než minutu        |
| 2000-01-01T00:00:00.000Z | méně než minuta   | méně než 5 vteřin      | méně než minuta           |
| 1999-12-31T23:59:55.000Z | méně než minuta   | méně než 10 vteřin     | před méně než minutou     |
| 1999-12-31T23:59:45.000Z | méně než minuta   | méně než 20 vteřin     | před méně než minutou     |
| 1999-12-31T23:59:35.000Z | méně než minuta   | půl minuty             | před méně než minutou     |
| 1999-12-31T23:59:00.000Z | minuta            | minuta                 | před minutou              |
| 1999-12-31T23:45:00.000Z | 15 minut          | 15 minut               | před 15 minutami          |
| 1999-12-31T23:30:00.000Z | 30 minut          | 30 minut               | před 30 minutami          |
| 1999-12-31T23:15:00.000Z | přibližně hodina  | přibližně hodina       | přibližně před hodinou    |
| 1999-12-31T23:00:00.000Z | přibližně hodina  | přibližně hodina       | přibližně před hodinou    |
| 1999-12-31T18:00:00.000Z | přibližně 6 hodin | přibližně 6 hodin      | přibližně před 6 hodinami |
| 1999-12-30T00:00:00.000Z | 2 dni             | 2 dni                  | před 2 dny                |
| 1999-12-15T00:00:00.000Z | 17 dní            | 17 dní                 | před 17 dny               |
| 1999-12-01T00:00:00.000Z | přibližně měsíc   | přibližně měsíc        | přibližně před měsícem    |
| 1999-11-01T00:00:00.000Z | 2 měsíce          | 2 měsíce               | před 2 měsíci             |
| 1999-06-01T00:00:00.000Z | 7 měsíců          | 7 měsíců               | před 7 měsíci             |
| 1999-01-01T00:00:00.000Z | přibližně rok     | přibližně rok          | přibližně před rokem      |
| 1998-12-01T00:00:00.000Z | přibližně rok     | přibližně rok          | přibližně před rokem      |
| 1998-06-01T00:00:00.000Z | více než rok      | více než rok           | před více než rokem       |
| 1998-01-01T00:00:00.000Z | přibližně 2 roky  | přibližně 2 roky       | přibližně před 2 roky     |
| 1997-01-01T00:00:00.000Z | přibližně 3 roky  | přibližně 3 roky       | přibližně před 3 roky     |
| 1996-01-01T00:00:00.000Z | přibližně 4 roky  | přibližně 4 roky       | přibližně před 4 roky     |
| 1995-01-01T00:00:00.000Z | přibližně 5 roků  | přibližně 5 roků       | přibližně před 5 roky     |
| 1994-01-01T00:00:00.000Z | přibližně 6 roků  | přibližně 6 roků       | přibližně před 6 roky     |

## `formatDistanceStrict`

If now is January 1st, 2000, 00:00.

| Date                     | Result    | `addSuffix: true` | With forced unit (i.e. `hour`) |
| ------------------------ | --------- | ----------------- | ------------------------------ |
| 2006-01-01T00:00:00.000Z | 6 roků    | za 6 roků         | 52608 hodin                    |
| 2005-01-01T00:00:00.000Z | 5 roků    | za 5 roků         | 43848 hodin                    |
| 2004-01-01T00:00:00.000Z | 4 roky    | za 4 roky         | 35064 hodin                    |
| 2003-01-01T00:00:00.000Z | 3 roky    | za 3 roky         | 26304 hodin                    |
| 2002-01-01T00:00:00.000Z | 2 roky    | za 2 roky         | 17544 hodin                    |
| 2001-06-01T00:00:00.000Z | rok       | za rok            | 12408 hodin                    |
| 2001-02-01T00:00:00.000Z | rok       | za rok            | 9528 hodin                     |
| 2001-01-01T00:00:00.000Z | rok       | za rok            | 8784 hodin                     |
| 2000-06-01T00:00:00.000Z | 5 měsíců  | za 5 měsíců       | 3648 hodin                     |
| 2000-03-01T00:00:00.000Z | 2 měsíce  | za 2 měsíce       | 1440 hodin                     |
| 2000-02-01T00:00:00.000Z | měsíc     | za měsíc          | 744 hodin                      |
| 2000-01-15T00:00:00.000Z | 14 dní    | za 14 dní         | 336 hodin                      |
| 2000-01-02T00:00:00.000Z | den       | za den            | 24 hodin                       |
| 2000-01-01T06:00:00.000Z | 6 hodin   | za 6 hodin        | 6 hodin                        |
| 2000-01-01T01:00:00.000Z | hodina    | za hodinu         | hodina                         |
| 2000-01-01T00:45:00.000Z | 45 minut  | za 45 minut       | hodina                         |
| 2000-01-01T00:30:00.000Z | 30 minut  | za 30 minut       | hodina                         |
| 2000-01-01T00:15:00.000Z | 15 minut  | za 15 minut       | 0 hodiny                       |
| 2000-01-01T00:01:00.000Z | minuta    | za minutu         | 0 hodiny                       |
| 2000-01-01T00:00:25.000Z | 25 vteřin | za 25 vteřin      | 0 hodiny                       |
| 2000-01-01T00:00:15.000Z | 15 vteřin | za 15 vteřin      | 0 hodiny                       |
| 2000-01-01T00:00:05.000Z | 5 vteřin  | za 5 vteřin       | 0 hodiny                       |
| 2000-01-01T00:00:00.000Z | 0 vteřiny | 0 vteřiny         | 0 hodiny                       |
| 1999-12-31T23:59:55.000Z | 5 vteřin  | před 5 vteřinami  | 0 hodiny                       |
| 1999-12-31T23:59:45.000Z | 15 vteřin | před 15 vteřinami | 0 hodiny                       |
| 1999-12-31T23:59:35.000Z | 25 vteřin | před 25 vteřinami | 0 hodiny                       |
| 1999-12-31T23:59:00.000Z | minuta    | před minutou      | 0 hodiny                       |
| 1999-12-31T23:45:00.000Z | 15 minut  | před 15 minutami  | 0 hodiny                       |
| 1999-12-31T23:30:00.000Z | 30 minut  | před 30 minutami  | hodina                         |
| 1999-12-31T23:15:00.000Z | 45 minut  | před 45 minutami  | hodina                         |
| 1999-12-31T23:00:00.000Z | hodina    | před hodinou      | hodina                         |
| 1999-12-31T18:00:00.000Z | 6 hodin   | před 6 hodinami   | 6 hodin                        |
| 1999-12-30T00:00:00.000Z | 2 dni     | před 2 dny        | 48 hodin                       |
| 1999-12-15T00:00:00.000Z | 17 dní    | před 17 dny       | 408 hodin                      |
| 1999-12-01T00:00:00.000Z | měsíc     | před měsícem      | 744 hodin                      |
| 1999-11-01T00:00:00.000Z | 2 měsíce  | před 2 měsíci     | 1464 hodin                     |
| 1999-06-01T00:00:00.000Z | 7 měsíců  | před 7 měsíci     | 5136 hodin                     |
| 1999-01-01T00:00:00.000Z | rok       | před rokem        | 8760 hodin                     |
| 1998-12-01T00:00:00.000Z | rok       | před rokem        | 9504 hodin                     |
| 1998-06-01T00:00:00.000Z | 2 roky    | před 2 roky       | 13896 hodin                    |
| 1998-01-01T00:00:00.000Z | 2 roky    | před 2 roky       | 17520 hodin                    |
| 1997-01-01T00:00:00.000Z | 3 roky    | před 3 roky       | 26280 hodin                    |
| 1996-01-01T00:00:00.000Z | 4 roky    | před 4 roky       | 35064 hodin                    |
| 1995-01-01T00:00:00.000Z | 5 roků    | před 5 roky       | 43824 hodin                    |
| 1994-01-01T00:00:00.000Z | 6 roků    | před 6 roky       | 52584 hodin                    |

## `formatRelative`

If now is January 1st, 2000, 00:00.

| Date                     | Result                         |
| ------------------------ | ------------------------------ |
| 2000-01-10T00:00:00.000Z | 10.1.00                        |
| 2000-01-05T00:00:00.000Z | v středu o 12:00 odp.          |
| 2000-01-02T00:00:00.000Z | zítra v 12:00 odp.             |
| 2000-01-01T00:00:00.000Z | dnes v 12:00 odp.              |
| 1999-12-31T00:00:00.000Z | včera v 12:00 odp.             |
| 1999-12-27T00:00:00.000Z | poslední pondělí ve 12:00 odp. |
| 1999-12-21T00:00:00.000Z | 21.12.99                       |
