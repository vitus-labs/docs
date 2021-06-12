import { useEffect } from 'react'
import type { GetStaticProps, GetStaticPaths } from 'next'
import router from 'next/router'
import { serialize } from 'next-mdx-remote/serialize'
import { get } from '@vitus-labs/core'
import Head from 'next/head'
import Layout from '~/components/layouts/Docs'
import Meta from '~/components/meta/Meta'
import Markdown from '~/markdown'
import {
  getSlugsMap,
  extractFileRoute,
  getFileGroupSlug,
  getSlugs,
  getFileBySlug,
  generateMenu,
  getMetaDataFromFile,
  splitMetadataAndContentFromFile,
} from '~/core/markdown'

const DIR_PATH = 'docs'

const Docs = ({ meta = {}, content, menu, redirectUrl }: any) => {
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as any
  const routeMap = getSlugsMap(DIR_PATH)

  const mapSlug = get(routeMap, slug)

  const isSubcategory = Object.values(mapSlug as any).every(
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
  if (typeof mapSlug === 'object') {
    // @ts-ignore
    const redirectUrl = extractFileRoute(mapSlug[Object.keys(mapSlug)[0]])

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
  const file = await getFileBySlug(fileDirPath, mapSlug as string)

  // [2] generate side menu for docs
  const directoryMap = get(routeMap, groupSlug)
  const menu = await generateMenu(fileDirPath, directoryMap as any)

  // [3] generate side menu for docs
  // const categories = await generateCategories(DIR_PATH, slug)

  // [4] separate meta data and content
  const parsedFile = await splitMetadataAndContentFromFile(file)

  // [5] complete meta data
  const meta = await getMetaDataFromFile(parsedFile)

  // [6] stringify markdown content
  const mdxSource = await serialize(parsedFile.content as string)

  return {
    props: {
      meta,
      menu,
      content: mdxSource,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
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

export default Docs
