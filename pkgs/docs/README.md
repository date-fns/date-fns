# @date-fns/docs

This library is used to load docs into the database and provide a schema for the website.

## Usage

The package is integrated into the date-fns build and release scripts, but if you need to run it manually, use the following instructions:

1. To generate the date-fns docs, start by installing the latest version:

```sh
npm i -D @date-fns/docs@latest
```

2. Then generate TypeDoc JSON file (`tmp/docs.json`):

```sh
npx typedoc
```

3. Then, upload the docs to the Firebase with the path to the service key:

```sh
env GOOGLE_APPLICATION_CREDENTIALS="secrets/$APP_ENV/key.json" npx date-fns-docs docs/config.js
```

Replace `$APP_ENV` with either `staging` or `production`.

## Contributing

When working locally, to upload the docs follow the instructions:

1. In the date-fns library source directory generate TypeDoc JSON file (`tmp/docs.json`):

```sh
npx typedoc
```

2. Rollback the docs for the current version for 1+n run to avoid having duplicates:

```sh
env GOOGLE_APPLICATION_CREDENTIALS="../date-fns/secrets/staging/key.json" npx tsx ./src/bin.ts ../date-fns/docs/config.js --rollback
```

3. Then upload the docs to the Firebase:

```sh
env GOOGLE_APPLICATION_CREDENTIALS="../date-fns/secrets/staging/key.json" npx tsx ./src/bin.ts ../date-fns/docs/config.js
```

## License

[MIT © Sasha Koss](https://kossnocorp.mit-license.org/)
