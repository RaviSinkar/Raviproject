/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        url: require.resolve('url'),
        zlib: require.resolve('browserify-zlib'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        assert: require.resolve('assert'),
        os: require.resolve('os-browserify'),
        path: require.resolve('path-browserify'),
        'process/browser': require.resolve('process/browser'),
      };
    }

    // Ignore undici in client-side bundle
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        undici: false
      };
    }

    return config;
  },
  transpilePackages: [
    '@mui/material',
    '@mui/icons-material',
    '@emotion/react',
    '@emotion/styled'
  ]
};

module.exports = nextConfig; 