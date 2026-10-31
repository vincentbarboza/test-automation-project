import Suite from "../lib/type/config/suite";

const suite = process.env.suite;

if (suite !== Suite.E2E && suite !== Suite.API) {
    throw new Error(
        'Invalid or missing suite environment variable. Allowed values: e2e, api.',
    );
}

export default suite;