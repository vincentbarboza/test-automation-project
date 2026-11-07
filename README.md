<div align="center">

# Test Automation

**A growing automation engineering project built to bring applications, testing tools, and CI workflows together.**

More than a collection of checks, this repository is a practical foundation for exploring how automation systems are structured, integrated, and evolved across different applications and testing layers.

[![CI](https://github.com/vincentbarboza/test-automation-project/actions/workflows/ci.yml/badge.svg)](https://github.com/vincentbarboza/test-automation-project/actions/workflows/ci.yml)

</div>

## The project

This is an actively evolving automation project, bringing together applications such as Vendure and Restful Booker with tools including Playwright and Artillery. Its focus is the engineering around automation: organizing workflows, preparing application environments, connecting different testing layers, and making results useful in continuous integration.

The current applications and tools are a starting point, not a fixed scope. The project is designed to grow with new applications, automation approaches, and technologies.

## Automation suites

- **E2E — Playwright:** Runs browser tests against the Vendure storefront in English and German, checking the interface, navigation, and language selection.
- **API — Playwright:** Sends requests to the Restful Booker API and checks authentication responses for valid and invalid credentials.
- **Performance — Artillery:** Sends concurrent requests to the Restful Booker API and measures response times, failures, and successful authentication responses.

## Engineering highlights

- **Same browser tests in two languages:** The Vendure browser suite runs in English and German, using different language data with the same test code.
- **Separate CI workflows:** GitHub Actions runs code checks, browser tests, API tests, and performance tests as distinct workflows.
- **Shared application setup:** Reusable setup steps install dependencies, start each application, prepare sample data when needed, and check that the application is ready.
- **Independent API and performance runs:** These workflows run separately but use the same setup for Restful Booker. Vendure has a separate setup that can also be used by other browser-testing tools.
- **More than one application and tool:** The project brings together a storefront, an API, Playwright, and Artillery.
- **Results available after a run:** CI saves Playwright and Artillery reports, and prints application logs when a run fails. It also runs ESLint and TypeScript checks.

## Technology

<p>
  <img alt="Playwright" src="https://img.shields.io/badge/Playwright-Browser%20%26%20API-2EAD33?logo=playwright&logoColor=white">
  <img alt="Artillery" src="https://img.shields.io/badge/Artillery-Load%20testing-7B61FF">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white">
  <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white">
  <img alt="GitHub Actions" src="https://img.shields.io/badge/GitHub%20Actions-CI-2088FF?logo=githubactions&logoColor=white">
</p>

## Built to keep growing

This project is under active development. Its structure makes it possible to add new applications, tools, and automation approaches over time, while keeping CI workflows and environment setup organized and reusable.
