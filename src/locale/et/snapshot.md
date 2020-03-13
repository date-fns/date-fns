# Estonian (et) locale

## `format` and `parse`

| Title                           | Token string | Date                     | `format` result                                      | `parse` result           |
| ------------------------------- | ------------ | ------------------------ | ---------------------------------------------------- | ------------------------ |
| Calendar year                   | yo           | 1987-02-11T12:13:14.015Z | 1987.                                                | 1987-01-01T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 5.                                                   | 0005-01-01T00:00:00.000Z |
| Local week-numbering year       | Yo           | 1987-02-11T12:13:14.015Z | 1987.                                                | 1986-12-29T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 4.                                                   | 0003-12-29T00:00:00.000Z |
| Quarter (formatting)            | Qo           | 2019-01-01T12:13:14.015Z | 1.                                                   | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2.                                                   | 2019-04-01T00:00:00.000Z |
|                                 | QQQ          | 2019-01-01T12:13:14.015Z | K1                                                   | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | K2                                                   | 2019-04-01T00:00:00.000Z |
|                                 | QQQQ         | 2019-01-01T12:13:14.015Z | 1. kvartal                                           | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2. kvartal                                           | 2019-04-01T00:00:00.000Z |
|                                 | QQQQQ        | 2019-01-01T12:13:14.015Z | 1                                                    | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2                                                    | 2019-04-01T00:00:00.000Z |
| Quarter (stand-alone)           | qo           | 2019-01-01T12:13:14.015Z | 1.                                                   | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2.                                                   | 2019-04-01T00:00:00.000Z |
|                                 | qqq          | 2019-01-01T12:13:14.015Z | K1                                                   | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | K2                                                   | 2019-04-01T00:00:00.000Z |
|                                 | qqqq         | 2019-01-01T12:13:14.015Z | 1. kvartal                                           | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2. kvartal                                           | 2019-04-01T00:00:00.000Z |
| Month (formatting)              | Mo           | 2019-02-11T12:13:14.015Z | 2.                                                   | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 7.                                                   | 2019-07-01T00:00:00.000Z |
|                                 | MMM          | 2019-02-11T12:13:14.015Z | veebr                                                | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | juuli                                                | Invalid Date             |
|                                 | MMMM         | 2019-02-11T12:13:14.015Z | veebruar                                             | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | juuli                                                | Invalid Date             |
|                                 | MMMMM        | 2019-02-11T12:13:14.015Z | V                                                    | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | J                                                    | 2019-01-01T00:00:00.000Z |
| Month (stand-alone)             | Lo           | 2019-02-11T12:13:14.015Z | 2.                                                   | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 7.                                                   | 2019-07-01T00:00:00.000Z |
|                                 | LLL          | 2019-02-11T12:13:14.015Z | veebr                                                | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | juuli                                                | Invalid Date             |
|                                 | LLLL         | 2019-02-11T12:13:14.015Z | veebruar                                             | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | juuli                                                | Invalid Date             |
|                                 | LLLLL        | 2019-02-11T12:13:14.015Z | V                                                    | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | J                                                    | 2019-01-01T00:00:00.000Z |
| Local week of year              | wo           | 2019-01-01T12:13:14.015Z | 1.                                                   | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 48.                                                  | 2019-11-25T00:00:00.000Z |
| ISO week of year                | Io           | 2019-01-01T12:13:14.015Z | 1.                                                   | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 48.                                                  | 2019-11-25T00:00:00.000Z |
| Day of month                    | do           | 2019-02-11T12:13:14.015Z | 11.                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-28T12:13:14.015Z | 28.                                                  | 2019-02-28T00:00:00.000Z |
| Day of year                     | Do           | 2019-02-11T12:13:14.015Z | 42.                                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-12-31T12:13:14.015Z | 365.                                                 | 2019-12-31T00:00:00.000Z |
| Day of week (formatting)        | E            | 2019-02-11T12:13:14.015Z | esmasp.                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | reede.                                               | Invalid Date             |
|                                 | EE           | 2019-02-11T12:13:14.015Z | esmasp.                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | reede.                                               | Invalid Date             |
|                                 | EEE          | 2019-02-11T12:13:14.015Z | esmasp.                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | reede.                                               | Invalid Date             |
|                                 | EEEE         | 2019-02-11T12:13:14.015Z | esmaspäev                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | reede                                                | 2019-02-15T00:00:00.000Z |
|                                 | EEEEE        | 2019-02-11T12:13:14.015Z | E                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | R                                                    | 2019-02-15T00:00:00.000Z |
|                                 | EEEEEE       | 2019-02-11T12:13:14.015Z | E                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | R                                                    | 2019-02-15T00:00:00.000Z |
| ISO day of week (formatting)    | io           | 2019-02-11T12:13:14.015Z | 1.                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                                   | 2019-02-15T00:00:00.000Z |
|                                 | iii          | 2019-02-11T12:13:14.015Z | esmasp.                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | reede.                                               | Invalid Date             |
|                                 | iiii         | 2019-02-11T12:13:14.015Z | esmaspäev                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | reede                                                | 2019-02-15T00:00:00.000Z |
|                                 | iiiii        | 2019-02-11T12:13:14.015Z | E                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | R                                                    | 2019-02-15T00:00:00.000Z |
|                                 | iiiiii       | 2019-02-11T12:13:14.015Z | E                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | R                                                    | 2019-02-15T00:00:00.000Z |
| Local day of week (formatting)  | eo           | 2019-02-11T12:13:14.015Z | 1.                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                                   | 2019-02-15T00:00:00.000Z |
|                                 | eee          | 2019-02-11T12:13:14.015Z | esmasp.                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | reede.                                               | Invalid Date             |
|                                 | eeee         | 2019-02-11T12:13:14.015Z | esmaspäev                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | reede                                                | 2019-02-15T00:00:00.000Z |
|                                 | eeeee        | 2019-02-11T12:13:14.015Z | E                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | R                                                    | 2019-02-15T00:00:00.000Z |
|                                 | eeeeee       | 2019-02-11T12:13:14.015Z | E                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | R                                                    | 2019-02-15T00:00:00.000Z |
| Local day of week (stand-alone) | co           | 2019-02-11T12:13:14.015Z | 1.                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5.                                                   | 2019-02-15T00:00:00.000Z |
|                                 | ccc          | 2019-02-11T12:13:14.015Z | esmasp.                                              | Invalid Date             |
|                                 |              | 2019-02-15T12:13:14.015Z | reede.                                               | Invalid Date             |
|                                 | cccc         | 2019-02-11T12:13:14.015Z | esmaspäev                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | reede                                                | 2019-02-15T00:00:00.000Z |
|                                 | ccccc        | 2019-02-11T12:13:14.015Z | E                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | R                                                    | 2019-02-15T00:00:00.000Z |
|                                 | cccccc       | 2019-02-11T12:13:14.015Z | E                                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | R                                                    | 2019-02-15T00:00:00.000Z |
| AM, PM                          | a            | 2019-02-11T11:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 | aa           | 2019-02-11T11:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 | aaa          | 2019-02-11T11:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 | aaaa         | 2019-02-11T11:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 | aaaaa        | 2019-02-11T11:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
| AM, PM, noon, midnight          | b            | 2019-02-11T11:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 | bb           | 2019-02-11T11:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 | bbb          | 2019-02-11T11:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 | bbbb         | 2019-02-11T11:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 | bbbbb        | 2019-02-11T11:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                                   | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                                   | 2019-02-11T00:00:00.000Z |
| Flexible day period             | B            | 2019-02-11T11:13:14.015Z | hommikul                                             | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | pärastlõunal                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | õhtul                                                | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | öösel                                                | Invalid Date             |
|                                 | BB           | 2019-02-11T11:13:14.015Z | hommikul                                             | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | pärastlõunal                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | õhtul                                                | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | öösel                                                | Invalid Date             |
|                                 | BBB          | 2019-02-11T11:13:14.015Z | hommikul                                             | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | pärastlõunal                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | õhtul                                                | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | öösel                                                | Invalid Date             |
|                                 | BBBB         | 2019-02-11T11:13:14.015Z | hommikul                                             | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | pärastlõunal                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | õhtul                                                | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | öösel                                                | Invalid Date             |
|                                 | BBBBB        | 2019-02-11T11:13:14.015Z | hommikul                                             | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | pärastlõunal                                         | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | õhtul                                                | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | öösel                                                | Invalid Date             |
| Hour [1-12]                     | ho           | 2019-02-11T11:13:14.015Z | 11.                                                  | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11.                                                  | 2019-02-11T23:00:00.000Z |
| Hour [0-23]                     | Ho           | 2019-02-11T11:13:14.015Z | 11.                                                  | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23.                                                  | 2019-02-11T23:00:00.000Z |
| Hour [0-11]                     | Ko           | 2019-02-11T11:13:14.015Z | 11.                                                  | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11.                                                  | 2019-02-11T23:00:00.000Z |
| Hour [1-24]                     | ko           | 2019-02-11T11:13:14.015Z | 11.                                                  | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23.                                                  | 2019-02-11T23:00:00.000Z |
| Minute                          | mo           | 2019-01-01T12:01:14.015Z | 1.                                                   | 2019-01-01T12:01:00.000Z |
|                                 |              | 2019-04-01T12:55:14.015Z | 55.                                                  | 2019-04-01T12:55:00.000Z |
| Second                          | so           | 2019-01-01T12:13:01.015Z | 1.                                                   | 2019-01-01T12:13:01.000Z |
|                                 |              | 2019-04-01T12:13:55.015Z | 55.                                                  | 2019-04-01T12:13:55.000Z |
| Long localized date             | P            | 1987-02-11T12:13:14.015Z | 11.02.1987                                           | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29.05.1453                                           | 1453-05-29T00:00:00.000Z |
|                                 | PP           | 1987-02-11T12:13:14.015Z | 11. veebr 1987                                       | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29. mai 1453                                         | 1453-05-29T00:00:00.000Z |
|                                 | PPP          | 1987-02-11T12:13:14.015Z | 11. veebruar 1987                                    | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29. mai 1453                                         | 1453-05-29T00:00:00.000Z |
|                                 | PPPP         | 1987-02-11T12:13:14.015Z | kolmapäev, 11. veebruar 1987                         | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | pühapäev, 29. mai 1453                               | Invalid Date             |
| Long localized time             | p            | 1987-02-11T12:13:14.015Z | 12:13                                                | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59                                                | 1453-05-29T23:59:00.000Z |
|                                 | pp           | 1987-02-11T12:13:14.015Z | 12:13:14                                             | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59                                             | 1453-05-29T23:59:59.000Z |
|                                 | ppp          | 1987-02-11T12:13:14.015Z | 12:13:14 GMT+0                                       | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59 GMT+0                                       | Errored                  |
|                                 | pppp         | 1987-02-11T12:13:14.015Z | 12:13:14 GMT+00:00                                   | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 23:59:59 GMT+00:00                                   | Errored                  |
| Combination of date and time    | Pp           | 1987-02-11T12:13:14.015Z | 11.02.1987. 12:13                                    | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29.05.1453. 23:59                                    | 1453-05-29T23:59:00.000Z |
|                                 | PPpp         | 1987-02-11T12:13:14.015Z | 11. veebr 1987. 12:13:14                             | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29. mai 1453. 23:59:59                               | 1453-05-29T23:59:59.000Z |
|                                 | PPPppp       | 1987-02-11T12:13:14.015Z | 11. veebruar 1987 kell 12:13:14 GMT+0                | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | 29. mai 1453 kell 23:59:59 GMT+0                     | Errored                  |
|                                 | PPPPpppp     | 1987-02-11T12:13:14.015Z | kolmapäev, 11. veebruar 1987 kell 12:13:14 GMT+00:00 | Errored                  |
|                                 |              | 1453-05-29T23:59:59.999Z | pühapäev, 29. mai 1453 kell 23:59:59 GMT+00:00       | Invalid Date             |

