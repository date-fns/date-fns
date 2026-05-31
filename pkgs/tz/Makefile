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

test-types: build
	@cd dist && pnpm pack --out ../tmp/dist.tgz
	@pnpm attw tmp/dist.tgz

build: prepare-build
	@pnpm tsgo -p tsconfig.dist.json
	@env BABEL_ENV=esm pnpm babel src --config-file ./babel.config.json --source-root src --out-dir dist --extensions .js,.ts --out-file-extension .js --quiet
	@env BABEL_ENV=cjs pnpm babel src --config-file ./babel.config.json --source-root src --out-dir dist --extensions .js,.ts --out-file-extension .cjs --quiet
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
