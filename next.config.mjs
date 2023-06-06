import withPlugins from 'next-compose-plugins'
import optimizedImages from 'next-optimized-images-2'

const PLUGINS = [
  [
    optimizedImages({
      optimizeInDev: true,
    }),
  ],
]

export default withPlugins(PLUGINS, {
  output: 'export',
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  compiler: {
    // removeConsole: true,
    styledComponents: true,
  },
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },
  reactStrictMode: true,
})
