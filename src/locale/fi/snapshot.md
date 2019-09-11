# Finnish (fi) locale

## `format` and `parse`

| Title                           | Token string | Date                     | `format` result                                          | `parse` result           |
| ------------------------------- | ------------ | ------------------------ | -------------------------------------------------------- | ------------------------ |
| Calendar year                   | yo           | 1987-02-11T12:13:14.015Z | 1987.                                                    | Invalid Date             |
|                                 |              | 0005-01-01T12:13:14.015Z | 5.                                                       | Invalid Date             |
| Local week-numbering year       | Yo           | 1987-02-11T12:13:14.015Z | 1987.                                                    | Invalid Date             |
|                                 |              | 0005-01-01T12:13:14.015Z | 4.                                                       | Invalid Date             |
| Quarter (formatting)            | Qo           | 2019-01-01T12:13:14.015Z | 1.                                                       | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | 2.                                                       | Invalid Date             |
|                                 | QQQ          | 2019-01-01T12:13:14.015Z | Q1                                                       | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | Q2                                                       | 2019-04-01T00:00:00.000Z |
|                                 | QQQQ         | 2019-01-01T12:13:14.015Z | 1. kvartaali                                             | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | 2. kvartaali                                             | Invalid Date             |
|                                 | QQQQQ        | 2019-01-01T12:13:14.015Z | 1                                                        | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2                                                        | 2019-04-01T00:00:00.000Z |
| Quarter (stand-alone)           | qo           | 2019-01-01T12:13:14.015Z | 1.                                                       | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | 2.                                                       | Invalid Date             |
|                                 | qqq          | 2019-01-01T12:13:14.015Z | Q1                                                       | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | Q2                                                       | 2019-04-01T00:00:00.000Z |
|                                 | qqqq         | 2019-01-01T12:13:14.015Z | 1. kvartaali                                             | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | 2. kvartaali                                             | Invalid Date             |
| Month (formatting)              | Mo           | 2019-02-11T12:13:14.015Z | 2.                                                       | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | 7.                                                       | Invalid Date             |
|                                 | MMM          | 2019-02-11T12:13:14.015Z | helmi                                                    | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | heinä                                                    | Invalid Date             |
|                                 | MMMM         | 2019-02-11T12:13:14.015Z | helmikuuta                                               | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | heinäkuuta                                               | Invalid Date             |
|                                 | MMMMM        | 2019-02-11T12:13:14.015Z | H                                                        | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | H                                                        | Invalid Date             |
| Month (stand-alone)             | Lo           | 2019-02-11T12:13:14.015Z | 2.                                                       | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | 7.                                                       | Invalid Date             |
|                                 | LLL          | 2019-02-11T12:13:14.015Z | helmi                                                    | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | heinä                                                    | Invalid Date             |
|                                 | LLLL         | 2019-02-11T12:13:14.015Z | helmikuu                                                 | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | heinäkuu                                                 | Invalid Date             |
|                                 | LLLLL        | 2019-02-11T12:13:14.015Z | H                                                        | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | H                                                        | Invalid Date             |
| Local week of year              | wo           | 2019-01-01T12:13:14.015Z | 1.                                                       | Invalid Date             |
|                                 |              | 2019-12-01T12:13:14.015Z | 48.                                                      | Invalid Date             |
| ISO week of year                | Io           | 2019-01-01T12:13:14.015Z | 1.                                                       | Invalid Date             |
|                                 |              | 2019-12-01T12:13:14.015Z | 48.                                                      | Invalid Date             |
| Day of month                    | do           | 2019-02-11T12:13:14.015Z | 11.                                                      | Invalid Date             |
|                                 |              | 2019-02-28T12:13:14.015Z | 28.                                                      | Invalid Date             |
| Day of year                     | Do           | 2019-02-11T12:13:14.015Z | 42.                                                      | Invalid Date             |
|                                 |              | 2019-12-31T12:13:14.015Z | 365.                                                     | Invalid Date             |
| Day of week (formatting)        | E            | 2019-02-11T12:13:14.015Z | maan.                                                    | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | perj.                                                    | Invalid Date             |
|                                 | EE           | 2019-02-11T12:13:14.015Z | maan.                                                    | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | perj.                                                    | Invalid Date             |
|                                 | EEE          | 2019-02-11T12:13:14.015Z | maan.                                                    | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | perj.                                                    | Invalid Date             |
|                                 | EEEE         | 2019-02-11T12:13:14.015Z | maanantaina                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | perjantaina                                              | Invalid Date             |
|                                 | EEEEE        | 2019-02-11T12:13:14.015Z | M                                                        | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | P                                                        | Invalid Date             |
|                                 | EEEEEE       | 2019-02-11T12:13:14.015Z | ma                                                       | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | pe                                                       | Invalid Date             |
| ISO day of week (formatting)    | io           | 2019-02-11T12:13:14.015Z | 1.                                                       | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                                       | Invalid Date             |
|                                 | iii          | 2019-02-11T12:13:14.015Z | maan.                                                    | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | perj.                                                    | Invalid Date             |
|                                 | iiii         | 2019-02-11T12:13:14.015Z | maanantaina                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | perjantaina                                              | Invalid Date             |
|                                 | iiiii        | 2019-02-11T12:13:14.015Z | M                                                        | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | P                                                        | Invalid Date             |
|                                 | iiiiii       | 2019-02-11T12:13:14.015Z | ma                                                       | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | pe                                                       | Invalid Date             |
| Local day of week (formatting)  | eo           | 2019-02-11T12:13:14.015Z | 1.                                                       | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                                       | Invalid Date             |
|                                 | eee          | 2019-02-11T12:13:14.015Z | maan.                                                    | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | perj.                                                    | Invalid Date             |
|                                 | eeee         | 2019-02-11T12:13:14.015Z | maanantaina                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | perjantaina                                              | Invalid Date             |
|                                 | eeeee        | 2019-02-11T12:13:14.015Z | M                                                        | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | P                                                        | Invalid Date             |
|                                 | eeeeee       | 2019-02-11T12:13:14.015Z | ma                                                       | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | pe                                                       | Invalid Date             |
| Local day of week (stand-alone) | co           | 2019-02-11T12:13:14.015Z | 1.                                                       | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                                       | Invalid Date             |
|                                 | ccc          | 2019-02-11T12:13:14.015Z | maan.                                                    | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | perj.                                                    | Invalid Date             |
|                                 | cccc         | 2019-02-11T12:13:14.015Z | maanantai                                                | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | perjantai                                                | Invalid Date             |
|                                 | ccccc        | 2019-02-11T12:13:14.015Z | M                                                        | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | P                                                        | Invalid Date             |
|                                 | cccccc       | 2019-02-11T12:13:14.015Z | ma                                                       | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | pe                                                       | Invalid Date             |
| AM, PM                          | a            | 2019-02-11T11:13:14.015Z | ap                                                       | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ap                                                       | Invalid Date             |
|                                 | aa           | 2019-02-11T11:13:14.015Z | ap                                                       | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ap                                                       | Invalid Date             |
|                                 | aaa          | 2019-02-11T11:13:14.015Z | ap                                                       | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ap                                                       | Invalid Date             |
|                                 | aaaa         | 2019-02-11T11:13:14.015Z | ap                                                       | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ap                                                       | Invalid Date             |
|                                 | aaaaa        | 2019-02-11T11:13:14.015Z | ap                                                       | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ap                                                       | Invalid Date             |
| AM, PM, noon, midnight          | b            | 2019-02-11T11:13:14.015Z | ap                                                       | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ap                                                       | Invalid Date             |
|                                 | bb           | 2019-02-11T11:13:14.015Z | ap                                                       | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ap                                                       | Invalid Date             |
|                                 | bbb          | 2019-02-11T11:13:14.015Z | ap                                                       | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ap                                                       | Invalid Date             |
|                                 | bbbb         | 2019-02-11T11:13:14.015Z | ap                                                       | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ap                                                       | Invalid Date             |
|                                 | bbbbb        | 2019-02-11T11:13:14.015Z | ap                                                       | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | ap                                                       | Invalid Date             |
| Flexible day period             | B            | 2019-02-11T11:13:14.015Z | ap                                                       | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | illalla                                                  | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | yöllä                                                    | Invalid Date             |
|                                 | BB           | 2019-02-11T11:13:14.015Z | ap                                                       | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | illalla                                                  | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | yöllä                                                    | Invalid Date             |
|                                 | BBB          | 2019-02-11T11:13:14.015Z | ap                                                       | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | illalla                                                  | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | yöllä                                                    | Invalid Date             |
|                                 | BBBB         | 2019-02-11T11:13:14.015Z | aamupäivällä                                             | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | iltapäivällä                                             | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | illalla                                                  | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | yöllä                                                    | Invalid Date             |
|                                 | BBBBB        | 2019-02-11T11:13:14.015Z | ap                                                       | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | ip                                                       | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | illalla                                                  | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | yöllä                                                    | Invalid Date             |
| Hour [1-12]                     | ho           | 2019-02-11T11:13:14.015Z | 11.                                                      | Invalid Date             |
|                                 |              | 2019-02-11T23:13:14.015Z | 11.                                                      | Invalid Date             |
| Hour [0-23]                     | Ho           | 2019-02-11T11:13:14.015Z | 11.                                                      | Invalid Date             |
|                                 |              | 2019-02-11T23:13:14.015Z | 23.                                                      | Invalid Date             |
| Hour [0-11]                     | Ko           | 2019-02-11T11:13:14.015Z | 11.                                                      | Invalid Date             |
|                                 |              | 2019-02-11T23:13:14.015Z | 11.                                                      | Invalid Date             |
| Hour [1-24]                     | ko           | 2019-02-11T11:13:14.015Z | 11.                                                      | Invalid Date             |
|                                 |              | 2019-02-11T23:13:14.015Z | 23.                                                      | Invalid Date             |
| Minute                          | mo           | 2019-01-01T12:01:14.015Z | 1.                                                       | Invalid Date             |
|                                 |              | 2019-04-01T12:55:14.015Z | 55.                                                      | Invalid Date             |
| Second                          | so           | 2019-01-01T12:13:01.015Z | 1.                                                       | Invalid Date             |
|                                 |              | 2019-04-01T12:13:55.015Z | 55.                                                      | Invalid Date             |
| Long localized date             | P            | 1987-02-11T12:13:14.015Z | 11.2.1987                                                | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29.5.1453                                                | 1453-05-29T00:00:00.000Z |
|                                 | PP           | 1987-02-11T12:13:14.015Z | 11. helmi 1987                                           | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 29. touko 1453                                           | Invalid Date             |
|                                 | PPP          | 1987-02-11T12:13:14.015Z | 11. helmikuuta 1987                                      | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 29. toukokuuta 1453                                      | Invalid Date             |
|                                 | PPPP         | 1987-02-11T12:13:14.015Z | keskiviikkona 11. helmikuuta 1987                        | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | sunnuntaina 29. toukokuuta 1453                          | Invalid Date             |
| Long localized time             | p            | 1987-02-11T12:13:14.015Z | 12.13                                                    | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23.59                                                    | 1453-05-29T23:59:00.000Z |
|                                 | pp           | 1987-02-11T12:13:14.015Z | 12.13.14                                                 | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23.59.59                                                 | 1453-05-29T23:59:59.000Z |
|                                 | ppp          | 1987-02-11T12:13:14.015Z | 12.13.14 GMT+0                                           | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 23.59.59 GMT+0                                           | Errored                  |
|                                 | pppp         | 1987-02-11T12:13:14.015Z | 12.13.14 GMT+00:00                                       | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 23.59.59 GMT+00:00                                       | Errored                  |
| Combination of date and time    | Pp           | 1987-02-11T12:13:14.015Z | 11.2.1987 12.13                                          | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29.5.1453 23.59                                          | 1453-05-29T23:59:00.000Z |
|                                 | PPpp         | 1987-02-11T12:13:14.015Z | 11. helmi 1987 12.13.14                                  | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 29. touko 1453 23.59.59                                  | Invalid Date             |
|                                 | PPPppp       | 1987-02-11T12:13:14.015Z | 11. helmikuuta 1987 klo 12.13.14 GMT+0                   | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 29. toukokuuta 1453 klo 23.59.59 GMT+0                   | Invalid Date             |
|                                 | PPPPpppp     | 1987-02-11T12:13:14.015Z | keskiviikkona 11. helmikuuta 1987 klo 12.13.14 GMT+00:00 | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | sunnuntaina 29. toukokuuta 1453 klo 23.59.59 GMT+00:00   | Invalid Date             |

