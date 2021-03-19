import type { GetStaticProps, GetStaticPaths } from 'next'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { get } from '@vitus-labs/core'
import Head from 'next/head'
import Layout from '~/components/layouts/Docs'
import Meta from '~/components/meta/Meta'
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

const Docs = ({ meta = {}, content, menu }: any) => {
  const mdx = hydrate(content)

  return (
    <>
      <Head>
        <Meta {...meta} />
      </Head>
      <Layout menu={menu}>{mdx}</Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params
  const routeMap = getSlugsMap(DIR_PATH)

  const mapSlug = get(routeMap, slug)

  // --------------------------------------------------------
  // HANDLE REDIRECT FROM ROOT URLs
  // --------------------------------------------------------
  // if it's object it means it has subpages or sub urls, therefore we redirect
  // it to the first available option
  if (typeof mapSlug === 'object') {
    const redirectUrl = extractFileRoute(mapSlug[Object.keys(mapSlug)[0]])

    return {
      redirect: {
        destination: `/${[DIR_PATH, ...slug, redirectUrl].join('/')}`,
        permanent: false,
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
  const mdxSource = await renderToString(parsedFile.content as string)

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
