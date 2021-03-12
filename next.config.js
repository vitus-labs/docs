const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
})

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
  [
    withMDX,
    {
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    },
  ],
]

module.exports = withPlugins(PLUGINS, {
  dir: 'src',
  poweredByHeader: false,
  // reactStrictMode: true,
})
