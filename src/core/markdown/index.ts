import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import mdx from 'remark-mdx'

const ROOT_DIRECTORY = join(process.cwd(), '/src/components/pages')

// --------------------------------------------------------
// Get All Available slugs in a map
// --------------------------------------------------------
export const getSlugsMap = (dir = 'docs') => {
  const dirPath = join(ROOT_DIRECTORY, dir)
  const directories = fs.readdirSync(dirPath)
  const hasDirectories = !directories.some((item) => item.endsWith('mdx'))

  const result: Record<string, any> = {}

  if (hasDirectories) {
    directories.forEach((item) => {
      result[item] = getSlugsMap(join(dir, item))
    })
  }

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
  const fullPath = join(...[ROOT_DIRECTORY, dir, ...slug, `index.mdx`])
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
export const splitMetadataAndContentFromFile = (file) => {
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
  submenu?: string[]
}

type GenerateMainMenu = (dir: string, slug: string[]) => Promise<Link[]>

export const generateMenu: GenerateMainMenu = async (dir, slug) => {
  // remove last item from slug to load group of files in the same section
  const categorySlug: string[] = slug.splice(0, slug.length - 1)
  // get slug map of keys of the same group
  const slugMap = getSlugsMap(join(...[dir, ...categorySlug]))
  // slug map keys
  const slugsMapKeys = Object.keys(slugMap)

  const result = slugsMapKeys.reduce(async (acc, item) => {
    const prevValue = await acc
    const file = await getFileBySlug(dir, [...categorySlug, item])
    const { content } = await splitMetadataAndContentFromFile(file)
    const parsedFile = await parseMarkdownFromFile(content)
    const menu = await filterMenu(parsedFile as any)
    const itemLink = `/${[dir, ...categorySlug, item].join('/')}`

    prevValue.push({
      title: menu.mainHeading,
      slug: itemLink,
      submenu: menu.subHeadings,
    })

    return prevValue
  }, [] as Link[]) as unknown

  return result as Link[]
}

export const getMetaDataFromFile = async (file) => {
  const meta = await splitMetadataAndContentFromFile(file).data

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
