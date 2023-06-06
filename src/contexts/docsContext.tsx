import { createContext, useContext, FC, ReactNode } from 'react'

type Context = {
  menu: Array<{
    label: string
    href: string
    data: Array<{
      label: string
      href: string
    }>
  }>
}

const ctx = createContext<Context>({ menu: [] })

const { Provider } = ctx

export const useDocsContext = () => useContext(ctx)

type Props = {
  children: ReactNode
  context: {
    menu: Array<{
      title: string
      slug: string
      submenu: Array<{
        title: string
        anchor: string
      }>
    }>
  }
}

const DocsProvider: FC<Props> = ({ children, context, ...props }) => {
  const transformedData = context.menu?.map((item) => ({
    label: item.title,
    href: item.slug,
    data: item.submenu?.map((item) => ({
      label: item?.title,
      href: item?.anchor,
    })),
  }))

  const ctx = { ...props, menu: transformedData }

  return <Provider value={ctx}> {children}</Provider>
}

export default DocsProvider