## `formatDistance`

If now is January 1st, 2000, 00:00.

| Date                     | Result        | `includeSeconds: true` | `addSuffix: true`       |
| ------------------------ | ------------- | ---------------------- | ----------------------- |
| 2006-01-01T00:00:00.000Z | noin 6 vuotta | noin 6 vuotta          | noin 6 vuoden kuluttua  |
| 2005-01-01T00:00:00.000Z | noin 5 vuotta | noin 5 vuotta          | noin 5 vuoden kuluttua  |
| 2004-01-01T00:00:00.000Z | noin 4 vuotta | noin 4 vuotta          | noin 4 vuoden kuluttua  |
| 2003-01-01T00:00:00.000Z | noin 3 vuotta | noin 3 vuotta          | noin 3 vuoden kuluttua  |
| 2002-01-01T00:00:00.000Z | noin 2 vuotta | noin 2 vuotta          | noin 2 vuoden kuluttua  |
| 2001-06-01T00:00:00.000Z | yli vuosi     | yli vuosi              | yli vuoden kuluttua     |
| 2001-02-01T00:00:00.000Z | noin vuosi    | noin vuosi             | noin vuoden kuluttua    |
| 2001-01-01T00:00:00.000Z | noin vuosi    | noin vuosi             | noin vuoden kuluttua    |
| 2000-06-01T00:00:00.000Z | 5 kuukautta   | 5 kuukautta            | 5 kuukauden kuluttua    |
| 2000-03-01T00:00:00.000Z | 2 kuukautta   | 2 kuukautta            | 2 kuukauden kuluttua    |
| 2000-02-01T00:00:00.000Z | noin kuukausi | noin kuukausi          | noin kuukauden kuluttua |
| 2000-01-15T00:00:00.000Z | 14 päivää     | 14 päivää              | 14 päivän kuluttua      |
| 2000-01-02T00:00:00.000Z | päivä         | päivä                  | päivän kuluttua         |
| 2000-01-01T06:00:00.000Z | noin 6 tuntia | noin 6 tuntia          | noin 6 tunnin kuluttua  |
| 2000-01-01T01:00:00.000Z | noin tunti    | noin tunti             | noin tunnin kuluttua    |
| 2000-01-01T00:45:00.000Z | noin tunti    | noin tunti             | noin tunnin kuluttua    |
| 2000-01-01T00:30:00.000Z | 30 minuuttia  | 30 minuuttia           | 30 minuutin kuluttua    |
| 2000-01-01T00:15:00.000Z | 15 minuuttia  | 15 minuuttia           | 15 minuutin kuluttua    |
| 2000-01-01T00:01:00.000Z | minuutti      | minuutti               | minuutin kuluttua       |
| 2000-01-01T00:00:25.000Z | alle minuutti | puoli minuuttia        | alle minuutin kuluttua  |
| 2000-01-01T00:00:15.000Z | alle minuutti | alle 20 sekuntia       | alle minuutin kuluttua  |
| 2000-01-01T00:00:05.000Z | alle minuutti | alle 10 sekuntia       | alle minuutin kuluttua  |
| 2000-01-01T00:00:00.000Z | alle minuutti | alle 5 sekuntia        | alle minuutti sitten    |
| 1999-12-31T23:59:55.000Z | alle minuutti | alle 10 sekuntia       | alle minuutti sitten    |
| 1999-12-31T23:59:45.000Z | alle minuutti | alle 20 sekuntia       | alle minuutti sitten    |
| 1999-12-31T23:59:35.000Z | alle minuutti | puoli minuuttia        | alle minuutti sitten    |
| 1999-12-31T23:59:00.000Z | minuutti      | minuutti               | minuutti sitten         |
| 1999-12-31T23:45:00.000Z | 15 minuuttia  | 15 minuuttia           | 15 minuuttia sitten     |
| 1999-12-31T23:30:00.000Z | 30 minuuttia  | 30 minuuttia           | 30 minuuttia sitten     |
| 1999-12-31T23:15:00.000Z | noin tunti    | noin tunti             | noin tunti sitten       |
| 1999-12-31T23:00:00.000Z | noin tunti    | noin tunti             | noin tunti sitten       |
| 1999-12-31T18:00:00.000Z | noin 6 tuntia | noin 6 tuntia          | noin 6 tuntia sitten    |
| 1999-12-30T00:00:00.000Z | 2 päivää      | 2 päivää               | 2 päivää sitten         |
| 1999-12-15T00:00:00.000Z | 17 päivää     | 17 päivää              | 17 päivää sitten        |
| 1999-12-01T00:00:00.000Z | noin kuukausi | noin kuukausi          | noin kuukausi sitten    |
| 1999-11-01T00:00:00.000Z | 2 kuukautta   | 2 kuukautta            | 2 kuukautta sitten      |
| 1999-06-01T00:00:00.000Z | 7 kuukautta   | 7 kuukautta            | 7 kuukautta sitten      |
| 1999-01-01T00:00:00.000Z | noin vuosi    | noin vuosi             | noin vuosi sitten       |
| 1998-12-01T00:00:00.000Z | noin vuosi    | noin vuosi             | noin vuosi sitten       |
| 1998-06-01T00:00:00.000Z | yli vuosi     | yli vuosi              | yli vuosi sitten        |
| 1998-01-01T00:00:00.000Z | noin 2 vuotta | noin 2 vuotta          | noin 2 vuotta sitten    |
| 1997-01-01T00:00:00.000Z | noin 3 vuotta | noin 3 vuotta          | noin 3 vuotta sitten    |
| 1996-01-01T00:00:00.000Z | noin 4 vuotta | noin 4 vuotta          | noin 4 vuotta sitten    |
| 1995-01-01T00:00:00.000Z | noin 5 vuotta | noin 5 vuotta          | noin 5 vuotta sitten    |
| 1994-01-01T00:00:00.000Z | noin 6 vuotta | noin 6 vuotta          | noin 6 vuotta sitten    |

