import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import mdx from 'remark-mdx'
import { get } from '@vitus-labs/core'

const ROOT_DIRECTORY = join(process.cwd(), '/src/components/pages')

// --------------------------------------------------------
// Get All Available slugs in a map
// --------------------------------------------------------
export const getSlugsMap = (dir = 'docs') => {
  const dirPath = join(ROOT_DIRECTORY, dir)
  const directories = fs.readdirSync(dirPath)

  const result: Record<string, unknown> = {}

  directories.forEach((item) => {
    if (item.endsWith('.mdx')) {
      const finalName = item.replace('.mdx', '').split('-')

      let helper = finalName.length > 0 ? finalName.join('-') : finalName[0]

      if (!isNaN(finalName[0])) {
        const [_, ...rest] = finalName
        helper = rest.join('-')
      }

      result[helper] = item
    } else {
      result[item] = getSlugsMap(join(dir, item))
    }
  })

  return result
}

// --------------------------------------------------------
// Transforms slug map into array of keys
// --------------------------------------------------------
type TransformSlugs = (
  data: Record<string, unknown>,
  result: Array<string[]>,
  keys: Array<string>
) => void

export const transformSlugs: TransformSlugs = (
  data,
  result = [],
  keys = []
) => {
  Object.entries(data).forEach(([key, value]) => {
    if (
      typeof value !== null &&
      typeof value === 'object' &&
      Object.keys(value as {}).length > 0
    ) {
      transformSlugs(value as {}, result, [...keys, key])
    } else {
      result.push([...keys, key])
    }
  })
}

// --------------------------------------------------------
// Get All Available slugs as an array
// --------------------------------------------------------
type GetSlugs = (dir: string) => Array<string[]>

export const getSlugs: GetSlugs = (dir) => {
  const map = getSlugsMap(dir)
  const result: Array<string[]> = []

  transformSlugs(map, result, [])

  return result
}

// --------------------------------------------------------
// Load a file by slug
// --------------------------------------------------------
type GetFileBySlug = (
  dir: string,
  slug: string[]
) => Promise<ReturnType<typeof fs.readFileSync>>

export const getFileBySlug: GetFileBySlug = async (dir, slug) => {
  const _slug = [...slug]
  const slugMap = getSlugsMap(dir)
  const fileName = get(slugMap, _slug)

  _slug.pop()

  const fullPath = join(...[ROOT_DIRECTORY, dir, ..._slug, fileName])

  const file = fs.readFileSync(fullPath, 'utf8')

  return file
}

// --------------------------------------------------------
// Parse markdown file
// --------------------------------------------------------
type ParseMarkdownFromFile = (file: any) => Promise<ReturnType<typeof remark>>

export const parseMarkdownFromFile: ParseMarkdownFromFile = async (file) => {
  let result

  await remark()
    .use(mdx)
    .use(() => (tree) => {
      result = tree
    })
    .process(file)

  return result
}

// --------------------------------------------------------
// Parse markdown file
// --------------------------------------------------------
export const splitMetadataAndContentFromFile = async (file) => {
  const { data, content } = matter(file)

  return { data, content }
}

// --------------------------------------------------------
// Load a file by slug
// --------------------------------------------------------
type FilterMenu = (
  obj: { children: any[] } & Record<string, unknown>
) => {
  mainHeading?: string
  subHeadings?: string[]
}

export const filterMenu: FilterMenu = (obj) => {
  let mainHeading
  const subHeadings: string[] = []

  obj.children.forEach((item) => {
    if (item.type === 'heading' && item.depth === 1) {
      const value = item.children[0].value
      mainHeading = value
    }

    if (item.type === 'heading' && item.depth === 2) {
      const value = item.children[0].value
      subHeadings.push(value)
    }
  })

  return { mainHeading, subHeadings }
}

// --------------------------------------------------------
// Generate main menu
// --------------------------------------------------------
type Link = {
  title?: string
  slug?: string
  submenu?: Array<{ title: string; anchor: string }>
}

type GenerateMainMenu = (dir: string, slug: string[]) => Promise<Link[]>

export const generateMenu: GenerateMainMenu = async (dir, slug) => {
  // remove last item from slug to load group of files in the same section
  const _slug: string[] = [...slug].splice(0, slug.length - 1)
  // get slug map of keys of the same group
  const slugMap = getSlugsMap(join(...[dir, ..._slug]))
  // slug map keys
  const slugsMapKeys = Object.keys(slugMap)

  const result = slugsMapKeys.reduce(async (acc, item) => {
    const prevValue = await acc
    const file = await getFileBySlug(dir, [..._slug, item])
    const { content } = await splitMetadataAndContentFromFile(file)
    const parsedFile = await parseMarkdownFromFile(content)
    const menu = await filterMenu(parsedFile as any)
    const itemLink = `/${[dir, ..._slug, item].join('/')}`

    prevValue.push({
      title: menu.mainHeading,
      slug: itemLink,
      submenu: menu.subHeadings?.map((item) => ({
        title: item,
        anchor: `${itemLink}#${item.replace(/ /g, '-').toLowerCase()}`,
      })),
    })

    return prevValue
  }, [] as Link[]) as unknown

  return result as Link[]
}

// const findTitleFromMarkdown = (content) => {
//   return content.children.find((item) => {
//     if (item.type === 'heading' && item.depth === 1) {
//       const value = item.children[0].value
//       return value
//     }
//   })
// }

export const getMetaDataFromFile = async ({ data, content }) => {
  const meta = data

  if (!meta.title) {
    const title = '' // find heading
    meta.title = title
  }

  if (!meta.description) {
    const description = '' // find heading
    meta.description = description
  }

  return meta
}
