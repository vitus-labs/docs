import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import remarkMdx from 'remark-mdx'
// import remarkGfm from 'remark-gfm'

const ROOT_DIRECTORY = join(process.cwd(), '/src/components/pages')

// --------------------------------------------------------
// Extract file route name
// --------------------------------------------------------
type ExtractFileRoute = (fileName: string) => string
export const extractFileRoute: ExtractFileRoute = (fileName) => {
  const fileNameToArray = fileName.replace('.mdx', '').split('-')

  let helper =
    fileNameToArray.length > 0 ? fileNameToArray.join('-') : fileNameToArray[0]

  if (!Number.isNaN(fileNameToArray[0])) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, ...rest] = fileNameToArray
    helper = rest.join('-')
  }

  return helper
}

// --------------------------------------------------------
//
// --------------------------------------------------------
export const getFileGroupSlug = (slug: string[]): string[] => {
  const newSlug = [...slug]

  newSlug.pop()

  return newSlug
}

// --------------------------------------------------------
// Get All Available slugs in a map
// --------------------------------------------------------
export const getAllRoutesFromDir = (dir = 'docs') => {
  const dirPath = join(ROOT_DIRECTORY, dir)
  const directories = fs.readdirSync(dirPath)

  const result: Record<string, unknown> = {}

  directories.forEach((item) => {
    if (item.endsWith('.mdx')) {
      const finalName = item.replace('.mdx', '').split('-')

      let helper = finalName.length > 0 ? finalName.join('-') : finalName[0]

      if (!Number.isNaN(finalName[0])) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_, ...rest] = finalName
        helper = rest.join('-')
      }

      result[helper] = item
    } else {
      result[item] = getAllRoutesFromDir(join(dir, item))
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
      value !== null &&
      typeof value === 'object' &&
      Object.keys(value as Record<string, any>).length > 0
    ) {
      result.push([...keys, key]) // index route
      transformSlugs(value as Record<string, any>, result, [...keys, key])
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
  const map = getAllRoutesFromDir(dir)
  const result: Array<string[]> = []

  transformSlugs(map, result, [])

  return result
}

// --------------------------------------------------------
// Load a file by slug
// --------------------------------------------------------
type GetFileBySlug = (slug: string[], filename: string) => Promise<string>

export const getFileBySlug: GetFileBySlug = async (slug, fileName) => {
  const fullPath = join(ROOT_DIRECTORY, ...slug, fileName)
  const file = fs.readFileSync(fullPath, 'utf8')

  return file
}

// --------------------------------------------------------
// Parse markdown file
// --------------------------------------------------------
// type ParseMarkdown = (file:string) =>
export const parseMarkdown = async (file: string) => {
  let result

  await remark()
    // .use(remarkGfm)
    .use(remarkMdx)
    .use(() => (tree) => {
      result = tree
    })
    .process(file)

  return result
}

// --------------------------------------------------------
// Parse markdown file
// --------------------------------------------------------
export const splitMetadataAndContentFromFile = async (file: string) =>
  matter(file)

// --------------------------------------------------------
// Load a file by slug
// --------------------------------------------------------
type FilterMenu = (obj: { children: any[] } & Record<string, unknown>) => {
  mainHeading?: string
  subHeadings?: string[]
}

export const filterMenu: FilterMenu = (obj) => {
  let mainHeading
  const subHeadings: string[] = []

  obj.children.forEach((item) => {
    if (item.type === 'heading' && item.depth === 1) {
      const { value } = item.children[0]
      mainHeading = value
    }

    if (item.type === 'heading' && item.depth === 2) {
      const { value } = item.children[0]
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

type GetMenuItem = (dir: string[], key: string, value: string) => Promise<Link>

const getMenuItem: GetMenuItem = async (dir, key, value) => {
  const file = await getFileBySlug(dir, value)
  const { content } = await splitMetadataAndContentFromFile(file)
  const parsedFile = await parseMarkdown(content)
  const menu = await filterMenu(parsedFile as any)
  const itemLink = `/${[...dir, key].join('/')}`

  return {
    title: menu.mainHeading,
    slug: itemLink,
    submenu: menu.subHeadings?.map((item) => ({
      title: item,
      anchor: `${itemLink}#${item.replace(/ /g, '-').toLowerCase()}`,
    })),
  }
}

type GenerateMainMenu = (
  dir: string[],
  folderMap: Record<string, string>
) => Promise<Link[]>

export const generateMenu: GenerateMainMenu = async (dir, folderMap) => {
  const RESULT = Object.entries(folderMap).map(([key, value]) =>
    getMenuItem(dir, key, value)
  )

  return Promise.all(RESULT)
}

export const getMetaDataFromFile = (data: Record<string, any>) => {
  const meta = { ...data }

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
