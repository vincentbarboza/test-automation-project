export default function getRequiredEnv(varName: string): string {
    const varValue = process.env[varName];

    if (varValue === undefined || varValue.length === 0) {
        throw new Error(`Missing required environment variable: ${varName}`);
    }

    return varValue;
}
