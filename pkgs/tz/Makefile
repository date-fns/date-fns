test:
	@env TZ=Asia/Singapore pnpm vitest run
.PHONY: test

test-watch:
	@env TZ=Asia/Singapore pnpm vitest

test-node:
	./scripts/test/node.sh

types:
	@pnpm tsgo --noEmit

types-watch:
	@pnpm tsgo --noEmit --watch

build: prepare-build
	@pnpm tsgo -p tsconfig.dist.json
	@pnpm exec date-fns-build-package src dist esm
	@pnpm exec date-fns-build-package src dist cjs
	@node copy.mjs
	@make build-cts
	@jaq -i '. + .publishConfig' dist/package.json
	@jaq -i 'del(.devDependencies, .scripts, .publishConfig)' dist/package.json

build-cts:
	@find dist -name '*.d.ts' | while read file; do \
		new_file=$${file%.d.ts}.d.cts; \
		sed 's/\.js"/\.cjs"/g; s/\.ts"/\.cts"/g' $$file > $$new_file; \
	done

prepare-build:
	@rm -rf dist
	@mkdir -p dist

publish: build
	cd dist && pnpm publish --access public

publish-next: build
	cd dist && pnpm publish --access public --tag next

link:
	@cd dist && pnpm link
