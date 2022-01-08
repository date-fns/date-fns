# Indonesian (id) locale

## `format` and `parse`

| Title                           | Token string | Date                     | `format` result                       | `parse` result           |
| ------------------------------- | ------------ | ------------------------ | ------------------------------------- | ------------------------ |
| Calendar year                   | yo           | 1987-02-11T12:13:14.015Z | ke-1987                               | 1987-01-01T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | ke-5                                  | 0005-01-01T00:00:00.000Z |
| Local week-numbering year       | Yo           | 1987-02-11T12:13:14.015Z | ke-1987                               | 1986-12-29T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | ke-5                                  | 0004-12-27T00:00:00.000Z |
| Quarter (formatting)            | Qo           | 2019-01-01T12:13:14.015Z | ke-1                                  | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | ke-2                                  | 2019-04-01T00:00:00.000Z |
|                                 | QQQ          | 2019-01-01T12:13:14.015Z | K1                                    | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | K2                                    | Invalid Date             |
|                                 | QQQQ         | 2019-01-01T12:13:14.015Z | Kuartal ke-1                          | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | Kuartal ke-2                          | 2019-04-01T00:00:00.000Z |
|                                 | QQQQQ        | 2019-01-01T12:13:14.015Z | 1                                     | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 2                                     | 2019-04-01T00:00:00.000Z |
| Quarter (stand-alone)           | qo           | 2019-01-01T12:13:14.015Z | ke-1                                  | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | ke-2                                  | 2019-04-01T00:00:00.000Z |
|                                 | qqq          | 2019-01-01T12:13:14.015Z | K1                                    | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | K2                                    | Invalid Date             |
|                                 | qqqq         | 2019-01-01T12:13:14.015Z | Kuartal ke-1                          | 2019-01-01T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | Kuartal ke-2                          | 2019-04-01T00:00:00.000Z |
| Month (formatting)              | Mo           | 2019-02-11T12:13:14.015Z | ke-2                                  | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | ke-7                                  | 2019-07-01T00:00:00.000Z |
|                                 | MMM          | 2019-02-11T12:13:14.015Z | Feb                                   | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Jul                                   | 2019-07-01T00:00:00.000Z |
|                                 | MMMM         | 2019-02-11T12:13:14.015Z | Februari                              | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Juli                                  | 2019-07-01T00:00:00.000Z |
|                                 | MMMMM        | 2019-02-11T12:13:14.015Z | F                                     | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | J                                     | 2019-01-01T00:00:00.000Z |
| Month (stand-alone)             | Lo           | 2019-02-11T12:13:14.015Z | ke-2                                  | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | ke-7                                  | 2019-07-01T00:00:00.000Z |
|                                 | LLL          | 2019-02-11T12:13:14.015Z | Feb                                   | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Jul                                   | 2019-07-01T00:00:00.000Z |
|                                 | LLLL         | 2019-02-11T12:13:14.015Z | Februari                              | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Juli                                  | 2019-07-01T00:00:00.000Z |
|                                 | LLLLL        | 2019-02-11T12:13:14.015Z | F                                     | 2019-02-01T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | J                                     | 2019-01-01T00:00:00.000Z |
| Local week of year              | wo           | 2019-01-01T12:13:14.015Z | ke-1                                  | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | ke-48                                 | 2019-11-25T00:00:00.000Z |
| ISO week of year                | Io           | 2019-01-01T12:13:14.015Z | ke-1                                  | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | ke-48                                 | 2019-11-25T00:00:00.000Z |
| Day of month                    | do           | 2019-02-11T12:13:14.015Z | ke-11                                 | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-28T12:13:14.015Z | ke-28                                 | 2019-02-28T00:00:00.000Z |
| Day of year                     | Do           | 2019-02-11T12:13:14.015Z | ke-42                                 | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-12-31T12:13:14.015Z | ke-365                                | 2019-12-31T00:00:00.000Z |
| Day of week (formatting)        | E            | 2019-02-11T12:13:14.015Z | Sen                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Jum                                   | 2019-02-15T00:00:00.000Z |
|                                 | EE           | 2019-02-11T12:13:14.015Z | Sen                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Jum                                   | 2019-02-15T00:00:00.000Z |
|                                 | EEE          | 2019-02-11T12:13:14.015Z | Sen                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Jum                                   | 2019-02-15T00:00:00.000Z |
|                                 | EEEE         | 2019-02-11T12:13:14.015Z | Senin                                 | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Jumat                                 | 2019-02-15T00:00:00.000Z |
|                                 | EEEEE        | 2019-02-11T12:13:14.015Z | S                                     | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | J                                     | 2019-02-15T00:00:00.000Z |
|                                 | EEEEEE       | 2019-02-11T12:13:14.015Z | Sen                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Jum                                   | 2019-02-15T00:00:00.000Z |
| ISO day of week (formatting)    | io           | 2019-02-11T12:13:14.015Z | ke-1                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | ke-5                                  | 2019-02-15T00:00:00.000Z |
|                                 | iii          | 2019-02-11T12:13:14.015Z | Sen                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Jum                                   | 2019-02-15T00:00:00.000Z |
|                                 | iiii         | 2019-02-11T12:13:14.015Z | Senin                                 | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Jumat                                 | 2019-02-15T00:00:00.000Z |
|                                 | iiiii        | 2019-02-11T12:13:14.015Z | S                                     | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | J                                     | 2019-02-15T00:00:00.000Z |
|                                 | iiiiii       | 2019-02-11T12:13:14.015Z | Sen                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Jum                                   | 2019-02-15T00:00:00.000Z |
| Local day of week (formatting)  | eo           | 2019-02-11T12:13:14.015Z | ke-1                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | ke-5                                  | 2019-02-15T00:00:00.000Z |
|                                 | eee          | 2019-02-11T12:13:14.015Z | Sen                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Jum                                   | 2019-02-15T00:00:00.000Z |
|                                 | eeee         | 2019-02-11T12:13:14.015Z | Senin                                 | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Jumat                                 | 2019-02-15T00:00:00.000Z |
|                                 | eeeee        | 2019-02-11T12:13:14.015Z | S                                     | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | J                                     | 2019-02-15T00:00:00.000Z |
|                                 | eeeeee       | 2019-02-11T12:13:14.015Z | Sen                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Jum                                   | 2019-02-15T00:00:00.000Z |
| Local day of week (stand-alone) | co           | 2019-02-11T12:13:14.015Z | ke-1                                  | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | ke-5                                  | 2019-02-15T00:00:00.000Z |
|                                 | ccc          | 2019-02-11T12:13:14.015Z | Sen                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Jum                                   | 2019-02-15T00:00:00.000Z |
|                                 | cccc         | 2019-02-11T12:13:14.015Z | Senin                                 | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Jumat                                 | 2019-02-15T00:00:00.000Z |
|                                 | ccccc        | 2019-02-11T12:13:14.015Z | S                                     | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | J                                     | 2019-02-15T00:00:00.000Z |
|                                 | cccccc       | 2019-02-11T12:13:14.015Z | Sen                                   | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Jum                                   | 2019-02-15T00:00:00.000Z |
| AM, PM                          | a            | 2019-02-11T11:13:14.015Z | AM                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                    | 2019-02-11T00:00:00.000Z |
|                                 | aa           | 2019-02-11T11:13:14.015Z | AM                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                    | 2019-02-11T00:00:00.000Z |
|                                 | aaa          | 2019-02-11T11:13:14.015Z | am                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | pm                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | pm                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | am                                    | 2019-02-11T00:00:00.000Z |
|                                 | aaaa         | 2019-02-11T11:13:14.015Z | AM                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                    | 2019-02-11T00:00:00.000Z |
|                                 | aaaaa        | 2019-02-11T11:13:14.015Z | AM                                    | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                    | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                    | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                    | Invalid Date             |
| AM, PM, noon, midnight          | b            | 2019-02-11T11:13:14.015Z | AM                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                    | 2019-02-11T00:00:00.000Z |
|                                 | bb           | 2019-02-11T11:13:14.015Z | AM                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                    | 2019-02-11T00:00:00.000Z |
|                                 | bbb          | 2019-02-11T11:13:14.015Z | am                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | pm                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | pm                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | am                                    | 2019-02-11T00:00:00.000Z |
|                                 | bbbb         | 2019-02-11T11:13:14.015Z | AM                                    | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                    | 2019-02-11T12:00:00.000Z |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                    | 2019-02-11T00:00:00.000Z |
|                                 | bbbbb        | 2019-02-11T11:13:14.015Z | AM                                    | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | PM                                    | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | PM                                    | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | AM                                    | Invalid Date             |
| Flexible day period             | B            | 2019-02-11T11:13:14.015Z | pagi                                  | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | siang                                 | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | sore                                  | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | malam                                 | Invalid Date             |
|                                 | BB           | 2019-02-11T11:13:14.015Z | pagi                                  | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | siang                                 | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | sore                                  | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | malam                                 | Invalid Date             |
|                                 | BBB          | 2019-02-11T11:13:14.015Z | pagi                                  | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | siang                                 | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | sore                                  | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | malam                                 | Invalid Date             |
|                                 | BBBB         | 2019-02-11T11:13:14.015Z | pagi                                  | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | siang                                 | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | sore                                  | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | malam                                 | Invalid Date             |
|                                 | BBBBB        | 2019-02-11T11:13:14.015Z | pagi                                  | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | siang                                 | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | sore                                  | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | malam                                 | Invalid Date             |
| Hour [1-12]                     | ho           | 2019-02-11T11:13:14.015Z | ke-11                                 | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | ke-11                                 | 2019-02-11T23:00:00.000Z |
| Hour [0-23]                     | Ho           | 2019-02-11T11:13:14.015Z | ke-11                                 | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | ke-23                                 | 2019-02-11T23:00:00.000Z |
| Hour [0-11]                     | Ko           | 2019-02-11T11:13:14.015Z | ke-11                                 | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | ke-11                                 | 2019-02-11T23:00:00.000Z |
| Hour [1-24]                     | ko           | 2019-02-11T11:13:14.015Z | ke-11                                 | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | ke-23                                 | 2019-02-11T23:00:00.000Z |
| Minute                          | mo           | 2019-01-01T12:01:14.015Z | ke-1                                  | 2019-01-01T12:01:00.000Z |
|                                 |              | 2019-04-01T12:55:14.015Z | ke-55                                 | 2019-04-01T12:55:00.000Z |
| Second                          | so           | 2019-01-01T12:13:01.015Z | ke-1                                  | 2019-01-01T12:13:01.000Z |
|                                 |              | 2019-04-01T12:13:55.015Z | ke-55                                 | 2019-04-01T12:13:55.000Z |
| Long localized date             | P            | 1987-02-11T12:13:14.015Z | 11/2/1987                             | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29/5/1453                             | 1453-05-29T00:00:00.000Z |
|                                 | PP           | 1987-02-11T12:13:14.015Z | 11 Feb 1987                           | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 Mei 1453                           | 1453-05-29T00:00:00.000Z |
|                                 | PPP          | 1987-02-11T12:13:14.015Z | 11 Februari 1987                      | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 Mei 1453                           | 1453-05-29T00:00:00.000Z |
|                                 | PPPP         | 1987-02-11T12:13:14.015Z | Rabu, 11 Februari 1987                | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | Minggu, 29 Mei 1453                   | 1453-05-29T00:00:00.000Z |
| Long localized time             | p            | 1987-02-11T12:13:14.015Z | 12.13                                 | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23.59                                 | 1453-05-29T23:59:00.000Z |
|                                 | pp           | 1987-02-11T12:13:14.015Z | 12.13                                 | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23.59                                 | 1453-05-29T23:59:00.000Z |
|                                 | ppp          | 1987-02-11T12:13:14.015Z | 12.13.14                              | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23.59.59                              | 1453-05-29T23:59:59.000Z |
|                                 | pppp         | 1987-02-11T12:13:14.015Z | 12.13.14                              | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 23.59.59                              | 1453-05-29T23:59:59.000Z |
| Combination of date and time    | Pp           | 1987-02-11T12:13:14.015Z | 11/2/1987, 12.13                      | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29/5/1453, 23.59                      | 1453-05-29T23:59:00.000Z |
|                                 | PPpp         | 1987-02-11T12:13:14.015Z | 11 Feb 1987, 12.13                    | 1987-02-11T12:13:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 Mei 1453, 23.59                    | 1453-05-29T23:59:00.000Z |
|                                 | PPPppp       | 1987-02-11T12:13:14.015Z | 11 Februari 1987 pukul 12.13.14       | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 29 Mei 1453 pukul 23.59.59            | 1453-05-29T23:59:59.000Z |
|                                 | PPPPpppp     | 1987-02-11T12:13:14.015Z | Rabu, 11 Februari 1987 pukul 12.13.14 | 1987-02-11T12:13:14.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | Minggu, 29 Mei 1453 pukul 23.59.59    | 1453-05-29T23:59:59.000Z |

