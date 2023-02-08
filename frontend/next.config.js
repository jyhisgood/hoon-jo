const { i18n } = require('./next-i18next.config');

const { BACKEND_API_URL = 'http://localhost:4000' } = process.env;

module.exports = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${BACKEND_API_URL}/:path*`,
      },
    ];
  },
};
