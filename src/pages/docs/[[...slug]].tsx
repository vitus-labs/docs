import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import Head from 'next/head'
import Layout from '~/components/layouts/Docs'
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
        <title>[{meta.title}] Vitus Labs Docs</title>
      </Head>
      <Layout menu={menu}>{mdx}</Layout>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const file = await getFileBySlug(DIR_PATH, slug)
  const menu = await generateMenu(DIR_PATH, slug)
  const meta = await getMetaDataFromFile(file)
  const { content } = splitMetadataAndContentFromFile(file)

  const mdxSource = await renderToString(content as string)

  return {
    props: {
      meta,
      menu,
      content: mdxSource,
    },
  }
}

export const getStaticPaths = async () => {
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
