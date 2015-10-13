# Release Process

1. Make sure that all the tests are green at CI.
2. Update `VERSION` file.
3. Run `npm run sync-versions`.
4. Build `index.js` with `npm run generate-index`.
5. Build UMD build: `npm run build`.
6. Build docs: `npm run docs`.
7. Make commit.
8. Tag commit with proper name (`vX.X.X`)
9. Push with tags
10. Now you ready for `npm publush`
11. Done!
