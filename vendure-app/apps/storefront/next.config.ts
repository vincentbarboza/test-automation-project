import { resolve } from 'node:path';
import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/site/i18n/request.ts');

const nextConfig: NextConfig = {
    cacheComponents: true,
    turbopack: {
        root: resolve(__dirname, '../../..'),
    },
    images: {
        dangerouslyAllowLocalIP: true,
        remotePatterns: [
            {
                hostname: 'readonlydemo.vendure.io',
            },
            {
                hostname: 'demo.vendure.io',
            },
            {
                hostname: 'localhost',
            },
            {
                hostname: 'www.my-shop.com',
            },
        ],
    },
};

export default withNextIntl(nextConfig);