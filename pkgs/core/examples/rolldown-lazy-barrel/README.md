# Rolldown lazy barrels

Compares build performance with [`experimental.lazyBarrel`](https://rolldown.rs/reference/InputOptions.experimental#lazybarrel) enabled and disabled.

[example.js](./example.js) imports `format` and `enUS` to reproduce the barrel compilation overhead discussed in [#3806](https://github.com/date-fns/date-fns/issues/3806).

## Run

From the repository root:

```sh
mise //pkgs/core/examples/rolldown-lazy-barrel:build
mise //pkgs/core/examples/rolldown-lazy-barrel:test
```