## `formatDistanceStrict`

If now is January 1st, 2000, 00:00.

| Date                     | Result       | `addSuffix: true`    | With forced unit (i.e. `hour`) |
| ------------------------ | ------------ | -------------------- | ------------------------------ |
| 2006-01-01T00:00:00.000Z | 6 vuotta     | 6 vuoden kuluttua    | 52608 tuntia                   |
| 2005-01-01T00:00:00.000Z | 5 vuotta     | 5 vuoden kuluttua    | 43848 tuntia                   |
| 2004-01-01T00:00:00.000Z | 4 vuotta     | 4 vuoden kuluttua    | 35064 tuntia                   |
| 2003-01-01T00:00:00.000Z | 3 vuotta     | 3 vuoden kuluttua    | 26304 tuntia                   |
| 2002-01-01T00:00:00.000Z | 2 vuotta     | 2 vuoden kuluttua    | 17544 tuntia                   |
| 2001-06-01T00:00:00.000Z | vuosi        | vuoden kuluttua      | 12408 tuntia                   |
| 2001-02-01T00:00:00.000Z | vuosi        | vuoden kuluttua      | 9528 tuntia                    |
| 2001-01-01T00:00:00.000Z | vuosi        | vuoden kuluttua      | 8784 tuntia                    |
| 2000-06-01T00:00:00.000Z | 5 kuukautta  | 5 kuukauden kuluttua | 3648 tuntia                    |
| 2000-03-01T00:00:00.000Z | 2 kuukautta  | 2 kuukauden kuluttua | 1440 tuntia                    |
| 2000-02-01T00:00:00.000Z | kuukausi     | kuukauden kuluttua   | 744 tuntia                     |
| 2000-01-15T00:00:00.000Z | 14 päivää    | 14 päivän kuluttua   | 336 tuntia                     |
| 2000-01-02T00:00:00.000Z | päivä        | päivän kuluttua      | 24 tuntia                      |
| 2000-01-01T06:00:00.000Z | 6 tuntia     | 6 tunnin kuluttua    | 6 tuntia                       |
| 2000-01-01T01:00:00.000Z | tunti        | tunnin kuluttua      | tunti                          |
| 2000-01-01T00:45:00.000Z | 45 minuuttia | 45 minuutin kuluttua | tunti                          |
| 2000-01-01T00:30:00.000Z | 30 minuuttia | 30 minuutin kuluttua | tunti                          |
| 2000-01-01T00:15:00.000Z | 15 minuuttia | 15 minuutin kuluttua | 0 tuntia                       |
| 2000-01-01T00:01:00.000Z | minuutti     | minuutin kuluttua    | 0 tuntia                       |
| 2000-01-01T00:00:25.000Z | 25 sekuntia  | 25 sekunnin kuluttua | 0 tuntia                       |
| 2000-01-01T00:00:15.000Z | 15 sekuntia  | 15 sekunnin kuluttua | 0 tuntia                       |
| 2000-01-01T00:00:05.000Z | 5 sekuntia   | 5 sekunnin kuluttua  | 0 tuntia                       |
| 2000-01-01T00:00:00.000Z | 0 sekuntia   | 0 sekuntia sitten    | 0 tuntia                       |
| 1999-12-31T23:59:55.000Z | 5 sekuntia   | 5 sekuntia sitten    | 0 tuntia                       |
| 1999-12-31T23:59:45.000Z | 15 sekuntia  | 15 sekuntia sitten   | 0 tuntia                       |
| 1999-12-31T23:59:35.000Z | 25 sekuntia  | 25 sekuntia sitten   | 0 tuntia                       |
| 1999-12-31T23:59:00.000Z | minuutti     | minuutti sitten      | 0 tuntia                       |
| 1999-12-31T23:45:00.000Z | 15 minuuttia | 15 minuuttia sitten  | 0 tuntia                       |
| 1999-12-31T23:30:00.000Z | 30 minuuttia | 30 minuuttia sitten  | tunti                          |
| 1999-12-31T23:15:00.000Z | 45 minuuttia | 45 minuuttia sitten  | tunti                          |
| 1999-12-31T23:00:00.000Z | tunti        | tunti sitten         | tunti                          |
| 1999-12-31T18:00:00.000Z | 6 tuntia     | 6 tuntia sitten      | 6 tuntia                       |
| 1999-12-30T00:00:00.000Z | 2 päivää     | 2 päivää sitten      | 48 tuntia                      |
| 1999-12-15T00:00:00.000Z | 17 päivää    | 17 päivää sitten     | 408 tuntia                     |
| 1999-12-01T00:00:00.000Z | kuukausi     | kuukausi sitten      | 744 tuntia                     |
| 1999-11-01T00:00:00.000Z | 2 kuukautta  | 2 kuukautta sitten   | 1464 tuntia                    |
| 1999-06-01T00:00:00.000Z | 7 kuukautta  | 7 kuukautta sitten   | 5136 tuntia                    |
| 1999-01-01T00:00:00.000Z | vuosi        | vuosi sitten         | 8760 tuntia                    |
| 1998-12-01T00:00:00.000Z | vuosi        | vuosi sitten         | 9504 tuntia                    |
| 1998-06-01T00:00:00.000Z | 2 vuotta     | 2 vuotta sitten      | 13896 tuntia                   |
| 1998-01-01T00:00:00.000Z | 2 vuotta     | 2 vuotta sitten      | 17520 tuntia                   |
| 1997-01-01T00:00:00.000Z | 3 vuotta     | 3 vuotta sitten      | 26280 tuntia                   |
| 1996-01-01T00:00:00.000Z | 4 vuotta     | 4 vuotta sitten      | 35064 tuntia                   |
| 1995-01-01T00:00:00.000Z | 5 vuotta     | 5 vuotta sitten      | 43824 tuntia                   |
| 1994-01-01T00:00:00.000Z | 6 vuotta     | 6 vuotta sitten      | 52584 tuntia                   |

## `formatRelative`

If now is January 1st, 2000, 00:00.

| Date                     | Result                       |
| ------------------------ | ---------------------------- |
| 2000-01-10T00:00:00.000Z | 10.1.2000                    |
| 2000-01-05T00:00:00.000Z | ensi keskiviikkona klo 00.00 |
| 2000-01-02T00:00:00.000Z | huomenna klo 00.00           |
| 2000-01-01T00:00:00.000Z | tänään klo 00.00             |
| 1999-12-31T00:00:00.000Z | eilen klo 00.00              |
| 1999-12-27T00:00:00.000Z | viime maanantaina klo 00.00  |
| 1999-12-21T00:00:00.000Z | 21.12.1999                   |
