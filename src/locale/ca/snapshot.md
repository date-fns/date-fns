# Catalan (ca) locale

## `format` and `parse`

| Title                           | Token string | Date                     | `format` result                                      | `parse` result           |
| ------------------------------- | ------------ | ------------------------ | ---------------------------------------------------- | ------------------------ |
| Calendar year                   | yo           | 1987-02-11T12:13:14.015Z | 1987è                                                | 1987-01-01T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 5è                                                   | 0005-01-01T00:00:00.000Z |
| Local week-numbering year       | Yo           | 1987-02-11T12:13:14.015Z | 1987è                                                | 1986-12-29T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 4t                                                   | 0003-12-29T00:00:00.000Z |
| Quarter (formatting)            | Qo           | 2019-01-01T12:13:14.015Z | 1r                                                   | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2n                                                   | 2019-04-01T00:00:00.000Z |
|                                 | QQQ          | 2019-01-01T12:13:14.015Z | T1                                                   | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | T2                                                   | 2019-04-01T00:00:00.000Z |
|                                 | QQQQ         | 2019-01-01T12:13:14.015Z | 1r trimestre                                         | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2n trimestre                                         | 2019-04-01T00:00:00.000Z |
|                                 | QQQQQ        | 2019-01-01T12:13:14.015Z | 1                                                    | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2                                                    | 2019-04-01T00:00:00.000Z |
| Quarter (stand-alone)           | qo           | 2019-01-01T12:13:14.015Z | 1r                                                   | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2n                                                   | 2019-04-01T00:00:00.000Z |
|                                 | qqq          | 2019-01-01T12:13:14.015Z | T1                                                   | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | T2                                                   | 2019-04-01T00:00:00.000Z |
|                                 | qqqq         | 2019-01-01T12:13:14.015Z | 1r trimestre                                         | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2n trimestre                                         | 2019-04-01T00:00:00.000Z |
| Month (formatting)              | Mo           | 2019-02-11T12:13:14.015Z | 2n                                                   | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 7è                                                   | 2019-07-01T00:00:00.000Z |
|                                 | MMM          | 2019-02-11T12:13:14.015Z | febr.                                                | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | jul.                                                 | 2019-07-01T00:00:00.000Z |
|                                 | MMMM         | 2019-02-11T12:13:14.015Z | febrer                                               | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | juliol                                               | 2019-07-01T00:00:00.000Z |
|                                 | MMMMM        | 2019-02-11T12:13:14.015Z | FB                                                   | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | JL                                                   | 2019-07-01T00:00:00.000Z |
| Month (stand-alone)             | Lo           | 2019-02-11T12:13:14.015Z | 2n                                                   | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 7è                                                   | 2019-07-01T00:00:00.000Z |
|                                 | LLL          | 2019-02-11T12:13:14.015Z | febr.                                                | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | jul.                                                 | 2019-07-01T00:00:00.000Z |
|                                 | LLLL         | 2019-02-11T12:13:14.015Z | febrer                                               | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | juliol                                               | 2019-07-01T00:00:00.000Z |
|                                 | LLLLL        | 2019-02-11T12:13:14.015Z | FB                                                   | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | JL                                                   | 2019-07-01T00:00:00.000Z |
| Local week of year              | wo           | 2019-01-01T12:13:14.015Z | 1r                                                   | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 48è                                                  | 2019-11-25T00:00:00.000Z |
| ISO week of year                | Io           | 2019-01-01T12:13:14.015Z | 1r                                                   | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 48è                                                  | 2019-11-25T00:00:00.000Z |
| Day of month                    | do           | 2019-02-11T12:13:14.015Z | 11è                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-28T12:13:14.015Z | 28è                                                  | 2019-02-28T00:00:00.000Z |
| Day of year                     | Do           | 2019-02-11T12:13:14.015Z | 42n                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-12-31T12:13:14.015Z | 365è                                                 | 2019-12-31T00:00:00.000Z |
| Day of week (formatting)        | E            | 2019-02-11T12:13:14.015Z | dl.                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | dv.                                                  | 2019-02-15T00:00:00.000Z |
|                                 | EE           | 2019-02-11T12:13:14.015Z | dl.                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | dv.                                                  | 2019-02-15T00:00:00.000Z |
|                                 | EEE          | 2019-02-11T12:13:14.015Z | dl.                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | dv.                                                  | 2019-02-15T00:00:00.000Z |
|                                 | EEEE         | 2019-02-11T12:13:14.015Z | dilluns                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | divendres                                            | 2019-02-15T00:00:00.000Z |
|                                 | EEEEE        | 2019-02-11T12:13:14.015Z | dl.                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | dv.                                                  | 2019-02-15T00:00:00.000Z |
|                                 | EEEEEE       | 2019-02-11T12:13:14.015Z | dl.                                                  | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | dv.                                                  | Invalid Date             |
| ISO day of week (formatting)    | io           | 2019-02-11T12:13:14.015Z | 1r                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5è                                                   | 2019-02-15T00:00:00.000Z |
|                                 | iii          | 2019-02-11T12:13:14.015Z | dl.                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | dv.                                                  | 2019-02-15T00:00:00.000Z |
|                                 | iiii         | 2019-02-11T12:13:14.015Z | dilluns                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | divendres                                            | 2019-02-15T00:00:00.000Z |
|                                 | iiiii        | 2019-02-11T12:13:14.015Z | dl.                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | dv.                                                  | 2019-02-15T00:00:00.000Z |
|                                 | iiiiii       | 2019-02-11T12:13:14.015Z | dl.                                                  | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | dv.                                                  | Invalid Date             |
| Local day of week (formatting)  | eo           | 2019-02-11T12:13:14.015Z | 1r                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5è                                                   | 2019-02-15T00:00:00.000Z |
|                                 | eee          | 2019-02-11T12:13:14.015Z | dl.                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | dv.                                                  | 2019-02-15T00:00:00.000Z |
|                                 | eeee         | 2019-02-11T12:13:14.015Z | dilluns                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | divendres                                            | 2019-02-15T00:00:00.000Z |
|                                 | eeeee        | 2019-02-11T12:13:14.015Z | dl.                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | dv.                                                  | 2019-02-15T00:00:00.000Z |
|                                 | eeeeee       | 2019-02-11T12:13:14.015Z | dl.                                                  | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | dv.                                                  | Invalid Date             |
| Local day of week (stand-alone) | co           | 2019-02-11T12:13:14.015Z | 1r                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5è                                                   | 2019-02-15T00:00:00.000Z |
|                                 | ccc          | 2019-02-11T12:13:14.015Z | dl.                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | dv.                                                  | 2019-02-15T00:00:00.000Z |
|                                 | cccc         | 2019-02-11T12:13:14.015Z | dilluns                                              | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | divendres                                            | 2019-02-15T00:00:00.000Z |
|                                 | ccccc        | 2019-02-11T12:13:14.015Z | dl.                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | dv.                                                  | 2019-02-15T00:00:00.000Z |
|                                 | cccccc       | 2019-02-11T12:13:14.015Z | dl.                                                  | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | dv.                                                  | Invalid Date             |
| AM, PM                          | a            | 2019-02-11T11:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 | aa           | 2019-02-11T11:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 | aaa          | 2019-02-11T11:13:14.015Z | am                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | pm                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | pm                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | am                                                   | 2019-02-11T00:00:00.000Z |
|                                 | aaaa         | 2019-02-11T11:13:14.015Z | ante meridiem                                        | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | post meridiem                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | post meridiem                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | ante meridiem                                        | 2019-02-11T00:00:00.000Z |
|                                 | aaaaa        | 2019-02-11T11:13:14.015Z | am                                                   | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | pm                                                   | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | pm                                                   | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | am                                                   | Invalid Date             |
| AM, PM, noon, midnight          | b            | 2019-02-11T11:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 | bb           | 2019-02-11T11:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 | bbb          | 2019-02-11T11:13:14.015Z | am                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | pm                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | pm                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | am                                                   | 2019-02-11T00:00:00.000Z |
|                                 | bbbb         | 2019-02-11T11:13:14.015Z | ante meridiem                                        | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | post meridiem                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | post meridiem                                        | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | ante meridiem                                        | 2019-02-11T00:00:00.000Z |
|                                 | bbbbb        | 2019-02-11T11:13:14.015Z | am                                                   | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | pm                                                   | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | pm                                                   | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | am                                                   | Invalid Date             |
| Flexible day period             | B            | 2019-02-11T11:13:14.015Z | del matí                                             | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | de la tarda                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | del vespre                                           | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | de la nit                                            | 2019-02-11T00:00:00.000Z |
|                                 | BB           | 2019-02-11T11:13:14.015Z | del matí                                             | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | de la tarda                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | del vespre                                           | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | de la nit                                            | 2019-02-11T00:00:00.000Z |
|                                 | BBB          | 2019-02-11T11:13:14.015Z | del matí                                             | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | de la tarda                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | del vespre                                           | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | de la nit                                            | 2019-02-11T00:00:00.000Z |
|                                 | BBBB         | 2019-02-11T11:13:14.015Z | del matí                                             | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | de la tarda                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | del vespre                                           | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | de la nit                                            | 2019-02-11T00:00:00.000Z |
|                                 | BBBBB        | 2019-02-11T11:13:14.015Z | del matí                                             | 2019-02-11T04:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | de la tarda                                          | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | del vespre                                           | 2019-02-11T17:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | de la nit                                            | 2019-02-11T00:00:00.000Z |
| Hour [1-12]                     | ho           | 2019-02-11T11:13:14.015Z | 11è                                                  | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11è                                                  | 2019-02-11T23:00:00.000Z |
| Hour [0-23]                     | Ho           | 2019-02-11T11:13:14.015Z | 11è                                                  | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23r                                                  | 2019-02-11T23:00:00.000Z |
| Hour [0-11]                     | Ko           | 2019-02-11T11:13:14.015Z | 11è                                                  | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11è                                                  | 2019-02-11T23:00:00.000Z |
| Hour [1-24]                     | ko           | 2019-02-11T11:13:14.015Z | 11è                                                  | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23r                                                  | 2019-02-11T23:00:00.000Z |
| Minute                          | mo           | 2019-01-01T12:01:14.015Z | 1r                                                   | 2019-01-01T12:01:00.000Z |
|                                 |              | 2019-04-01T12:55:14.015Z | 55è                                                  | 2019-04-01T12:55:00.000Z |
| Second                          | so           | 2019-01-01T12:13:01.015Z | 1r                                                   | 2019-01-01T12:13:01.000Z |
|                                 |              | 2019-04-01T12:13:55.015Z | 55è                                                  | 2019-04-01T12:13:55.000Z |
| Long localized date             | P            | 1987-02-11T12:13:14.015Z | 11/02/1987                                           | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29/05/1453                                           | 1453-05-29T00:00:00.000Z |
|                                 | PP           | 1987-02-11T12:13:14.015Z | 11 febr. 1987                                        | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 maig 1453                                         | 1453-05-29T00:00:00.000Z |
|                                 | PPP          | 1987-02-11T12:13:14.015Z | 11 de febrer 1987                                    | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 de maig 1453                                      | 1453-05-29T00:00:00.000Z |
|                                 | PPPP         | 1987-02-11T12:13:14.015Z | dimecres, 11 de febrer 1987                          | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | diumenge, 29 de maig 1453                            | 1453-05-29T00:00:00.000Z |
| Long localized time             | p            | 1987-02-11T12:13:14.015Z | 12:13                                                | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59                                                | 1453-05-29T23:59:00.000Z |
|                                 | pp           | 1987-02-11T12:13:14.015Z | 12:13:14                                             | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59                                             | 1453-05-29T23:59:59.000Z |
|                                 | ppp          | 1987-02-11T12:13:14.015Z | 12:13:14 GMT+0                                       | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59 GMT+0                                       | Errored                  |
|                                 | pppp         | 1987-02-11T12:13:14.015Z | 12:13:14 GMT+00:00                                   | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59 GMT+00:00                                   | Errored                  |
| Combination of date and time    | Pp           | 1987-02-11T12:13:14.015Z | 11/02/1987, 12:13                                    | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29/05/1453, 23:59                                    | 1453-05-29T23:59:00.000Z |
|                                 | PPpp         | 1987-02-11T12:13:14.015Z | 11 febr. 1987, 12:13:14                              | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 maig 1453, 23:59:59                               | 1453-05-29T23:59:59.000Z |
|                                 | PPPppp       | 1987-02-11T12:13:14.015Z | 11 de febrer 1987 a les 12:13:14 GMT+0               | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 de maig 1453 a les 23:59:59 GMT+0                 | Errored                  |
|                                 | PPPPpppp     | 1987-02-11T12:13:14.015Z | dimecres, 11 de febrer 1987 a les 12:13:14 GMT+00:00 | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | diumenge, 29 de maig 1453 a les 23:59:59 GMT+00:00   | Errored                  |

