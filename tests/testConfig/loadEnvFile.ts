import { existsSync } from 'node:fs';

export default function loadEnvFile(): void {
    if (existsSync('.env.local')) {
        process.loadEnvFile('.env.local');
    }
}