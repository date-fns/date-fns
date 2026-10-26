# Rspack lazy barrels

Compares build performance with [barrel optimization](https://rspack.rs/guide/advanced/lazy-barrel)
enabled and disabled.

[example.js](./example.js) imports `format` and `enUS` to reproduce the barrel compilation overhead discussed in [#3806](https://github.com/date-fns/date-fns/issues/3806).

Rspack is pinned to **1.7.12** because v2 removed the `experiments.lazyBarrel` toggle.

## Run

From the repository root:

```sh
mise //pkgs/core/examples/rspack-lazy-barrel:build
mise //pkgs/core/examples/rspack-lazy-barrel:test
```