## `formatDistance`

If now is January 1st, 2000, 00:00.

| Date                     | Result                  | `includeSeconds: true`  | `addSuffix: true`          |
| ------------------------ | ----------------------- | ----------------------- | -------------------------- |
| 2006-01-01T00:00:00.000Z | aproximadament 6 anys   | aproximadament 6 anys   | en aproximadament 6 anys   |
| 2005-01-01T00:00:00.000Z | aproximadament 5 anys   | aproximadament 5 anys   | en aproximadament 5 anys   |
| 2004-01-01T00:00:00.000Z | aproximadament 4 anys   | aproximadament 4 anys   | en aproximadament 4 anys   |
| 2003-01-01T00:00:00.000Z | aproximadament 3 anys   | aproximadament 3 anys   | en aproximadament 3 anys   |
| 2002-01-01T00:00:00.000Z | aproximadament 2 anys   | aproximadament 2 anys   | en aproximadament 2 anys   |
| 2001-06-01T00:00:00.000Z | més d'un any            | més d'un any            | en més d'un any            |
| 2001-02-01T00:00:00.000Z | aproximadament un any   | aproximadament un any   | en aproximadament un any   |
| 2001-01-01T00:00:00.000Z | aproximadament un any   | aproximadament un any   | en aproximadament un any   |
| 2000-06-01T00:00:00.000Z | 5 mesos                 | 5 mesos                 | en 5 mesos                 |
| 2000-03-01T00:00:00.000Z | 2 mesos                 | 2 mesos                 | en 2 mesos                 |
| 2000-02-01T00:00:00.000Z | aproximadament un mes   | aproximadament un mes   | en aproximadament un mes   |
| 2000-01-15T00:00:00.000Z | 14 dies                 | 14 dies                 | en 14 dies                 |
| 2000-01-02T00:00:00.000Z | 1 dia                   | 1 dia                   | en 1 dia                   |
| 2000-01-01T06:00:00.000Z | aproximadament 6 hores  | aproximadament 6 hores  | en aproximadament 6 hores  |
| 2000-01-01T01:00:00.000Z | aproximadament una hora | aproximadament una hora | en aproximadament una hora |
| 2000-01-01T00:45:00.000Z | aproximadament una hora | aproximadament una hora | en aproximadament una hora |
| 2000-01-01T00:30:00.000Z | 30 minuts               | 30 minuts               | en 30 minuts               |
| 2000-01-01T00:15:00.000Z | 15 minuts               | 15 minuts               | en 15 minuts               |
| 2000-01-01T00:01:00.000Z | 1 minut                 | 1 minut                 | en 1 minut                 |
| 2000-01-01T00:00:25.000Z | menys d'un minut        | mig minut               | en menys d'un minut        |
| 2000-01-01T00:00:15.000Z | menys d'un minut        | menys de 20 segons      | en menys d'un minut        |
| 2000-01-01T00:00:05.000Z | menys d'un minut        | menys de 10 segons      | en menys d'un minut        |
| 2000-01-01T00:00:00.000Z | menys d'un minut        | menys de 5 segons       | fa menys d'un minut        |
| 1999-12-31T23:59:55.000Z | menys d'un minut        | menys de 10 segons      | fa menys d'un minut        |
| 1999-12-31T23:59:45.000Z | menys d'un minut        | menys de 20 segons      | fa menys d'un minut        |
| 1999-12-31T23:59:35.000Z | menys d'un minut        | mig minut               | fa menys d'un minut        |
| 1999-12-31T23:59:00.000Z | 1 minut                 | 1 minut                 | fa 1 minut                 |
| 1999-12-31T23:45:00.000Z | 15 minuts               | 15 minuts               | fa 15 minuts               |
| 1999-12-31T23:30:00.000Z | 30 minuts               | 30 minuts               | fa 30 minuts               |
| 1999-12-31T23:15:00.000Z | aproximadament una hora | aproximadament una hora | fa aproximadament una hora |
| 1999-12-31T23:00:00.000Z | aproximadament una hora | aproximadament una hora | fa aproximadament una hora |
| 1999-12-31T18:00:00.000Z | aproximadament 6 hores  | aproximadament 6 hores  | fa aproximadament 6 hores  |
| 1999-12-30T00:00:00.000Z | 2 dies                  | 2 dies                  | fa 2 dies                  |
| 1999-12-15T00:00:00.000Z | 17 dies                 | 17 dies                 | fa 17 dies                 |
| 1999-12-01T00:00:00.000Z | aproximadament un mes   | aproximadament un mes   | fa aproximadament un mes   |
| 1999-11-01T00:00:00.000Z | 2 mesos                 | 2 mesos                 | fa 2 mesos                 |
| 1999-06-01T00:00:00.000Z | 7 mesos                 | 7 mesos                 | fa 7 mesos                 |
| 1999-01-01T00:00:00.000Z | aproximadament un any   | aproximadament un any   | fa aproximadament un any   |
| 1998-12-01T00:00:00.000Z | aproximadament un any   | aproximadament un any   | fa aproximadament un any   |
| 1998-06-01T00:00:00.000Z | més d'un any            | més d'un any            | fa més d'un any            |
| 1998-01-01T00:00:00.000Z | aproximadament 2 anys   | aproximadament 2 anys   | fa aproximadament 2 anys   |
| 1997-01-01T00:00:00.000Z | aproximadament 3 anys   | aproximadament 3 anys   | fa aproximadament 3 anys   |
| 1996-01-01T00:00:00.000Z | aproximadament 4 anys   | aproximadament 4 anys   | fa aproximadament 4 anys   |
| 1995-01-01T00:00:00.000Z | aproximadament 5 anys   | aproximadament 5 anys   | fa aproximadament 5 anys   |
| 1994-01-01T00:00:00.000Z | aproximadament 6 anys   | aproximadament 6 anys   | fa aproximadament 6 anys   |

