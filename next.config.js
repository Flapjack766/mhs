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
  env: {
    _next_intl_trailing_slash: 'false',
  },
  // Optimize for mobile and Cloudflare
  compress: true,
  poweredByHeader: false,
  reactStrictMode: false,
  swcMinify: true,
  // Exclude problematic files from build tracing to prevent micromatch stack overflow
  outputFileTracingExcludes: {
    '*': [
      'config.yml',
      'mhstimber-config.yml',
      'tunnel-config.yml',
      'wrangler.toml',
      '.cloudflared/**',
      '*.yml',
      '*.toml',
    ],
  },
};

module.exports = withNextIntl(nextConfig);
