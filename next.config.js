const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const PLUGINS = [
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
        sw: 'service-worker.js',
        runtimeCaching,
      },
    },
  ],
  [
    optimizedImages,
    {
      optimizeInDev: true,
      svgo: {
        plugins: [{ name: 'removeViewBox', active: false }],
      },
    },
  ],
]

module.exports = withPlugins(PLUGINS, {
  dir: 'src',
  poweredByHeader: false,
  // reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
    ]
  },
})