## `formatDistance`

If now is January 1st, 2000, 00:00.

| Date                     | Result              | `includeSeconds: true` | `addSuffix: true`               |
| ------------------------ | ------------------- | ---------------------- | ------------------------------- |
| 2006-01-01T00:00:00.000Z | sekitar 6 tahun     | sekitar 6 tahun        | dalam waktu sekitar 6 tahun     |
| 2005-01-01T00:00:00.000Z | sekitar 5 tahun     | sekitar 5 tahun        | dalam waktu sekitar 5 tahun     |
| 2004-01-01T00:00:00.000Z | sekitar 4 tahun     | sekitar 4 tahun        | dalam waktu sekitar 4 tahun     |
| 2003-01-01T00:00:00.000Z | sekitar 3 tahun     | sekitar 3 tahun        | dalam waktu sekitar 3 tahun     |
| 2002-01-01T00:00:00.000Z | sekitar 2 tahun     | sekitar 2 tahun        | dalam waktu sekitar 2 tahun     |
| 2001-06-01T00:00:00.000Z | lebih dari 1 tahun  | lebih dari 1 tahun     | dalam waktu lebih dari 1 tahun  |
| 2001-02-01T00:00:00.000Z | sekitar 1 tahun     | sekitar 1 tahun        | dalam waktu sekitar 1 tahun     |
| 2001-01-01T00:00:00.000Z | sekitar 1 tahun     | sekitar 1 tahun        | dalam waktu sekitar 1 tahun     |
| 2000-06-01T00:00:00.000Z | 5 bulan             | 5 bulan                | dalam waktu 5 bulan             |
| 2000-03-01T00:00:00.000Z | 2 bulan             | 2 bulan                | dalam waktu 2 bulan             |
| 2000-02-01T00:00:00.000Z | sekitar 1 bulan     | sekitar 1 bulan        | dalam waktu sekitar 1 bulan     |
| 2000-01-15T00:00:00.000Z | 14 hari             | 14 hari                | dalam waktu 14 hari             |
| 2000-01-02T00:00:00.000Z | 1 hari              | 1 hari                 | dalam waktu 1 hari              |
| 2000-01-01T06:00:00.000Z | sekitar 6 jam       | sekitar 6 jam          | dalam waktu sekitar 6 jam       |
| 2000-01-01T01:00:00.000Z | sekitar 1 jam       | sekitar 1 jam          | dalam waktu sekitar 1 jam       |
| 2000-01-01T00:45:00.000Z | sekitar 1 jam       | sekitar 1 jam          | dalam waktu sekitar 1 jam       |
| 2000-01-01T00:30:00.000Z | 30 menit            | 30 menit               | dalam waktu 30 menit            |
| 2000-01-01T00:15:00.000Z | 15 menit            | 15 menit               | dalam waktu 15 menit            |
| 2000-01-01T00:01:00.000Z | 1 menit             | 1 menit                | dalam waktu 1 menit             |
| 2000-01-01T00:00:25.000Z | kurang dari 1 menit | setengah menit         | dalam waktu kurang dari 1 menit |
| 2000-01-01T00:00:15.000Z | kurang dari 1 menit | kurang dari 20 detik   | dalam waktu kurang dari 1 menit |
| 2000-01-01T00:00:05.000Z | kurang dari 1 menit | kurang dari 10 detik   | dalam waktu kurang dari 1 menit |
| 2000-01-01T00:00:00.000Z | kurang dari 1 menit | kurang dari 5 detik    | kurang dari 1 menit yang lalu   |
| 1999-12-31T23:59:55.000Z | kurang dari 1 menit | kurang dari 10 detik   | kurang dari 1 menit yang lalu   |
| 1999-12-31T23:59:45.000Z | kurang dari 1 menit | kurang dari 20 detik   | kurang dari 1 menit yang lalu   |
| 1999-12-31T23:59:35.000Z | kurang dari 1 menit | setengah menit         | kurang dari 1 menit yang lalu   |
| 1999-12-31T23:59:00.000Z | 1 menit             | 1 menit                | 1 menit yang lalu               |
| 1999-12-31T23:45:00.000Z | 15 menit            | 15 menit               | 15 menit yang lalu              |
| 1999-12-31T23:30:00.000Z | 30 menit            | 30 menit               | 30 menit yang lalu              |
| 1999-12-31T23:15:00.000Z | sekitar 1 jam       | sekitar 1 jam          | sekitar 1 jam yang lalu         |
| 1999-12-31T23:00:00.000Z | sekitar 1 jam       | sekitar 1 jam          | sekitar 1 jam yang lalu         |
| 1999-12-31T18:00:00.000Z | sekitar 6 jam       | sekitar 6 jam          | sekitar 6 jam yang lalu         |
| 1999-12-30T00:00:00.000Z | 2 hari              | 2 hari                 | 2 hari yang lalu                |
| 1999-12-15T00:00:00.000Z | 17 hari             | 17 hari                | 17 hari yang lalu               |
| 1999-12-01T00:00:00.000Z | sekitar 1 bulan     | sekitar 1 bulan        | sekitar 1 bulan yang lalu       |
| 1999-11-01T00:00:00.000Z | 2 bulan             | 2 bulan                | 2 bulan yang lalu               |
| 1999-06-01T00:00:00.000Z | 7 bulan             | 7 bulan                | 7 bulan yang lalu               |
| 1999-01-01T00:00:00.000Z | sekitar 1 tahun     | sekitar 1 tahun        | sekitar 1 tahun yang lalu       |
| 1998-12-01T00:00:00.000Z | sekitar 1 tahun     | sekitar 1 tahun        | sekitar 1 tahun yang lalu       |
| 1998-06-01T00:00:00.000Z | lebih dari 1 tahun  | lebih dari 1 tahun     | lebih dari 1 tahun yang lalu    |
| 1998-01-01T00:00:00.000Z | sekitar 2 tahun     | sekitar 2 tahun        | sekitar 2 tahun yang lalu       |
| 1997-01-01T00:00:00.000Z | sekitar 3 tahun     | sekitar 3 tahun        | sekitar 3 tahun yang lalu       |
| 1996-01-01T00:00:00.000Z | sekitar 4 tahun     | sekitar 4 tahun        | sekitar 4 tahun yang lalu       |
| 1995-01-01T00:00:00.000Z | sekitar 5 tahun     | sekitar 5 tahun        | sekitar 5 tahun yang lalu       |
| 1994-01-01T00:00:00.000Z | sekitar 6 tahun     | sekitar 6 tahun        | sekitar 6 tahun yang lalu       |

