import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/site/i18n/request.ts');

const nextConfig: NextConfig = {
    cacheComponents: true,
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
                hostname: 'wwwmy-shop.com',
            },
        ],
    },
};

export default withNextIntl(nextConfig);