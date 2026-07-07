build:
	pnpm exec rolldown src/browser.ts --platform browser --file dist/static/browser.js

build-watch:
	pnpm exec rolldown src/browser.ts --platform browser --file dist/static/browser.js --watch

dev:
	pnpm exec concurrently "make build-watch" "make dev-server"

dev-server:
	pnpm exec tsx src/server.ts --watch