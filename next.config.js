const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  },
  // Optimize for mobile and Cloudflare
  compress: true,
  poweredByHeader: false,
  reactStrictMode: false,
  swcMinify: true,
  // Next-intl configuration
  trailingSlash: false,
};

// Apply next-intl plugin and add trailing slash env var
const configWithNextIntl = withNextIntl(nextConfig);

// Add env var after plugin transformation
configWithNextIntl.env = {
  ...configWithNextIntl.env,
  _next_intl_trailing_slash: 'false',
};

module.exports = configWithNextIntl;
