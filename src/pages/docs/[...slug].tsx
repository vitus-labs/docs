import { useEffect } from 'react'
import type { GetStaticProps, GetStaticPaths } from 'next'
import router from 'next/router'
import Head from 'next/head'
// import remarkGfm from 'remark-gfm'
import { get } from '@vitus-labs/core'
import Layout from '~/components/layouts/Docs'
import Meta from '~/components/meta/Meta'
import Markdown from '~/markdown'

const Component = ({ meta = {}, content, menu, redirectUrl }: any) => {
  useEffect(() => {
    if (redirectUrl) {
      router.replace(redirectUrl)
    }
  }, [redirectUrl])

  if (redirectUrl || !menu) return null

  return (
    <>
      <Head>
        <Meta {...meta} />
      </Head>
      <Layout menu={menu}>
        <Markdown {...content} />
      </Layout>
    </>
  )
}

const DIR_PATH = 'docs'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { serialize } = await import('next-mdx-remote/serialize')
  const {
    getAllRoutesFromDir,
    extractFileRoute,
    getFileGroupSlug,
    getFileBySlug,
    generateMenu,
    getMetaDataFromFile,
    splitMetadataAndContentFromFile,
  } = await import('~/core/markdown')

  const slug = params?.slug as string[]
  const routesMap = await getAllRoutesFromDir(DIR_PATH)

  const slugRoute = get(routesMap, slug) as Record<string, any> | string

  if (typeof slugRoute === 'object' && slugRoute !== null) {
    const isSubcategory = Object.values(slugRoute).every(
      (item) => typeof item === 'object'
    )

    if (isSubcategory) {
      return {
        props: { redirectUrl: '/' },
      }
    }

    // --------------------------------------------------------
    // HANDLE REDIRECT FROM ROOT URLs
    // --------------------------------------------------------
    // if it's object it means it has subpages or sub urls, therefore we redirect
    // it to the first available option

    const firstRoute = Object.keys(slugRoute)[0]
    const redirectUrl = extractFileRoute(slugRoute[firstRoute])

    return {
      props: {
        redirectUrl: `/${[DIR_PATH, ...slug, redirectUrl].join('/')}`,
      },
    }
  }

  // --------------------------------------------------------
  // LOAD DATA FOR PAGE
  // --------------------------------------------------------
  const groupSlug = getFileGroupSlug(slug)
  const fileDirPath = [DIR_PATH, ...groupSlug]

  // [1] load a static markdown file
  const file = await getFileBySlug(fileDirPath, slugRoute)

  // [2] generate side menu for docs
  const directoryMap = get(routesMap, groupSlug) as Record<string, any>
  const menu = await generateMenu(fileDirPath, directoryMap)

  // [3] separate meta data and content
  const parsedFile = await splitMetadataAndContentFromFile(file)

  // [4] complete meta data
  const meta = await getMetaDataFromFile(parsedFile.data)

  // [5] stringify markdown content
  const mdxSource = await serialize(parsedFile.content, {
    // parseFrontmatter: true,
    // mdxOptions: {
    //   remarkPlugins: [remarkGfm],
    // },
  })

  return {
    props: {
      meta,
      menu,
      content: mdxSource,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { getSlugs } = await import('~/core/markdown')

  const slugs = getSlugs(DIR_PATH)

  return {
    paths: slugs.map((item) => ({
      params: {
        slug: item,
      },
    })),
    fallback: false,
  }
}

export default Component