## `formatDistanceStrict`

If now is January 1st, 2000, 00:00.

| Date                     | Result   | `addSuffix: true`    | With forced unit (i.e. `hour`) |
| ------------------------ | -------- | -------------------- | ------------------------------ |
| 2006-01-01T00:00:00.000Z | 6 tahun  | dalam waktu 6 tahun  | 52608 jam                      |
| 2005-01-01T00:00:00.000Z | 5 tahun  | dalam waktu 5 tahun  | 43848 jam                      |
| 2004-01-01T00:00:00.000Z | 4 tahun  | dalam waktu 4 tahun  | 35064 jam                      |
| 2003-01-01T00:00:00.000Z | 3 tahun  | dalam waktu 3 tahun  | 26304 jam                      |
| 2002-01-01T00:00:00.000Z | 2 tahun  | dalam waktu 2 tahun  | 17544 jam                      |
| 2001-06-01T00:00:00.000Z | 1 tahun  | dalam waktu 1 tahun  | 12408 jam                      |
| 2001-02-01T00:00:00.000Z | 1 tahun  | dalam waktu 1 tahun  | 9528 jam                       |
| 2001-01-01T00:00:00.000Z | 1 tahun  | dalam waktu 1 tahun  | 8784 jam                       |
| 2000-06-01T00:00:00.000Z | 5 bulan  | dalam waktu 5 bulan  | 3648 jam                       |
| 2000-03-01T00:00:00.000Z | 2 bulan  | dalam waktu 2 bulan  | 1440 jam                       |
| 2000-02-01T00:00:00.000Z | 1 bulan  | dalam waktu 1 bulan  | 744 jam                        |
| 2000-01-15T00:00:00.000Z | 14 hari  | dalam waktu 14 hari  | 336 jam                        |
| 2000-01-02T00:00:00.000Z | 1 hari   | dalam waktu 1 hari   | 24 jam                         |
| 2000-01-01T06:00:00.000Z | 6 jam    | dalam waktu 6 jam    | 6 jam                          |
| 2000-01-01T01:00:00.000Z | 1 jam    | dalam waktu 1 jam    | 1 jam                          |
| 2000-01-01T00:45:00.000Z | 45 menit | dalam waktu 45 menit | 1 jam                          |
| 2000-01-01T00:30:00.000Z | 30 menit | dalam waktu 30 menit | 1 jam                          |
| 2000-01-01T00:15:00.000Z | 15 menit | dalam waktu 15 menit | 0 jam                          |
| 2000-01-01T00:01:00.000Z | 1 menit  | dalam waktu 1 menit  | 0 jam                          |
| 2000-01-01T00:00:25.000Z | 25 detik | dalam waktu 25 detik | 0 jam                          |
| 2000-01-01T00:00:15.000Z | 15 detik | dalam waktu 15 detik | 0 jam                          |
| 2000-01-01T00:00:05.000Z | 5 detik  | dalam waktu 5 detik  | 0 jam                          |
| 2000-01-01T00:00:00.000Z | 0 detik  | 0 detik yang lalu    | 0 jam                          |
| 1999-12-31T23:59:55.000Z | 5 detik  | 5 detik yang lalu    | 0 jam                          |
| 1999-12-31T23:59:45.000Z | 15 detik | 15 detik yang lalu   | 0 jam                          |
| 1999-12-31T23:59:35.000Z | 25 detik | 25 detik yang lalu   | 0 jam                          |
| 1999-12-31T23:59:00.000Z | 1 menit  | 1 menit yang lalu    | 0 jam                          |
| 1999-12-31T23:45:00.000Z | 15 menit | 15 menit yang lalu   | 0 jam                          |
| 1999-12-31T23:30:00.000Z | 30 menit | 30 menit yang lalu   | 1 jam                          |
| 1999-12-31T23:15:00.000Z | 45 menit | 45 menit yang lalu   | 1 jam                          |
| 1999-12-31T23:00:00.000Z | 1 jam    | 1 jam yang lalu      | 1 jam                          |
| 1999-12-31T18:00:00.000Z | 6 jam    | 6 jam yang lalu      | 6 jam                          |
| 1999-12-30T00:00:00.000Z | 2 hari   | 2 hari yang lalu     | 48 jam                         |
| 1999-12-15T00:00:00.000Z | 17 hari  | 17 hari yang lalu    | 408 jam                        |
| 1999-12-01T00:00:00.000Z | 1 bulan  | 1 bulan yang lalu    | 744 jam                        |
| 1999-11-01T00:00:00.000Z | 2 bulan  | 2 bulan yang lalu    | 1464 jam                       |
| 1999-06-01T00:00:00.000Z | 7 bulan  | 7 bulan yang lalu    | 5136 jam                       |
| 1999-01-01T00:00:00.000Z | 1 tahun  | 1 tahun yang lalu    | 8760 jam                       |
| 1998-12-01T00:00:00.000Z | 1 tahun  | 1 tahun yang lalu    | 9504 jam                       |
| 1998-06-01T00:00:00.000Z | 2 tahun  | 2 tahun yang lalu    | 13896 jam                      |
| 1998-01-01T00:00:00.000Z | 2 tahun  | 2 tahun yang lalu    | 17520 jam                      |
| 1997-01-01T00:00:00.000Z | 3 tahun  | 3 tahun yang lalu    | 26280 jam                      |
| 1996-01-01T00:00:00.000Z | 4 tahun  | 4 tahun yang lalu    | 35064 jam                      |
| 1995-01-01T00:00:00.000Z | 5 tahun  | 5 tahun yang lalu    | 43824 jam                      |
| 1994-01-01T00:00:00.000Z | 6 tahun  | 6 tahun yang lalu    | 52584 jam                      |