## `formatDistance`

If now is January 1st, 2000, 00:00.

| Date                     | Result               | `includeSeconds: true` | `addSuffix: true`           |
| ------------------------ | -------------------- | ---------------------- | --------------------------- |
| 2006-01-01T00:00:00.000Z | umbes 6 aastat       | umbes 6 aastat         | umbes 6 aasta pärast        |
| 2005-01-01T00:00:00.000Z | umbes 5 aastat       | umbes 5 aastat         | umbes 5 aasta pärast        |
| 2004-01-01T00:00:00.000Z | umbes 4 aastat       | umbes 4 aastat         | umbes 4 aasta pärast        |
| 2003-01-01T00:00:00.000Z | umbes 3 aastat       | umbes 3 aastat         | umbes 3 aasta pärast        |
| 2002-01-01T00:00:00.000Z | umbes 2 aastat       | umbes 2 aastat         | umbes 2 aasta pärast        |
| 2001-06-01T00:00:00.000Z | rohkem kui üks aasta | rohkem kui üks aasta   | rohkem kui ühe aasta pärast |
| 2001-02-01T00:00:00.000Z | umbes üks aasta      | umbes üks aasta        | umbes ühe aasta pärast      |
| 2001-01-01T00:00:00.000Z | umbes üks aasta      | umbes üks aasta        | umbes ühe aasta pärast      |
| 2000-06-01T00:00:00.000Z | 5 kuud               | 5 kuud                 | 5 kuu pärast                |
| 2000-03-01T00:00:00.000Z | 2 kuud               | 2 kuud                 | 2 kuu pärast                |
| 2000-02-01T00:00:00.000Z | umbes üks kuu        | umbes üks kuu          | umbes ühe kuu pärast        |
| 2000-01-15T00:00:00.000Z | 14 päeva             | 14 päeva               | 14 päeva pärast             |
| 2000-01-02T00:00:00.000Z | üks päev             | üks päev               | ühe päeva pärast            |
| 2000-01-01T06:00:00.000Z | umbes 6 tundi        | umbes 6 tundi          | umbes 6 tunni pärast        |
| 2000-01-01T01:00:00.000Z | umbes üks tund       | umbes üks tund         | umbes ühe tunni pärast      |
| 2000-01-01T00:45:00.000Z | umbes üks tund       | umbes üks tund         | umbes ühe tunni pärast      |
| 2000-01-01T00:30:00.000Z | 30 minutit           | 30 minutit             | 30 minuti pärast            |
| 2000-01-01T00:15:00.000Z | 15 minutit           | 15 minutit             | 15 minuti pärast            |
| 2000-01-01T00:01:00.000Z | üks minut            | üks minut              | ühe minuti pärast           |
| 2000-01-01T00:00:25.000Z | vähem kui üks minut  | pool minutit           | vähem kui ühe minuti pärast |
| 2000-01-01T00:00:15.000Z | vähem kui üks minut  | vähem kui 20 sekundit  | vähem kui ühe minuti pärast |
| 2000-01-01T00:00:05.000Z | vähem kui üks minut  | vähem kui 10 sekundit  | vähem kui ühe minuti pärast |
| 2000-01-01T00:00:00.000Z | vähem kui üks minut  | vähem kui 5 sekundit   | vähem kui ühe minuti eest   |
| 1999-12-31T23:59:55.000Z | vähem kui üks minut  | vähem kui 10 sekundit  | vähem kui ühe minuti eest   |
| 1999-12-31T23:59:45.000Z | vähem kui üks minut  | vähem kui 20 sekundit  | vähem kui ühe minuti eest   |
| 1999-12-31T23:59:35.000Z | vähem kui üks minut  | pool minutit           | vähem kui ühe minuti eest   |
| 1999-12-31T23:59:00.000Z | üks minut            | üks minut              | ühe minuti eest             |
| 1999-12-31T23:45:00.000Z | 15 minutit           | 15 minutit             | 15 minuti eest              |
| 1999-12-31T23:30:00.000Z | 30 minutit           | 30 minutit             | 30 minuti eest              |
| 1999-12-31T23:15:00.000Z | umbes üks tund       | umbes üks tund         | umbes ühe tunni eest        |
| 1999-12-31T23:00:00.000Z | umbes üks tund       | umbes üks tund         | umbes ühe tunni eest        |
| 1999-12-31T18:00:00.000Z | umbes 6 tundi        | umbes 6 tundi          | umbes 6 tunni eest          |
| 1999-12-30T00:00:00.000Z | 2 päeva              | 2 päeva                | 2 päeva eest                |
| 1999-12-15T00:00:00.000Z | 17 päeva             | 17 päeva               | 17 päeva eest               |
| 1999-12-01T00:00:00.000Z | umbes üks kuu        | umbes üks kuu          | umbes ühe kuu eest          |
| 1999-11-01T00:00:00.000Z | 2 kuud               | 2 kuud                 | 2 kuu eest                  |
| 1999-06-01T00:00:00.000Z | 7 kuud               | 7 kuud                 | 7 kuu eest                  |
| 1999-01-01T00:00:00.000Z | umbes üks aasta      | umbes üks aasta        | umbes ühe aasta eest        |
| 1998-12-01T00:00:00.000Z | umbes üks aasta      | umbes üks aasta        | umbes ühe aasta eest        |
| 1998-06-01T00:00:00.000Z | rohkem kui üks aasta | rohkem kui üks aasta   | rohkem kui ühe aasta eest   |
| 1998-01-01T00:00:00.000Z | umbes 2 aastat       | umbes 2 aastat         | umbes 2 aasta eest          |
| 1997-01-01T00:00:00.000Z | umbes 3 aastat       | umbes 3 aastat         | umbes 3 aasta eest          |
| 1996-01-01T00:00:00.000Z | umbes 4 aastat       | umbes 4 aastat         | umbes 4 aasta eest          |
| 1995-01-01T00:00:00.000Z | umbes 5 aastat       | umbes 5 aastat         | umbes 5 aasta eest          |
| 1994-01-01T00:00:00.000Z | umbes 6 aastat       | umbes 6 aastat         | umbes 6 aasta eest          |

