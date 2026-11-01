import Suite from "./type/suite";

const suiteConfig = process.env.suite;

if (suiteConfig !== Suite.E2E && suiteConfig !== Suite.API) {
    throw new Error(
        'Invalid or missing suite environment variable. Allowed values: e2e, api.',
    );
}

export default suiteConfig;