## `formatRelative`

If now is January 1st, 2000, 00:00.

| Date                     | Result                 |
| ------------------------ | ---------------------- |
| 2000-01-10T00:00:00.000Z | 10/1/2000              |
| 2000-01-05T00:00:00.000Z | Rabu pukul 00.00       |
| 2000-01-02T00:00:00.000Z | Besok pukul 00.00      |
| 2000-01-01T00:00:00.000Z | Hari ini pukul 00.00   |
| 1999-12-31T00:00:00.000Z | Kemarin pukul 00.00    |
| 1999-12-27T00:00:00.000Z | Senin lalu pukul 00.00 |
| 1999-12-21T00:00:00.000Z | 21/12/1999             |

## `formatDuration`

| Duration      | Result   |
| ------------- | -------- |
| {"years":0}   | 0 tahun  |
| {"years":1}   | 1 tahun  |
| {"years":2}   | 2 tahun  |
| {"months":0}  | 0 bulan  |
| {"months":1}  | 1 bulan  |
| {"months":2}  | 2 bulan  |
| {"weeks":0}   | 0 minggu |
| {"weeks":1}   | 1 minggu |
| {"weeks":2}   | 2 minggu |
| {"days":0}    | 0 hari   |
| {"days":1}    | 1 hari   |
| {"days":2}    | 2 hari   |
| {"hours":0}   | 0 jam    |
| {"hours":1}   | 1 jam    |
| {"hours":2}   | 2 jam    |
| {"minutes":0} | 0 menit  |
| {"minutes":1} | 1 menit  |
| {"minutes":2} | 2 menit  |
| {"seconds":0} | 0 detik  |
| {"seconds":1} | 1 detik  |
| {"seconds":2} | 2 detik  |