## `formatDistanceStrict`

If now is January 1st, 2000, 00:00.

| Date                     | Result      | `addSuffix: true` | With forced unit (i.e. `hour`) |
| ------------------------ | ----------- | ----------------- | ------------------------------ |
| 2006-01-01T00:00:00.000Z | 6 aastat    | 6 aasta pärast    | 52608 tundi                    |
| 2005-01-01T00:00:00.000Z | 5 aastat    | 5 aasta pärast    | 43848 tundi                    |
| 2004-01-01T00:00:00.000Z | 4 aastat    | 4 aasta pärast    | 35064 tundi                    |
| 2003-01-01T00:00:00.000Z | 3 aastat    | 3 aasta pärast    | 26304 tundi                    |
| 2002-01-01T00:00:00.000Z | 2 aastat    | 2 aasta pärast    | 17544 tundi                    |
| 2001-06-01T00:00:00.000Z | üks aasta   | ühe aasta pärast  | 12408 tundi                    |
| 2001-02-01T00:00:00.000Z | üks aasta   | ühe aasta pärast  | 9528 tundi                     |
| 2001-01-01T00:00:00.000Z | üks aasta   | ühe aasta pärast  | 8784 tundi                     |
| 2000-06-01T00:00:00.000Z | 5 kuud      | 5 kuu pärast      | 3648 tundi                     |
| 2000-03-01T00:00:00.000Z | 2 kuud      | 2 kuu pärast      | 1440 tundi                     |
| 2000-02-01T00:00:00.000Z | üks kuu     | ühe kuu pärast    | 744 tundi                      |
| 2000-01-15T00:00:00.000Z | 14 päeva    | 14 päeva pärast   | 336 tundi                      |
| 2000-01-02T00:00:00.000Z | üks päev    | ühe päeva pärast  | 24 tundi                       |
| 2000-01-01T06:00:00.000Z | 6 tundi     | 6 tunni pärast    | 6 tundi                        |
| 2000-01-01T01:00:00.000Z | üks tund    | ühe tunni pärast  | üks tund                       |
| 2000-01-01T00:45:00.000Z | 45 minutit  | 45 minuti pärast  | üks tund                       |
| 2000-01-01T00:30:00.000Z | 30 minutit  | 30 minuti pärast  | üks tund                       |
| 2000-01-01T00:15:00.000Z | 15 minutit  | 15 minuti pärast  | 0 tundi                        |
| 2000-01-01T00:01:00.000Z | üks minut   | ühe minuti pärast | 0 tundi                        |
| 2000-01-01T00:00:25.000Z | 25 sekundit | 25 sekundi pärast | 0 tundi                        |
| 2000-01-01T00:00:15.000Z | 15 sekundit | 15 sekundi pärast | 0 tundi                        |
| 2000-01-01T00:00:05.000Z | 5 sekundit  | 5 sekundi pärast  | 0 tundi                        |
| 2000-01-01T00:00:00.000Z | 0 sekundit  | 0 sekundi eest    | 0 tundi                        |
| 1999-12-31T23:59:55.000Z | 5 sekundit  | 5 sekundi eest    | 0 tundi                        |
| 1999-12-31T23:59:45.000Z | 15 sekundit | 15 sekundi eest   | 0 tundi                        |
| 1999-12-31T23:59:35.000Z | 25 sekundit | 25 sekundi eest   | 0 tundi                        |
| 1999-12-31T23:59:00.000Z | üks minut   | ühe minuti eest   | 0 tundi                        |
| 1999-12-31T23:45:00.000Z | 15 minutit  | 15 minuti eest    | 0 tundi                        |
| 1999-12-31T23:30:00.000Z | 30 minutit  | 30 minuti eest    | üks tund                       |
| 1999-12-31T23:15:00.000Z | 45 minutit  | 45 minuti eest    | üks tund                       |
| 1999-12-31T23:00:00.000Z | üks tund    | ühe tunni eest    | üks tund                       |
| 1999-12-31T18:00:00.000Z | 6 tundi     | 6 tunni eest      | 6 tundi                        |
| 1999-12-30T00:00:00.000Z | 2 päeva     | 2 päeva eest      | 48 tundi                       |
| 1999-12-15T00:00:00.000Z | 17 päeva    | 17 päeva eest     | 408 tundi                      |
| 1999-12-01T00:00:00.000Z | üks kuu     | ühe kuu eest      | 744 tundi                      |
| 1999-11-01T00:00:00.000Z | 2 kuud      | 2 kuu eest        | 1464 tundi                     |
| 1999-06-01T00:00:00.000Z | 7 kuud      | 7 kuu eest        | 5136 tundi                     |
| 1999-01-01T00:00:00.000Z | üks aasta   | ühe aasta eest    | 8760 tundi                     |
| 1998-12-01T00:00:00.000Z | üks aasta   | ühe aasta eest    | 9504 tundi                     |
| 1998-06-01T00:00:00.000Z | 2 aastat    | 2 aasta eest      | 13896 tundi                    |
| 1998-01-01T00:00:00.000Z | 2 aastat    | 2 aasta eest      | 17520 tundi                    |
| 1997-01-01T00:00:00.000Z | 3 aastat    | 3 aasta eest      | 26280 tundi                    |
| 1996-01-01T00:00:00.000Z | 4 aastat    | 4 aasta eest      | 35064 tundi                    |
| 1995-01-01T00:00:00.000Z | 5 aastat    | 5 aasta eest      | 43824 tundi                    |
| 1994-01-01T00:00:00.000Z | 6 aastat    | 6 aasta eest      | 52584 tundi                    |

## `formatRelative`

If now is January 1st, 2000, 00:00.

| Date                     | Result                        |
| ------------------------ | ----------------------------- |
| 2000-01-10T00:00:00.000Z | 10.01.2000                    |
| 2000-01-05T00:00:00.000Z | järgmine kolmapäev kell 00:00 |
| 2000-01-02T00:00:00.000Z | homme kell 00:00              |
| 2000-01-01T00:00:00.000Z | täna kell 00:00               |
| 1999-12-31T00:00:00.000Z | eile kell 00:00               |
| 1999-12-27T00:00:00.000Z | eelmine esmaspäev kell 00:00  |
| 1999-12-21T00:00:00.000Z | 21.12.1999                    |
