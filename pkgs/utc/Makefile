test:
	@env TZ=Asia/Kolkata pnpm vitest run

test-watch:
	@env TZ=Asia/Kolkata pnpm vitest

test-node:
	./scripts/test/node.sh

test-types: build
	@pnpm attw --pack dist

build: prepare-build
	@pnpm tsgo -p tsconfig.dist.json
	@env BABEL_ENV=esm pnpm babel src --config-file ./babel.config.json --source-root src --out-dir dist --extensions .js,.ts --out-file-extension .js --quiet
	@env BABEL_ENV=cjs pnpm babel src --config-file ./babel.config.json --source-root src --out-dir dist --extensions .js,.ts --out-file-extension .cjs --quiet
	@node copy.mjs
	@make build-cts

build-cts:
	@find dist -name '*.d.ts' | while read file; do \
		new_file=$${file%.d.ts}.d.cts; \
		cp $$file $$new_file; \
	done

prepare-build:
	@rm -rf dist
	@mkdir -p dist

publish: build
	@cd dist && pnpm publish --access public

publish-next: build
	@cd dist && pnpm publish --access public --tag next

link:
	@cd dist && pnpm link
