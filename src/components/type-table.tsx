import { AutoTypeTable } from 'fumadocs-typescript/ui'
import {
  createGenerator,
  createFileSystemGeneratorCache,
} from 'fumadocs-typescript'
import * as path from 'node:path'
import type { ComponentProps } from 'react'

const generator = createGenerator({
  cache: createFileSystemGeneratorCache(
    path.resolve('.fumadocs-typescript-cache'),
  ),
})

export function TypeTableAuto(
  props: Omit<ComponentProps<typeof AutoTypeTable>, 'generator'>,
) {
  return <AutoTypeTable generator={generator} {...props} />
}