## `formatDistanceStrict`

If now is January 1st, 2000, 00:00.

| Date                     | Result    | `addSuffix: true` | With forced unit (i.e. `hour`) |
| ------------------------ | --------- | ----------------- | ------------------------------ |
| 2006-01-01T00:00:00.000Z | 6 anys    | en 6 anys         | 52608 hores                    |
| 2005-01-01T00:00:00.000Z | 5 anys    | en 5 anys         | 43848 hores                    |
| 2004-01-01T00:00:00.000Z | 4 anys    | en 4 anys         | 35064 hores                    |
| 2003-01-01T00:00:00.000Z | 3 anys    | en 3 anys         | 26304 hores                    |
| 2002-01-01T00:00:00.000Z | 2 anys    | en 2 anys         | 17544 hores                    |
| 2001-06-01T00:00:00.000Z | 1 any     | en 1 any          | 12408 hores                    |
| 2001-02-01T00:00:00.000Z | 1 any     | en 1 any          | 9528 hores                     |
| 2001-01-01T00:00:00.000Z | 1 any     | en 1 any          | 8784 hores                     |
| 2000-06-01T00:00:00.000Z | 5 mesos   | en 5 mesos        | 3648 hores                     |
| 2000-03-01T00:00:00.000Z | 2 mesos   | en 2 mesos        | 1440 hores                     |
| 2000-02-01T00:00:00.000Z | 1 mes     | en 1 mes          | 744 hores                      |
| 2000-01-15T00:00:00.000Z | 14 dies   | en 14 dies        | 336 hores                      |
| 2000-01-02T00:00:00.000Z | 1 dia     | en 1 dia          | 24 hores                       |
| 2000-01-01T06:00:00.000Z | 6 hores   | en 6 hores        | 6 hores                        |
| 2000-01-01T01:00:00.000Z | 1 hora    | en 1 hora         | 1 hora                         |
| 2000-01-01T00:45:00.000Z | 45 minuts | en 45 minuts      | 1 hora                         |
| 2000-01-01T00:30:00.000Z | 30 minuts | en 30 minuts      | 1 hora                         |
| 2000-01-01T00:15:00.000Z | 15 minuts | en 15 minuts      | 0 hores                        |
| 2000-01-01T00:01:00.000Z | 1 minut   | en 1 minut        | 0 hores                        |
| 2000-01-01T00:00:25.000Z | 25 segons | en 25 segons      | 0 hores                        |
| 2000-01-01T00:00:15.000Z | 15 segons | en 15 segons      | 0 hores                        |
| 2000-01-01T00:00:05.000Z | 5 segons  | en 5 segons       | 0 hores                        |
| 2000-01-01T00:00:00.000Z | 0 segons  | fa 0 segons       | 0 hores                        |
| 1999-12-31T23:59:55.000Z | 5 segons  | fa 5 segons       | 0 hores                        |
| 1999-12-31T23:59:45.000Z | 15 segons | fa 15 segons      | 0 hores                        |
| 1999-12-31T23:59:35.000Z | 25 segons | fa 25 segons      | 0 hores                        |
| 1999-12-31T23:59:00.000Z | 1 minut   | fa 1 minut        | 0 hores                        |
| 1999-12-31T23:45:00.000Z | 15 minuts | fa 15 minuts      | 0 hores                        |
| 1999-12-31T23:30:00.000Z | 30 minuts | fa 30 minuts      | 1 hora                         |
| 1999-12-31T23:15:00.000Z | 45 minuts | fa 45 minuts      | 1 hora                         |
| 1999-12-31T23:00:00.000Z | 1 hora    | fa 1 hora         | 1 hora                         |
| 1999-12-31T18:00:00.000Z | 6 hores   | fa 6 hores        | 6 hores                        |
| 1999-12-30T00:00:00.000Z | 2 dies    | fa 2 dies         | 48 hores                       |
| 1999-12-15T00:00:00.000Z | 17 dies   | fa 17 dies        | 408 hores                      |
| 1999-12-01T00:00:00.000Z | 1 mes     | fa 1 mes          | 744 hores                      |
| 1999-11-01T00:00:00.000Z | 2 mesos   | fa 2 mesos        | 1464 hores                     |
| 1999-06-01T00:00:00.000Z | 7 mesos   | fa 7 mesos        | 5136 hores                     |
| 1999-01-01T00:00:00.000Z | 1 any     | fa 1 any          | 8760 hores                     |
| 1998-12-01T00:00:00.000Z | 1 any     | fa 1 any          | 9504 hores                     |
| 1998-06-01T00:00:00.000Z | 2 anys    | fa 2 anys         | 13896 hores                    |
| 1998-01-01T00:00:00.000Z | 2 anys    | fa 2 anys         | 17520 hores                    |
| 1997-01-01T00:00:00.000Z | 3 anys    | fa 3 anys         | 26280 hores                    |
| 1996-01-01T00:00:00.000Z | 4 anys    | fa 4 anys         | 35064 hores                    |
| 1995-01-01T00:00:00.000Z | 5 anys    | fa 5 anys         | 43824 hores                    |
| 1994-01-01T00:00:00.000Z | 6 anys    | fa 6 anys         | 52584 hores                    |

