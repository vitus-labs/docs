import type { GetStaticProps, GetStaticPaths } from 'next'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import Head from 'next/head'
import Layout from '~/components/layouts/Docs'
import Meta from '~/components/meta/Meta'
import {
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

  // [1] load a stati maarkdown file
  const file = await getFileBySlug(DIR_PATH, slug)

  // [2] generate side menu for docs
  const menu = await generateMenu(DIR_PATH, slug)

  // [3] separate meta data and content
  const parsedFile = await splitMetadataAndContentFromFile(file)

  // [4] complete meta data
  const meta = await getMetaDataFromFile(parsedFile)

  // [5] stringify markdown content
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
