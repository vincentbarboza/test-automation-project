# Test Automation Project

A TypeScript and Playwright test automation project covering Vendure storefront end-to-end tests and Restful Booker API tests.

## Test suites

The Playwright configuration separates tests into two suites:

- **Vendure E2E** — storefront tests, with English (`en`) and German (`de`) test data.
- **Restful Booker API** — API tests against the local Restful Booker application.

The tests and shared support code live under `tests/`:

```text
tests/
├── api/playwright/restfulBooker/tests/
└── e2e/playwright/
    ├── config/       # Suite selection and test-data loader setup
    ├── fixture/      # Shared Playwright fixtures
    ├── lib/          # Configuration and test-data types
    ├── testData/     # Locale-specific data (en, de)
    └── tests/        # Vendure storefront tests
```

Set the `suite` environment variable before running Playwright:

- `e2e` selects the Vendure suite and requires `dataTarget` to be `en` or `de`.
- `api` selects API tests and does not initialize the E2E test-data loader.

The configuration validates `suite`; it does not silently choose a default.

## Getting started

Install the root test dependencies:

```powershell
npm ci
```

Install the Restful Booker application dependencies when running API tests:

```powershell
npm ci --prefix restful-booker-app
```

## Running tests locally

### Vendure E2E

Start Vendure in one terminal:

```powershell
npm run app:vendure
```

In another terminal, select the E2E suite and language, then run the tests:

```powershell
$env:suite = 'e2e'
$env:dataTarget = 'en' # Use 'de' for German test data
npm run pw:test:vendure
```

### Restful Booker API

Start Restful Booker on port `3002`:

```powershell
npm run app:booker
```

In another terminal, select and run the API suite:

```powershell
$env:suite = 'api'
npm run pw:test:booker
```

## Other commands

```powershell
npm run pw:lint       # Lint Playwright tests
npm run typeCheck     # Type-check the project
npm run pw:report     # Open the HTML Playwright report
```

## CI

GitHub Actions is defined in `.github/workflows/`. The main `ci.yml` workflow includes code quality, Vendure Playwright, and a separate Restful Booker API workflow.

## Tech stack

- TypeScript
- Playwright
- Node.js
- ESLint
- GitHub Actions