## `formatRelative`

If now is January 1st, 2000, 00:00.

| Date                     | Result                        |
| ------------------------ | ----------------------------- |
| 2000-01-10T00:00:00.000Z | 10/01/2000                    |
| 2000-01-05T00:00:00.000Z | dimecres a les 00:00          |
| 2000-01-02T00:00:00.000Z | demà a les 00:00              |
| 2000-01-01T00:00:00.000Z | avui a les 00:00              |
| 1999-12-31T00:00:00.000Z | ahir a les 00:00              |
| 1999-12-27T00:00:00.000Z | el dilluns passat a les 00:00 |
| 1999-12-21T00:00:00.000Z | 21/12/1999                    |

## `formatDuration`

| Duration      | Result     |
| ------------- | ---------- |
| {"years":0}   | 0 anys     |
| {"years":1}   | 1 any      |
| {"years":2}   | 2 anys     |
| {"months":0}  | 0 mesos    |
| {"months":1}  | 1 mes      |
| {"months":2}  | 2 mesos    |
| {"weeks":0}   | 0 setmanes |
| {"weeks":1}   | 1 setmana  |
| {"weeks":2}   | 2 setmanes |
| {"days":0}    | 0 dies     |
| {"days":1}    | 1 dia      |
| {"days":2}    | 2 dies     |
| {"hours":0}   | 0 hores    |
| {"hours":1}   | 1 hora     |
| {"hours":2}   | 2 hores    |
| {"minutes":0} | 0 minuts   |
| {"minutes":1} | 1 minut    |
| {"minutes":2} | 2 minuts   |
| {"seconds":0} | 0 segons   |
| {"seconds":1} | 1 segon    |
| {"seconds":2} | 2 segons   |
