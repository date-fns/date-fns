# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning].

This change log follows the format documented in [Keep a CHANGELOG].

[semantic versioning]: http://semver.org/
[keep a changelog]: http://keepachangelog.com/

## v2.1.1 - 2025-07-30

### Fixed

- Fixed CommonJS support by adjusting the `main` field in `package.json`.

## v2.1.0 - 2024-09-14

### Added

- Added more documentation to the `README.md` file and JSDoc.

## v2.0.1 - 2024-09-11

### Fixed

- [Fixed `UTCDateMini` type definition](https://github.com/date-fns/utc/pull/11) [@fabon-f1](https://github.com/fabon-f1).

## v2.0.0 - 2024-09-10

### Added

- Added `tz` function that allows to specify the context for the [date-fns] functions (**starting from date-fns@4**):

  ```ts
  import { isSameDay } from "date-fns";
  import { tz } from "@date-fns/utc";

  isSameDay("2024-09-09T23:00:00-04:00", "2024-09-10T10:00:00+08:00", {
    in: tz("America/New_York"),
  });
  //=> true
  ```

- Added `LICENSE.md` file to the package. Just like before, the license is MIT, but now it's more explicit.

### Changed

- **BREAKING**: The package now is ESM-first. The CommonJS is still support and It should not affect most users, but it might break in certains environments. If you encounter any issues, please [report them](https://github.com/date-fns/utc/issues/new).

## v1.2.0 - 2024-03-09

### Added

- Added support for [Sinon's fake timers](https://github.com/sinonjs/fake-timers), frameworks that rely on it (Jest), and other time manipulation libraries that override the `Date.now` and the `Date` constructor.

## v1.1.1 - 2023-12-22

### Fixed

- Made the package compatible with a wide variety of environments by updating the `exports` in the package.

## v1.1.0 - 2023-04-10

### Added

- Added support for string parsing.

## v1.0.0 - 2022-07-10

Initial version
