# AI Agents Instructions

Packages:

- `pkgs/core`: The core `date-fns` package.
- `pkgs/utc`: The `@date-fns/utc` package that provides the `UTCDate` class.
- `pkgs/tz`: The `@date-fns/tz` package that provides the `TZDate` class along with time zone utility functions.

## I18n

When working with locales, see the contributing instructions `core/docs/i18nContributionGuide.md`.

Often I18n PR authors forget to update the locale snapshots; do it by running `mise //pkgs/core:gen/locales/snapshots`.

## PRs

When working on a PR, use the `gh` CLI to switch to the branch: `gh pr checkout <pr_number>`.

If there are uncommitted changes, return to the human and ask for the next steps.

Often PRs are outdated and need to be rebased on the latest `main`. When explicitly requested, make sure `main` is up to date, switch to the PR branch, and then `git rebase main`. Don't push, and always mention that a rebase was done when reporting back to the human.

When the request task is done, report back to the human with a summary of what was done. Don't commit or push any changes unless explicitly requested.

## Git

Don't do any Git operations unless explicitly requested or this file instructs you to do so.
