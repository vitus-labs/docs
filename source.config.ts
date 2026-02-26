import { defineDocs, defineConfig } from 'fumadocs-mdx/config'
import { remarkInstall } from 'fumadocs-docgen'
import {
  remarkAutoTypeTable,
  createGenerator,
  createFileSystemGeneratorCache,
} from 'fumadocs-typescript'
import * as path from 'node:path'

const generator = createGenerator({
  cache: createFileSystemGeneratorCache(
    path.resolve('.fumadocs-typescript-cache'),
  ),
})

export const docs = defineDocs({
  dir: 'content/docs',
})

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkInstall, [remarkAutoTypeTable, { generator }]],
  },
})
