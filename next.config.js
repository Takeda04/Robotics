/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    experimental: {
      turbo: {
        rules: {
          '*.svg': {
            loaders: ['@svgr/webpack'],
            as: '*.js',
          },
        },
      },
    },
  }
