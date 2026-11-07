# Test Automation

This is an active test automation project that is continuously developed and expanded. It currently brings together browser-based end-to-end testing, API testing, and performance testing across multiple applications. New test scenarios, applications, and tools will be added as the project grows.

## What is covered

### Vendure storefront — Playwright E2E

Browser tests run against the Vendure storefront in English and German. Current coverage checks key header behavior, including the logo, navigation links, and language picker, and verifies that navigation requests return successfully.

### Restful Booker — Playwright API

Authentication tests cover both successful and unsuccessful login attempts. They verify that valid credentials return a non-empty token and that invalid or incomplete credentials return the expected error response.

### Restful Booker — Artillery performance

A 60-second login load scenario runs at five virtual users per second. It checks that successful logins return a token, no virtual users fail, the 95th-percentile response time stays below 500 ms, and the 99th percentile stays below 1,000 ms.

## Running in CI

GitHub Actions runs code-quality checks, the Vendure browser suite for both locales, Restful Booker API tests, and the Artillery performance scenario. API and performance run as separate jobs and use a shared Restful Booker setup action. Vendure setup is also reusable by other browser-testing tools.

Playwright and Artillery reports are uploaded as workflow artifacts. Playwright retries failures in CI and retains screenshots, traces, and video for failed tests.

## Tools

- **Playwright** for browser and API testing
- **Artillery** for HTTP load testing
- **TypeScript** for typed test support and configuration
- **ESLint** and TypeScript checks for code quality
- **GitHub Actions** for continuous integration
